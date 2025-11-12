import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { apiService } from '@/services/api.service';

interface WaitlistStats {
  count: number;
  max: number;
  remaining: number;
  percentage: number;
}

export function WaitlistProgress() {
  const [stats, setStats] = useState<WaitlistStats>({
    count: 0,
    max: 100,
    remaining: 100,
    percentage: 0,
  });
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await apiService.get<WaitlistStats>('/waitlist/count');
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch waitlist stats:', error);
        setLoading(false);
      }
    };

    fetchStats();

    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  // Animate counter on load
  useEffect(() => {
    if (loading) return;

    let start = 0;
    const end = stats.count;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stats.count, loading]);

  const getUrgencyMessage = () => {
    const { remaining } = stats;
    if (remaining === 0) {
      return {
        text: 'First 100 spots filled! Join the extended waitlist',
        color: 'text-muted-foreground',
      };
    }
    if (remaining <= 5) {
      return {
        text: '🚨 LAST 5 SPOTS!',
        color: 'text-red-600 dark:text-red-400 animate-pulse',
      };
    }
    if (remaining <= 20) {
      return {
        text: '⚡ Only 20 spots left!',
        color: 'text-orange-600 dark:text-orange-400',
      };
    }
    if (remaining <= 50) {
      return {
        text: '🔥 Filling up fast!',
        color: 'text-accent',
      };
    }
    return {
      text: `${remaining} spots available`,
      color: 'text-muted-foreground',
    };
  };

  const urgency = getUrgencyMessage();

  return (
    <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          {/* Numeric indicator */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold text-primary">
                {loading ? '...' : displayCount}
              </span>
              <span className="text-2xl md:text-3xl text-muted-foreground">
                / {stats.max}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              People on the waitlist
            </p>
          </div>

          {/* Progress bar */}
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
              style={{ width: `${Math.min(stats.percentage, 100)}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Urgency message */}
          <p className={`text-center text-sm font-semibold ${urgency.color}`}>
            {urgency.text}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

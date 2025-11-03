import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import type { Article } from '@/constants/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo Circle */}
          <div
            className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: article.logoColor + '20' }}
          >
            <div
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: article.logoColor }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <Badge variant="secondary" className="w-fit">
                {article.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{article.date}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
              {article.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <Separator />

            {article.url ? (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

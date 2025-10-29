import { Button } from '@/components/ui/button';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Blog', 'News', 'Media'];

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-muted-foreground mr-2">Filter:</span>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          size="sm"
          className={`rounded-full ${
            activeFilter === filter
              ? 'bg-secondary hover:bg-secondary/90 text-foreground'
              : 'hover:bg-secondary/20'
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}

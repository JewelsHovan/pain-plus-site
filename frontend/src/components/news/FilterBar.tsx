import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Blog', 'News', 'Media'];

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const { t } = useTranslation();

  const filterLabels: Record<string, string> = {
    All: t('newsMedia.filters.all'),
    Blog: t('newsMedia.filters.blog'),
    News: t('newsMedia.filters.news'),
    Media: t('newsMedia.filters.media'),
  };

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
          {filterLabels[filter]}
        </Button>
      ))}
    </div>
  );
}

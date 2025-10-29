import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { FilterBar } from '@/components/news/FilterBar';
import { ArticleCard } from '@/components/news/ArticleCard';
import { ArticleSkeleton } from '@/components/news/ArticleSkeleton';
import { Button } from '@/components/ui/button';
import { ARTICLES } from '@/constants/articles';

export function NewsMedia() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const filteredArticles =
    activeFilter === 'All'
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeFilter);

  const displayedArticles = filteredArticles.slice(0, displayCount);
  const hasMore = displayCount < filteredArticles.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setDisplayCount(6);
  };

  return (
    <div>
      <PageHero title="News & Media" />

      <section className="py-8 md:py-12 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {displayedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}

            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <ArticleSkeleton key={`skeleton-${index}`} />
              ))}

            {hasMore && !isLoading && (
              <div className="flex justify-center pt-8">
                <Button
                  size="lg"
                  onClick={handleLoadMore}
                  className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold"
                >
                  Load More Articles
                </Button>
              </div>
            )}

            {!hasMore && filteredArticles.length > 6 && (
              <p className="text-center text-muted-foreground pt-8">
                You've reached the end of the articles
              </p>
            )}

            {filteredArticles.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No articles found for this category
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

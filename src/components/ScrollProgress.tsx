import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/20 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

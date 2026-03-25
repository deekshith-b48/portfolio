import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(258 90% 68%), hsl(200 90% 60%))",
          boxShadow: "0 0 8px hsl(258 90% 68% / 0.6)"
        }}
      />
    </div>
  );
}

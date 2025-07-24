import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [
  React.RefCallback<Element>,
  boolean,
  IntersectionObserverEntry | undefined
] {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isVisible, setIsVisible] = useState(false);
  const previousIsVisible = useRef<boolean>(false);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    setIsVisible(entry.isIntersecting);
  };

  const node = useRef<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const disconnect = () => observer.current?.disconnect();

  const observe = () => {
    if (node.current && observer.current) {
      observer.current.observe(node.current);
    }
  };

  useEffect(() => {
    if (frozen) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });

    observe();

    return disconnect;
  }, [threshold, root, rootMargin, frozen]);

  const prevNode = useRef<Element | null>(null);

  const ref: React.RefCallback<Element> = (element) => {
    if (prevNode.current) {
      disconnect();
    }

    if (element) {
      node.current = element;
      observe();
    }

    prevNode.current = element;
  };

  return [ref, isVisible, entry];
}
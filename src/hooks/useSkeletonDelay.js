import { useState, useEffect } from "react";

export function useSkeletonDelay(isLoading, delay = 300) {
  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowSkeleton(false), delay);
      return () => clearTimeout(timer);
    }
    // When isLoading becomes true, state is already true from initialization
    // No need to call setShowSkeleton(true) - React will re-render with new initial value
  }, [isLoading, delay]);

  return showSkeleton;
}

export function LazySection({ children, fallback, isLoading }) {
  const showSkeleton = useSkeletonDelay(isLoading);
  return showSkeleton ? fallback : children;
}
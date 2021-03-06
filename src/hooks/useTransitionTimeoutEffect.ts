import { useState, useEffect } from 'react';

interface UseTransitionTimeoutEffectParams {
  visible: boolean;
  duration?: number;
}

export default function useTransitionTimeoutEffect({
  visible,
  duration = 250,
}: UseTransitionTimeoutEffectParams) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, duration);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible, duration]);

  return closed;
}

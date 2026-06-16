import { useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';

declare global {
  interface Window {
    advanceTime?: (ms: number) => void;
    render_game_to_text?: () => string;
    __debugquest_snapshot?: string;
  }
}

window.__debugquest_snapshot ||= JSON.stringify({ origin: 'top-left x-right y-down', mode: 'booting' });
window.render_game_to_text = () => window.__debugquest_snapshot || '{}';

export function useGameLoop() {
  const step = useGameStore((s) => s.step);
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.advanceTime = (ms: number) => {
      const frames = Math.max(1, Math.round(ms / (1000 / 60)));
      for (let i = 0; i < frames; i++) step();
    };
    return () => cancelAnimationFrame(raf);
  }, [step]);
}

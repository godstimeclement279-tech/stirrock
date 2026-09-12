import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
        setIsPointer(!!clickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: -12,
        top: -12,
      }}
    >
      <div
        className={`rounded-full border border-[#C5A880]/70 transition-all duration-300 ease-out flex items-center justify-center ${
          isPointer
            ? 'w-10 h-10 -translate-x-3 -translate-y-3 bg-[#C5A880]/15'
            : 'w-6 h-6 bg-transparent'
        }`}
      >
        <div
          className={`rounded-full bg-[#C5A880] transition-all duration-200 ${
            isPointer ? 'w-1.5 h-1.5' : 'w-1 h-1'
          }`}
        />
      </div>
    </div>
  );
}

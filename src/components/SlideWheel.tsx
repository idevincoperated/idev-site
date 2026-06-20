import { useState, useCallback, useEffect, useRef } from 'react';
import './SlideWheel.css';

interface SlideItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
}

interface SlideWheelProps {
  items: SlideItem[];
}

export default function SlideWheel({ items }: SlideWheelProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + items.length) % items.length;
      setActive(next);
    },
    [items.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className="wheel">
      <div
        className="wheel__stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => {
          let offset = i - active;
          if (offset > items.length / 2) offset -= items.length;
          if (offset < -items.length / 2) offset += items.length;

          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const visible = abs <= 2;

          const translateX = offset * 62;
          const translateZ = -abs * 160;
          const rotateY = offset * -42;
          const scale = isActive ? 1 : 1 - abs * 0.16;
          const opacity = visible ? 1 - abs * 0.3 : 0;
          const zIndex = 10 - abs;

          return (
            <button
              key={item.id}
              className={`wheel__card ${isActive ? 'wheel__card--active' : ''}`}
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: visible ? 'auto' : 'none',
              }}
              onClick={() => goTo(i)}
              aria-label={`Show ${item.title}`}
              aria-current={isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="wheel__card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="wheel__card-sheen" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="wheel__info">
        <h3>{items[active].title}</h3>
        <p>{items[active].subtitle}</p>
        <div className="wheel__tags">
          {items[active].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="wheel__controls">
        <button onClick={prev} aria-label="Previous project" className="wheel__nav-btn">
          &#8592;
        </button>
        <div className="wheel__dots">
          {items.map((item, i) => (
            <button
              key={item.id}
              className={`wheel__dot ${i === active ? 'wheel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next project" className="wheel__nav-btn">
          &#8594;
        </button>
      </div>
    </div>
  );
}

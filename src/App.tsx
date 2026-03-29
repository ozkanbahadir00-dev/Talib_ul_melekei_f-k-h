import { useEffect, useRef, useState } from 'react';
import studyCards from './data/studyData';
import './App.css';

const sortedCards = [...studyCards].sort((a, b) => {
  const numA = parseInt(a.id.replace(/\D/g, ''), 10);
  const numB = parseInt(b.id.replace(/\D/g, ''), 10);
  return numA - numB;
});

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTouchPrimary, setIsTouchPrimary] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const current = sortedCards[currentIndex];
  const shouldToggleAnswer = current.reveal === 'toggle';

  const nextTerm = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedCards.length);
    setShowAnswer(false);
  };

  const previousTerm = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedCards.length) % sortedCards.length);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    if (!shouldToggleAnswer) {
      return;
    }
    setShowAnswer((prev) => !prev);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"]')) {
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextTerm();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousTerm();
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAnswer();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [shouldToggleAnswer]);

  useEffect(() => {
    const media = window.matchMedia('(hover: none) and (pointer: coarse)');
    const updateDeviceType = () => setIsTouchPrimary(media.matches);

    updateDeviceType();
    media.addEventListener('change', updateDeviceType);

    return () => {
      media.removeEventListener('change', updateDeviceType);
    };
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current == null || touchStartY.current == null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;
    const isHorizontalSwipe = Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) + 10;

    touchStartX.current = null;
    touchStartY.current = null;

    if (!isHorizontalSwipe) {
      return;
    }

    if (deltaX > 0) {
      previousTerm();
      return;
    }

    nextTerm();
  };

  const controlsHint = isTouchPrimary
    ? 'Kaydırma: Sağa kaydır → önceki, sola kaydır → sonraki'
    : 'Klavye: ← önceki, → sonraki, Enter/Boşluk cevap';

  return (
    <main className="screen">
      <div className="heading">
        <p className="kicker">ISLAM HUKUKU</p>
        <h1>Fıkıh Terimleri</h1>
      </div>

      <section className="card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div>
          <div className="card-header">
            <span className="badge">{current.badge}</span>
            <span className="card-number">#{currentIndex + 1}</span>
          </div>
          <p className="question">{current.shown}</p>

          <div className={`answer ${!shouldToggleAnswer || showAnswer ? 'show' : ''}`}>
            <p>{current.answer}</p>
          </div>

          {shouldToggleAnswer && (
            <button
              className="toggle-btn"
              type="button"
              onClick={toggleAnswer}
            >
              {showAnswer ? 'Cevabı Gizle' : 'Cevabı Göster'}
            </button>
          )}

        </div>

        <button className="next-btn" type="button" onClick={nextTerm}>
          Sıradaki Terim <span aria-hidden="true">→</span>
        </button>
      </section>

      <p className="controls-hint">{controlsHint}</p>

      <p className="counter">
        {currentIndex + 1} / {sortedCards.length} terim
      </p>

      <footer className="footer">
        Fıkıh Terimleri Kartları © 2026
        <span className="footer-signature"> · Bahadır_Saü</span>
      </footer>
    </main>
  );
}

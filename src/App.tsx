import { useEffect, useRef, useState } from 'react';
import studyCards from './data/studyData';
import './App.css';

const MAX_RESULTS = 8;
const MAX_PREVIEW_LENGTH = 72;
const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function highlight(text: string, query: string): string {
  const safeText = escapeHtml(text);
  if (!query) return safeText;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safeText.replace(new RegExp(`(${escapeHtml(escaped)})`, 'gi'), '<mark>$1</mark>');
}

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

  // Search / card-selector state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchResults = searchQuery.trim()
    ? sortedCards
        .map((card, idx) => ({ card, idx }))
        .filter(({ card, idx }) => {
          const q = searchQuery.toLowerCase();
          const cardNum = String(idx + 1);
          return (
            cardNum.includes(q) ||
            card.shown.toLowerCase().includes(q) ||
            card.answer.toLowerCase().includes(q)
          );
        })
        .slice(0, MAX_RESULTS)
    : sortedCards
        .map((card, idx) => ({ card, idx }))
        .slice(0, MAX_RESULTS);

  const goToCard = (idx: number) => {
    setCurrentIndex(idx);
    setShowAnswer(false);
    setSearchQuery('');
    setSearchOpen(false);
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const inInput = target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"]');

      // Escape: close dropdown (works even from inside the input)
      if (event.key === 'Escape') {
        setSearchOpen(false);
        inputRef.current?.blur();
        return;
      }

      // Open search with Ctrl+K / Cmd+K or '/' key
      if (!inInput && (event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key === 'k'))) {
        event.preventDefault();
        setSearchOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
        return;
      }

      if (inInput) return;

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

      {/* ── Search / Card Selector ── */}
      <div className="search-wrap" ref={searchRef}>
        <div className={`search-box${searchOpen ? ' search-box--open' : ''}`}>
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Kart no veya anahtar kelime..."
            value={searchQuery}
            aria-label="Kart ara"
            onFocus={() => setSearchOpen(true)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(true);
            }}
          />
          {searchQuery && (
            <button
              className="search-clear"
              type="button"
              aria-label="Aramayı temizle"
              onClick={() => { setSearchQuery(''); inputRef.current?.focus(); }}
            >
              ✕
            </button>
          )}
          <kbd className="search-hint-key">{IS_MAC ? '⌘K' : 'Ctrl+K'} veya /</kbd>
        </div>

        {searchOpen && (
          <ul className="search-dropdown" role="listbox">
            {searchResults.length === 0 ? (
              <li className="search-no-result">Sonuç bulunamadı</li>
            ) : (
              searchResults.map(({ card, idx }) => (
                <li
                  key={card.id}
                  role="option"
                  aria-selected={idx === currentIndex}
                  className={`search-item${idx === currentIndex ? ' search-item--active' : ''}`}
                  onMouseDown={() => goToCard(idx)}
                >
                  <span className="search-item-num">#{idx + 1}</span>
                  <span
                    className="search-item-text"
                    dangerouslySetInnerHTML={{
                      __html: highlight(
                        card.shown.length > MAX_PREVIEW_LENGTH
                          ? card.shown.slice(0, MAX_PREVIEW_LENGTH) + '…'
                          : card.shown,
                        searchQuery
                      ),
                    }}
                  />
                  <span className="search-item-badge">{card.badge}</span>
                </li>
              ))
            )}
          </ul>
        )}
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

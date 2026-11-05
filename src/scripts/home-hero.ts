/** Home hero background carousel: full cycles at 4s, then 8s, then 12s per slide. */
export function initHomeHero(root: Document | HTMLElement = document): void {
  const hero = root.querySelector('[data-hero]');
  if (!(hero instanceof HTMLElement)) return;

  const slides = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const status = hero.querySelector('[data-hero-status]');
  if (slides.length < 2) return;

  let slideAlts: string[] = [];
  try {
    slideAlts = JSON.parse(hero.dataset.heroAlts ?? '[]');
  } catch {
    slideAlts = [];
  }

  const cycleIntervals = [4000, 8000, 12000];
  let cycleIndex = 0;
  let slideIndex = slides.findIndex((slide) => slide.dataset.active === 'true');
  if (slideIndex < 0) slideIndex = 0;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function announce(): void {
    if (status instanceof HTMLElement && slideAlts[slideIndex]) {
      status.textContent = `Showing photo ${slideIndex + 1} of ${slides.length}: ${slideAlts[slideIndex]}`;
    }
  }

  function show(index: number): void {
    slideIndex = index;
    slides.forEach((slide, i) => {
      slide.dataset.active = i === slideIndex ? 'true' : 'false';
    });
    announce();
  }

  announce();

  if (reducedMotion) return;

  let timer: ReturnType<typeof setTimeout> | undefined;

  function scheduleNext(): void {
    const delay = cycleIntervals[cycleIndex] ?? 4000;
    timer = window.setTimeout(() => {
      const nextIndex = (slideIndex + 1) % slides.length;
      show(nextIndex);
      if (nextIndex === 0) {
        cycleIndex = (cycleIndex + 1) % cycleIntervals.length;
      }
      scheduleNext();
    }, delay);
  }

  scheduleNext();
}

if (typeof document !== 'undefined') {
  initHomeHero();
}

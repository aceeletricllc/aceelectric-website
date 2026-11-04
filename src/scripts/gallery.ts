export function initGallery(root: Document | HTMLElement = document): void {
  const gallery = root.querySelector('[data-gallery]');
  if (!(gallery instanceof HTMLElement)) return;

  const filters = gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-filter]');
  const items = gallery.querySelectorAll<HTMLElement>('[data-gallery-item]');
  const dialog = gallery.querySelector<HTMLDialogElement>('[data-gallery-dialog]');
  const dialogImg = gallery.querySelector<HTMLImageElement>('[data-gallery-dialog-img]');
  const dialogCaption = gallery.querySelector<HTMLElement>('[data-gallery-dialog-caption]');
  const closeBtn = gallery.querySelector<HTMLButtonElement>('[data-gallery-close]');

  let lastFocus: HTMLElement | null = null;

  function applyFilter(category: string) {
    items.forEach((item) => {
      const itemCategory = item.dataset.category ?? '';
      const show = category === 'all' || itemCategory === category;
      item.hidden = !show;
    });
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.galleryFilter ?? 'all';
      filters.forEach((btn) => {
        const pressed = btn === button;
        btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      });
      applyFilter(category);
    });
  });

  function openDialog(trigger: HTMLElement) {
    if (!dialog || !dialogImg || !dialogCaption) return;
    const src = trigger.dataset.fullSrc;
    const alt = trigger.dataset.alt ?? '';
    const caption = trigger.dataset.caption ?? '';
    if (!src) return;

    lastFocus = trigger;
    dialogImg.src = src;
    dialogImg.alt = alt;
    dialogCaption.textContent = caption;
    dialog.showModal();
    closeBtn?.focus();
  }

  function closeDialog() {
    if (!dialog) return;
    dialog.close();
    dialogImg?.removeAttribute('src');
    lastFocus?.focus();
  }

  gallery.querySelectorAll<HTMLElement>('[data-gallery-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openDialog(trigger));
  });

  closeBtn?.addEventListener('click', closeDialog);

  dialog?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDialog();
  });

  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
}

if (typeof document !== 'undefined') {
  initGallery();
}

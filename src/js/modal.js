export const modalControl = document.addEventListener(
  'DOMContentLoaded',
  () => {
    const modal = document.querySelector('.modal-content');
    const closeModalBtn = document.querySelector('.close');

    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('is-hidden');
    });

    window.addEventListener('click', event => {
      if (event.target !== modal) {
        modal.classList.add('is-hidden');
      }
    });

    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        modal.classList.add('is-hidden');
      }
    });
  }
);

export * from './modal'
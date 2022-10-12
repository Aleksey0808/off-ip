(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-mob-m-open]'),
      closeMenuBtn: document.querySelector('[data-menu-mob-m-close]'),
      menu: document.querySelector('[data-menu-mob-m]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();
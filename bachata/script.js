document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.compact-toggle-input');
    const toggleText = document.querySelector('.compact-toggle-text');
    
    toggle.addEventListener('change', () => {
      const isChecked = toggle.checked;
      toggleText.textContent = isChecked ? 'Скрыть цены' : 'Показать цены';
      document.body.classList.toggle('prices-visible', isChecked);
    });
  
    // Инициализация
    toggleText.textContent = toggle.checked ? 'Скрыть цены' : 'Показать цены';
    document.body.classList.toggle('prices-visible', toggle.checked);
  });
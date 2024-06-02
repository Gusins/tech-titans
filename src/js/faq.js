document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.ac-header');
    const panels = document.querySelectorAll('.ac-panel');
    const svgs = document.querySelectorAll('.ac-svg');
    const items = document.querySelectorAll('.ac');

    // Установка початкового стану першого елементу акордеону
    items[0].classList.add('open');
    panels[0].classList.add('open');
    svgs[0].classList.add('rotate');
    triggers[0].style.backgroundColor = 'white'; // Змінили колір фону на білий
    panels[0].style.backgroundColor = 'rgba(0, 176, 104, 0.20)'; // Змінили колір фону 

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', function () {
        const isOpen = items[index].classList.contains('open');

        // Закриття всіх елементів
        items.forEach(item => {
          item.classList.remove('open');
        });
        panels.forEach(p => {
          p.classList.remove('open');
          p.style.backgroundColor = 'transparent';
        });
        svgs.forEach(svg => {
          svg.classList.remove('rotate');
        });
        triggers.forEach(t => {
          t.style.backgroundColor = 'white'; // Змінили колір фону на білий
        });

        // Відкриття або закриття поточного елемента
        if (!isOpen) {
          items[index].classList.add('open');
          panels[index].classList.add('open');
          svgs[index].classList.add('rotate');
          triggers[index].style.backgroundColor = 'white'; // Змінили колір фону на білий
          panels[index].style.backgroundColor = 'rgba(0, 176, 104, 0.20)'; // Змінили колір фону
        }
      });
    });
});

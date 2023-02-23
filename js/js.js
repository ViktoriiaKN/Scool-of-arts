// Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems);
// Створюємо заголовок:
const titleEl = document.createElement(''); // В дужки передаємо валідний (якщо передати не валідний тег,
// то він його створить також, що нам не потрібно) тег, який потрібно створити
// елемент за допомогою createElement('') створюється у пам'яті, в розмітці він не створюється
// Додавати елемент до розмітки будемо тоді, коли його підготуємо:
titleEl.classList.add('page-title');
titleEl.textContent.add('Це заголовок сторінки');
console.log(titleEl); // Ми зконструювали DOM-element в пам'яті 
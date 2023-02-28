// Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems);
// Створюємо заголовок:
/* const titleEl = document.createElement('');  */// В дужки передаємо валідний (якщо передати не валідний тег,
// то він його створить також, що нам не потрібно) тег, який потрібно створити
// елемент за допомогою createElement('') створюється у пам'яті, в розмітці він не створюється
// Додавати елемент до розмітки будемо тоді, коли його підготуємо:
/* titleEl.classList.add('page-title');
titleEl.textContent.add('Це заголовок сторінки');
console.log(titleEl); */ // Ми зконструювали DOM-element в пам'яті і тепер його потрібно додати на сторінку,
// щоб він там з'явився:

// Метод appendChild: він отримує посилання на наш елемент, тому нам обов'язково потрібно вказувати батьківський
// елемент: тобто в кого ми хочемо додати посилання на цей елемент: parentElem.appendChild(elem);
// appendChild(elem) додає елемент в кінець

// Створимо зображення:
// https://pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
// valais-alpine-mountaines-glasier

/* const imageEl = document.createElement('img');
imageEl.src = 'https://pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountaines-glasier';
imageEl.width = 640; */ // Задасть ширину 640
/* console.log('imageEl', imageEl); */

/* document.body.appendChild(imageEl); */ // Ми говоримо:"Додай дитину в самий кінець боді"
// Тут важливо розуміти, що в HTML завжди має бути те, куди ти додаєш, бо інакше працювати не буде

// СТВОРЮЄМО ТА ДОДАЄМО НОВИЙ ПУНКТ В МЕНЮ:
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item'); // Додали клас на лішку

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link'); // Додали клас на посилання
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';

/* console.log(navItemEl);
console.log(navLinkEl); */

// Вкладаємо посилання в лішку:
navItemEl.appendChild(navLinkEl);

/* console.log(navItemEl); */

// Тепер додаємо до списку цей елемент:
const navEl = document.querySelector('.site-nav'); // Знаходимо клас в який хочемо додати (site-nav)
console.log(navEl);
/* navEl.appendChild(navItemEl); */ // Кажемо, що останнім елементом вставити navItemEl

// ДОДАЄМО ЕЛЕМЕНТ НА ПОЧАТОК СПИСКУ:
/* navEl.insertBefore(navItemEl */ /* Першим вказуємо елемент який хочемо додати *//* , navEl.firstElementChild */
/* Другим вказуємо який елемент (navEl) і перед чим додати (.firstElementChild) *//* ); */

// ДОДАЄМО ЕЛЕМЕНТ ПЕРЕД ОСТАННІМ ЕЛЕМЕНТОМ У СПИСКУ:
/* navEl.insertBefore(navItemEl, navEl.lastElementChild);
 */
// Щоб поставити елемент перед конкретним елементом (наприклад, перед другим зверху), використаємо такий запис:
navEl.insertBefore(navItemEl, navEl.children[1]); // у квадратних дужках зазначаємо індекс елементу


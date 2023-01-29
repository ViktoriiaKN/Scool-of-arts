// Деструктуризація масиву, на відміну від деструктуризації об'єктів, виконується по порядку:

/* const rgb = [255, 100, 80]; */
/* const [a, b, c] = rgb;  */// Запис: квадратны дужки зліва від знаку дорівнює, а з права масив, що деструктуризується

/* console.log(a, b, c); */ // У якому порядку записали змынны - в такому порядку й записуються значення,
// тобто а = 255, b = 100, с = 80.

// Якщо потрібно пропустити якусь властивість, то це зробить оператор кома:
/* const rgb = [255, 100, 80]; */
/* const [a, , c] = rgb; */ // Пропускаємо властивість
/* console.log(a, c); */

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

/* const ratings = Object.values(authors); */

/* console.log(Math.max(...ratings)); */ // Спосіб отримання найвищого рейтингу

const ratings = Object.keys(authors);

for (const key of keys) {
  console.log(key);
  console.log(authors[key]);
}


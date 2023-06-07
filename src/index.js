const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica',
  );

const oldBooksOrdered = (year) =>
  books
    .filter((book) => year - book.releaseYear > 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);

// const filterOldBooks = (year) => {
//   return books.filter((book) => {
//     const oldBooks = year - book.releaseYear > 60;
//     return oldBooks;
//   });
// };

// const oldBooksOrdered = (year) => {
//   return filterOldBooks(year).sort((a, b) => {
//     return a.releaseYear - b.releaseYear;
//   });
// };

console.log(oldBooksOrdered(2020));

const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

const oldBooks = (year) => {
  // escreva seu código aqui
};

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};

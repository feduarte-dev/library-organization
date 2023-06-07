const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica',
  );

// Requisito 2
const oldBooksOrdered = (year) =>
  books
    .filter((book) => year - book.releaseYear > 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((livro) => livro.name);

// Requisito 4
const fantasyOrScienceFictionAuthors = () => fantasyOrScienceFiction()
  .map((book) => book.author.name).sort();

// Requisito 5
const oldBooks = (year) => books.filter((book) => year - book.releaseYear > 60)
  .map((book) => book.name);

console.log(oldBooks(2022));
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

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

import { Author } from './author';
import { Book } from './book.model';
import { Library } from './library.model';
import { mock, when, instance } from 'ts-mockito';

describe('Pruebas para Library', () => {

  /**
   * Nombre: Buscar libros por autor (valido) en la biblioteca
   * 
   * Objetivo: Verificar que el método searchByAuthor de la clase Library funcione correctamente
   * 
   * Datos de prueba:
   *  Biblioteca:
   *     Libro 1: Carrie 
   *     Autor libro 1: Stephen King
   *     Libro 2: Harry Potter
   *     Autor libro 2: JK Rowling
   *   Autor de búsqueda: Stephen King
   * 
   * Resultado esperado: Se debe devolver el libro Carrie.
   */
  it('1. Buscar libros por autor válido en la biblioteca', () => {
    const authorA = mock<Author>();
    when(authorA.getName()).thenReturn('Stephen King');
    const author2 = mock<Author>();
    when(author2.getName()).thenReturn('JK Rowling');
    let bookA = new Book('Carrie', instance(authorA), 10);
    let bookB = new Book('Harry Potter', instance(author2), 10);
    let library = new Library();
    library.addBook(bookA);
    library.addBook(bookB);

    let result = library.searchByAuthor('Stephen King');
    expect(result.size()).toBe(1);
    expect(result.getBooks()[0].getTitle()).toBe('Carrie');
  });

  /**
   * Nombre: Buscar libros por autor (invalido) en la biblioteca
   * 
   * Objetivo: Verificar que el método searchByAuthor de la clase Library funcione correctamente cuando se busca un autor que no existe
   * 
   * Datos de prueba:
   *  Biblioteca:
   *     Libro 1: Carrie 
   *     Autor libro 1: Stephen King
   *     Libro 2: Harry Potter
   *     Autor libro 2: JK Rowling
   *   Autor de búsqueda: Autor inválido (George Orwell)
   * 
   * Resultado esperado: No se debe devolver ningún libro
   */
  it('2. Buscar libros por autor inválido en la biblioteca', () => {
    const authorA = mock<Author>();
    when(authorA.getName()).thenReturn('Stephen King');
    const author2 = mock<Author>();
    when(author2.getName()).thenReturn('JK Rowling');
    let bookA = new Book('Carrie', instance(authorA), 10);
    let bookB = new Book('Harry Potter', instance(author2), 10);
    let library = new Library();
    library.addBook(bookA);
    library.addBook(bookB);

    let result = library.searchByAuthor('George Orwell');
    expect(result.size()).toBe(0);
  });

   /**
   * Nombre: Buscar libros por título en la biblioteca
   * 
   * Objetivo: Verificar que el método searchByTitle de la clase Library funcione correctamente
   * 
   * Datos de prueba:
   *  Biblioteca:
   *     Libro 1: Carrie 
   *     Autor libro 1: Stephen King
   *     Libro 2: Harry Potter
   *     Autor libro 2: JK Rowling
   *   Título de búsqueda: "Harry"
   * 
   * Resultado esperado: Se debe devolver el libro "Harry Potter".
   */
   it('3. Buscar libros por título válido en la biblioteca', () => {
    const authorA = mock<Author>();
    when(authorA.getName()).thenReturn('Stephen King');
    const authorB = mock<Author>();
    when(authorB.getName()).thenReturn('JK Rowling');
    
    let bookA = new Book('Carrie', instance(authorA), 10);
    let bookB = new Book('Harry Potter', instance(authorB), 10);
    
    let library = new Library();
    library.addBook(bookA);
    library.addBook(bookB);

    let result = library.searchByTitle('Harry');
    expect(result.size()).toBe(1);
    expect(result.getBooks()[0].getTitle()).toBe('Harry Potter');
  });
});

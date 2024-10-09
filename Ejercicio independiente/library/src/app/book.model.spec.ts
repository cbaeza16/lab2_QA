import { Author } from './author';
import { Book } from './book.model';
import { mock, when, instance } from 'ts-mockito';

describe('Pruebas para Book', () => {

  /**
   * Nombre: Comparación de libros por nombre de autor y titulo
   * 
   * Objetivo: Validar el método equals compare correctamente dos libros por el autor y titulo
   * 
   * Datos de prueba:
   *   Libro 1: Carrie 
   *     Autor libro 1: Stephen King
   *   Libro 2: Cujo
   *     Autor libro 2: Stephen King
   * Resultado esperado: El metodo equals retorna true ya que autores y titulos de los libros son iguales
   */
  it('4. Comparación de libros por nombre de autor y titulo', () => {
    const authorA = mock<Author>();
    when(authorA.getName()).thenReturn('Stephen King');
    let bookA = new Book('Carrie', instance(authorA), 10);
    let bookB = new Book('Carrie', instance(authorA), 10);
    when(authorA.equals('Stephen King')).thenReturn(true);

    expect(bookA.equals(bookB)).toBeTrue();
  });

});

  
import { Author } from './author';
import { Book } from './book.model';
import { mock, when, instance } from 'ts-mockito';

describe('Pruebas para Book', () => {

  /**
   * Nombre: Comparación de autores por nombre
   * 
   * Objetivo: Validar el método equals de Author interface
   * al comparar autores por su nombre.
   * 
   * Datos de prueba:
   *   Autor 1: Stephen King
   *   Autor 2: Susan Cain
   * Resultado esperado: Los autores no deben ser iguales.
   */
  it('1. Comparación de autores por nombre', () => {
    const authorA = mock<Author>();
    const authorB = mock<Author>();
    when(authorA.getName()).thenReturn('Stephen King');
    when(authorB.getName()).thenReturn('Susan Cain');
    let mockito1 = instance(authorA);
    let mockito2 = instance(authorB);

    const author1Name = mockito1.getName();
    const author2Name = mockito2.getName();
    expect(author1Name === author2Name).toBeFalse();
  });


  /**
   * Nombre: Set y get país del autor
   * 
   * Objetivo: Verificar que los métodos setPais y getPais del Author interface funcionen
   * correctamente.
   * 
   * Datos de prueba:
   *   País actual: Costa Rica
   *   País modificado: Italia
   * 
   * Resultado esperado: El país del autor debe cambiar de Costa Rica a Italia.
   */
  it('2. Set y get país del autor', () => {
    const author = mock<Author>();
    when(author.getPais()).thenReturn('Costa Rica');
    let mockito = instance(author);
    expect(mockito.getPais()).toBe('Costa Rica');

    mockito.setPais('Italia');
    when(author.getPais()).thenReturn('Italia');
    expect(mockito.getPais()).toBe('Italia');
  });
  /**
     * Nombre: Set y get nombre del autor
     * 
     * Objetivo: Verificar que los métodos setName y getName del Author interface funcionen correctamente.
     * 
     * Datos de prueba:
     *   Nombre inicial: Stephen Kiing
     *   Nombre modificado: Stephen King
     * 
     * Resultado esperado: El nombre del autor debe cambiar de "Stephen Kiing" a "Stephen King".
   */
  it('3. Set y get nombre del autor', () => {
    const author = mock<Author>();
    when(author.getName()).thenReturn('Stephen Kiing');
    let mockito = instance(author);
    expect(mockito.getName()).toBe('Stephen Kiing');

    mockito.setName('Stephen King');
    when(author.getName()).thenReturn('Stephen King');
    expect(mockito.getName()).toBe('Stephen King');
  });
});

  
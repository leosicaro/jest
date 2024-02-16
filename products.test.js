
const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./products');




describe('Adding Products', () => {//descripcion de la funcion en si
    beforeEach(() => {//para reiniciar todo
        resetProducts();
    });
    
    
    test('should add a product', () => {//describo el testeo
        addProduct('Manzana', 2);
        expect(getProduct()).toStrictEqual([{ id: 1, name: 'Manzana', price: 2 }]);//recomendado por jest el uso del toStrictEqual,toBe no le gusto
    });

    test('should fail when adding a repeated product', () => {
        addProduct('Manzana', 2)
        expect(() => addProduct('Manzana', 3)).toThrow('Product already exists');//el texto debe coincidir en ambos scripts
        
    });

     test('should fail when adding a product with no name', () => {
        expect(() => addProduct(undefined, 3)).toThrow('Name required');
    });

    test('should fail when adding a product with no price', () => {
        expect(() => addProduct('Manzana')).toThrow('Price required');
    });
});

describe('Removing Products', () => {
    test('should remove a product', () => {
        addProduct('Product 1', 10);
        removeProduct(1);
        expect(getProduct()).toStrictEqual([]);
    });


  //  test('should fail when removing a non-existing product', () => {
  //      expect(() => removeProduct(1)).toThrow('Product not found');
  //  });
});
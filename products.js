

products = []
id = 0



const resetProducts = () => {//habia que crearla
    products = [];
    id = 0;
}



const getProduct = ()=>{return products} //necesitamos una funcion GetProduct para usar el ()=> del jest

const addProduct = (name,price) =>{
    if (products.some(product => product.name === name)) {
        throw new Error('Product already exists');
    }
    if (!name) {
        throw new Error('Name required');
    }
    if (price === undefined) {
        throw new Error('Price required');
    }


    id ++;
    products.push({
        id,
        name:name,
        price:price
    })
    getProduct
}
const removeProduct = (productId) => {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }

    products.splice(index, 1);
};





module.exports = {addProduct,products,getProduct,resetProducts,removeProduct}


// quais ações meu carrinho pode fazer?

//
// casos de uso
//
// -> adicicionar item
// -> deletar item do carinho
// -> remover item
// -> listar itens
// -> calcular o total do carrinho


async function addItem(userCart,  item) {
    userCart.push(item);
    return userCart;

}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item ${name} not found in cart.`);
    }
    return userCart;
}


async function removeItem(userCart, item) {
    // encontrar o indice do item
    const indexFound = userCart.findIndex(cartItem => cartItem.name === item.name);
    if (indexFound == -1) {
        console.log(`\nItem não encontrado.\n`);
        return;
    } else {       
        if (userCart[indexFound].quantity > 1) {
            userCart[indexFound].quantity--;
        } else {
            if (userCart[indexFound].quantity === 1) {
            userCart.splice(indexFound, 1);      
            }  
        }
    }
    return ;
}

async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0); 
    console.log(`🛒 Total:  ${result.toFixed(2)}`);
}

async function displaycart(userCart) {
    console.log("Shopee cart list:");
    console.log('_'.repeat(100))
    userCart.forEach((item, index) => {
        const nameColumn = item.name.padEnd(30, ' ');
        const priceColumn = item.price.toFixed(2).padStart(12, ' ');
        const quantityColumn = item.quantity.toString().padStart(5, ' ');
        const subtotalColumn = item.subtotal().toFixed(2).padStart(12, ' ');
        console.log(`${index+1} | ${nameColumn} | R$: ${priceColumn} | ${quantityColumn}x | Subtotal = R$: ${subtotalColumn} `);
    });
    console.log('='.repeat(100))
}

export default {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart,
};


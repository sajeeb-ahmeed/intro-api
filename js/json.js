// API 
// Application Programming Interface

// JSON 
// Javascripts object notation 

// stringify / parse 

const shop = {
    name: 'ALia Store ',
    id: 45,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Batth',
        profession: 'actor'
    },
    division: 'dhaka'
}
const stringify = JSON.stringify(shop);
const shopParse = JSON.parse(stringify)
console.log(shop.name);
// console.log(shopParse);
// console.log(stringify);
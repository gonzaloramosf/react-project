export const items = [
        {
            id: 0,
            name: 'Nescafe Dolce Gusto',
            description: 'Capsulas de cafe Dolce Gusto: Moka',
            price: 1100,
            stock: 17
        },
        {
            id: 1,
            name: 'Nescafe Dolce Gusto',
            description: 'Capsulas de cafe Dolce Gusto: Espresso',
            price: 1100,
            stock: 7
        },
        {
            id: 2,
            name: 'Nescafe Dolce Gusto',
            description: 'Capsulas de cafe Dolce Gusto: Espresso Intenso',
            price: 1100,
            stock: 9
        },
        {
            id: 3,
            name: 'Nescafe Dolce Gusto',
            description: 'Capsulas de cafe Dolce Gusto: Lungo',
            price: 1100,
            stock: 13
        }
];

export function getItems () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 4000)
    })
}

// item.id = itemId ? item : console.log(`error`)

export function getItemById (itemId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(items.filter(item => { 
            if (item.id === +itemId) {
                return item;
            }
         })), 2000)
    })
} 

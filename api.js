// java script object notation ( jeson)
const shop = {
    owner: 'Alia',
    address: {
        street: 'vootergoli',
        city: 'danmondi',
        country: 'bd'
    },
    product: ['laptop', 'mobile', 'mic', 'keyborad'],
    revenew: 45000,
    isopen: true,
    isnew: false
}
console.log(shop);
const shopjeson = JSON.stringify(shop);
console.log(shopjeson);
const shopobj = JSON.parse(shopjeson);
console.log(shopobj);
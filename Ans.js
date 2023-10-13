const data = [
    {
        name: '石斑',
        price: 300,
    },
    {
        name: '烏魚',
        price: 100,
    },
    {
        name: '鱈魚',
        price: 1000,
    },
    {
        name: '章魚',
        price: 20,
    },
    {
        name: '花枝',
        price: 60,
    }

]

const getdata = data.some(function (fish) {
    return fish.name === '鱈魚'
})

console.log(getdata);


const getprice = data.every(function (price) {
    return price.price <= 2000
})
console.log(getprice);

const getLow90 = data.filter(function (fish) {
    return fish.price < 70
})

// console.log(getLow90);

const name = getLow90.map(function (seaFood) {
    return seaFood.name
})
console.log(name);



const notFish = data.filter(function (fish) {
    return !fish.name.includes('魚')
})

console.log(notFish);


const getlPrice = data.filter(function (item) {
  return item.price > 90

})

// console.log(getlPrice);


const totalPrice = getlPrice.reduce(function(sum,item) {
    return sum += item.price
},0)
console.log(totalPrice);


let array = [4, 5, 6, 8, 12, 5, -2, 0]

array.reduce( function (prosli, sadasnji) {
    console.log(sadasnji)
})

array.reduce( function (prosli, sadasnji) {
    console.log(prosli)
})

const getMax = (a,b) => Math.max(a,b)
const getMin = (a,b) => Math.min(a,b)

console.log(array.reduce(getMax))
console.log(array.reduce(getMin))
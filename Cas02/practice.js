let niz = [1, 2, 3, 4, 5]

console.log("1.")
niz.forEach((element) => { console.log(element) })

console.log("2.")
niz.forEach((element) => { if(element%2 == 0) console.log(element)})

const sumaNiza = (niz) => {
    let suma = 0

    niz.forEach((element) => { suma+=element})

    return suma
}
console.log("3.")
console.log(sumaNiza(niz))

const brojVecihOdPrvog = (niz) => {
    let brojac = 0;
    const prvi = niz[0]

    for (let i = 1; i < niz.length; i++)
        if (niz[i] > prvi)
            brojac++

    return brojac
}
console.log("4.")
console.log(brojVecihOdPrvog(niz))
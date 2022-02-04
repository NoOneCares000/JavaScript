// 1. Zadatak
const kvadrat = (x) => {
    return x*x;
}

// 2. Zadatak
const ispisiNiz = (niz) => {
    niz.forEach(element => console.log(element));
}

// 3. Zadatka
const posedujePozitivne = (niz) => {
    niz.forEach(element => {if(element > 0 && !isNaN(element)) console.log(element)})
}

// 4. Zadatak
const prostBroj = (x) => {
    if (!isNaN(x)) {
        for (let i = 1; i < x/2; i+=2)
            if (x%i === 0)
                return false
        return true
    }
    return NaN
}

// Bonus
let SviZadaci = {

    kvadrat: (x) => {
        return x*x;
    },

    ispisiNiz: (niz) => {
        niz.forEach(element => console.log(element));
    },

    posedujePozitivne: (niz) => {
        for (element of niz){
            if(element > 0 && !isNaN(element)) 
                return true
        } 
        return false
    },

    prostBroj: (x) => {
        if (!isNaN(x)) {
            for (let i = 1; i < x/2; i+=2)
                if (x%i === 0)
                    return false
            return true
        }
        return NaN
    }
}

console.log(SviZadaci.kvadrat(2))
SviZadaci.ispisiNiz([1, 2, 3, 4])
console.log(SviZadaci.posedujePozitivne([-1, -2, 2, -4]))
console.log(SviZadaci.prostBroj(6))
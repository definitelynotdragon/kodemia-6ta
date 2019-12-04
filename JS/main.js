var word = "Perros"
word [0] + word [1]+ word [2]+ word [3]+ word [4]

var number = 10
if (number >= 0 && number <= 100 &&  number%10 === 0){
   console.log("Esta entre 0 y 100 y es multiplo de diez")
}

var name = "Joselito".length

if (name % 2 === 0){
    if (name >= 0 ){
        if (name <=10 ){
            console.log("Numero esta entre cero y diez")
        }else if(name<=15){
            console.log("El numero esta entre once y quince")
        }else {
            console.log("El numero es mayor que quince")
        }
    }
}else {
    console.log("No es par")
}


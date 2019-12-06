var numbers = [0,1,2,3,4,5]
var contador = 0
while (contador < numbers.length ){
    console.log (numbers[contador])
    contador++
}

var numbers = [1,2,3,4]
var count = 0
do {
	console.log(numbers[count])
	count++
} while (count < numbers.length)

//For

var word = "Palabra"
var vowel = "aeiou"
var vowelAmount = 0

for (var count = 0 ; count<word.length ; count ++){
    let letter = word[count]
    if (vowel.includes(letter)){
        vowelAmount++
    }
}

if (vowelAmount >= 3) {
    console.log(`En efecto tiene ${vowelAmount} vocales`);
} else {
    console.warn('Te faltan vocales');
}

//Do While

var word = "Mamada"
var vowel = "aeiou"
var vowelAmount = 0
var count = 0

do {  
    let letter = word[count]
    if (vowel.includes(letter)){
        vowelAmount++
    }
    count++
}
while (count<word.length)

if (vowelAmount >= 3) {
    console.log(`En efecto tiene ${vowelAmount} vocales`);
} else {
    console.warn('Te faltan vocales');
}

//While

var word = "Mama"
var vowel = "aeiou"
var vowelAmount = 0
var count = 0

while (count<word.length){  
    let letter = word[count]
    if (vowel.includes(letter)){
        vowelAmount++
    }
    count++
}

if (vowelAmount >= 3) {
    console.log(`En efecto tiene ${vowelAmount} vocales`);
} else {
    console.warn('Te faltan vocales');
}
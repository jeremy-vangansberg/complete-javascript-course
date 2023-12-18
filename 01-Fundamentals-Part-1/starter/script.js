// let js = "amazing";
// if (js === "amazing") alert("JS is fun");
// console.log(2 + 2);

// console.log("jeremy")

// console.log("22")

// let 3years = 3

// let javascriptIsFun = true
// console.log(typeof true)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jeremy')


// // javascriptIsFun = 'oui'

// // let year;
// // year = 1990;

// // console.log(typeof null);

// // let age = 32;
// // age = 33;

// // const birthYear = 1990;

// // birthYear = 1991
// // console.log(birthYear)

// const firstName = "jeremy"
// const lastName = "Vangansberg"

// console.log(firstName + ' ' +lastName)

// let x = 2 + 2
// console.log(x)

// x += 10
// x++; 
// x++; 
// console.log(x)

// const ageJeremy = 33;
// console.log(ageJeremy > 40)

// const isFullAge = ageJeremy >= 18;
// console.log(isFullAge)

// const now = 2024;
// console.log(now - 1991 > now - 2010)

// let a;

// a = 10 - 5;

// const averageAge = 10 + 15 / 2 

// const firstName = 'Jeremy'
// const job = 'teacher'
// const birthYear = 1990
// const year = 2024

// const bioJeremy = "Je m'appelle " + firstName + ", j'ai " +  (year - birthYear) + 'ans et je suis ' + job

// const jeremyBio = `Je m'appelle ${firstName}, j'ai ${year - birthYear} ans et je suis ${job}`

// console.log(`Commmentaires
// sur plusieurs lignes
// blablabla
// `)




// if (age > 18) {
//     console.log("Tu peux passer ton permis")
// } else {
//     console.log(`Encore ${18-age} ans avant de passer ton permis`)
// }

// const age = 15;

// if (age >= 18) {
//     console.log("Tu peux passer ton permis")
    
// } else if (age >= 16) {
//     console.log("Tu peux faire la conduire accompagner")
// }
// else {
//     console.log(`Encore ${18-age} ans avant de passer ton permis`)
// }


// const inputNumber = 'test'
// console.log(Number(inputNumber))
// console.log(typeof NaN)

// console.log(String(18), 18)


// console.log("J'ai " + 33 + " ans")

// console.log('14' - 4 - 5)
// console.log('14' + 4 + 5)

// console.log('12' * '2')

// let n = "55" + 5;
// n = n - 5
// console.log(n)

// console.log(1+2+3+'4')

// console.log('10' - '4' - '3' - 2 + '5')

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// const money = 10

// if (money) {
//     console.log("Tu as de l'argent")
// } else {
//     console.log("Tu es à 0")
// }

// const age = 18;

// if ("a") {
//     console.log("hello")
// }

// console.log('a' == true)

// console.log(Boolean("a"))

// const age = prompt("Quel âge as-tu ?")

// console.log(typeof age)

// if (age === 33) {
//     console.log("Tu as 33 ans !")
// }


const day = "week-end";

switch(day) {
    case "lundi":
        console.log("Piscine");
        break;
    case "mardi":
        console.log("Laver la voiture");
        break;
    case 'mercredi':
        console.log("Préparer les cours");
        break;
    case 'jeudi':
        // Supposons qu'il n'y a rien de spécial le jeudi.
        break;
    case 'vendredi':
        // Supposons que le vendredi est un jour de repos avant le week-end.
        break;
    case 'samedi':
        console.log("Profiter du week-end");
        // Intentionally omit the break here for fall-through
    case 'dimanche':
        console.log("Faire une sortie en famille");
        // Pas de break ici si nous voulons aussi un message commun pour le week-end
        // Fall-through intentionnel
    case 'week-end':
        console.log("Détente et loisirs");
        break;
    default:
        console.log("Le jour n'est pas valide");
}

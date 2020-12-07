const character = {
	id: 0,
	firstname: "Jon",
	lastname: "Snow",
	lives: {
		city: "Winterfell",
	},
}

const character2 = {
	id: 1,
	firstname: "Eddard",
	lastname: "Stark",
	lives: {
		city: "Winterfell",
	},
	isAlive: false,
}

// Je veux stocker dans une variable firstname le prénom de character
/* const firstname = character.firstname
const lastname = character.lastname
const id = character.id
const city = character.lives.city */
// On peut faire la même chose, en une seule ligne, avec la destructuration (destructuring)
const {
	id,
	firstname: prenom,
	lastname,
	lives: { city: ville },
	isAlive = true,
} = character

const {
	id: id2,
	firstname: firstname2,
	lastname: lastname2,
	lives: { city: city2 },
	isAlive: isAlive2 = true,
} = character2

// Dynamic key - Clé dynamique - Pratique pour mettre un nom de clé variable dans un objet
const dynamicKey = "surname"
const tyrion = {
	id: 2,
	firstname: "Tyrion",
	lastname: "Lannister",
	[dynamicKey]: "himp",
	lives: {
		city: "Kings Landing",
	},
}

// Spread Operator - Ou comment copier un objet rapidement...
// Depuis es6, lorsque la clé et la valeur d'un objet ont le même nom, alors on peut utiliser la notation raccourcie
const gender = "male"
const tyrion2 = {
	...tyrion,
	lives: {
		city: "Meereen",
	},
	// gender: gender,
	gender, // version raccourcie de: gender: gender,
}

// Function default parameter - Paramètre par défaut
const sayHello = (name = "my lord") => {
	// Template literals - String interpolation
	console.log(`Hello ${name.toUpperCase()}`)
}

sayHello("Fabio")
sayHello()

// Rest Operator
const add = (...nombres) => {
	let total = 0
	for (const n of nombres) {
		total += n
	}
	console.log(total)
}

add(5, 6)
add(1, 4, 3)
add()
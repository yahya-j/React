"use strict"
const add = (a, b) => a + b

console.log(add(5, 6))

/* Créer une fonction getUser qui me renvoie un utilisateur:
	{
		firstname: "John",
		lastname: "Doe",
	}
*/

const getUser = () => {
	return ({
		firstname: "John",
		lastname: "Doe",
	})
}
console.log(getUser())

// Attention, une fonction flechée garde toujours le contexte de départ
// Une fonction classique peut changer de contexte
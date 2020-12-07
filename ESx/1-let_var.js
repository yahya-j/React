"use strict"
// var et let ?

;(function () {
	// La portée de var est la fonction
	if (true)
	{
		// Alors que la portée de let est le bloc
		var job = "dev"
		let prenom = "Fabio"
	}
	// console.log(job)
	// console.log(prenom)
})()

// const - la portée de const est, comme pour let, celle du bloc - de plus, je ne peux pas redéfinir le contenu de const
const pi = 3.14159
// pi = 3.1416 // ❌ Je ne peux pas le faire
const animaux = ["chien", "chat"]
console.log(animaux)
animaux.pop() // méthode qui supprime la dernière entrée du tableau
console.log(animaux)
animaux.push("cheval") // méthode qui ajoute une entrée au tableau
console.log(animaux)

// Quand utilser l'un par rapport à l'autre?
// J'utilise TOUJOURS const. Si j'ai absolument besoin de modifier la variable, alors seulement j'utilise let.

// Shell
// pwd - print working directory
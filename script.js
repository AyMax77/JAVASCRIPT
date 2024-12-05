// Récupération du bouton par son sélecteur CSS pour détecter les clics
let btnExo1 = document.querySelector("#btnExo1");
// Récupération du champ de saisie par sélecteur CSS pour lire la valeur entrée par l'utilisateur
let inputExo1 = document.querySelector("#inputExo1");
// Récupération de l'élément où afficher le résultat par sélecteur CSS
let resultatExo1 = document.querySelector("#resultatExo1");

let btnExo2 = document.querySelector("#btnExo2");
// Récupération du champ de saisie par sélecteur CSS pour lire la valeur entrée par l'utilisateur
let inputExo2 = document.querySelector("#inputExo2");
// Récupération de l'élément où afficher le résultat par sélecteur CSS
let resultatExo2 = document.querySelector("#resultatExo2");

let btnExo3 = document.querySelector("#btnExo3");
// Récupération du champ de saisie par sélecteur CSS pour lire la valeur entrée par l'utilisateur
let inputExo3a = document.querySelector("#inputExo3a");
let inputExo3b = document.querySelector("#inputExo3b");
let inputExo3c = document.querySelector("#inputExo3c");
// Récupération de l'élément où afficher le résultat par sélecteur CSS
let resultatExo3 = document.querySelector("#resultatExo3");

// Ajout d'un écouteur d'événements de type "click" au bouton
btnExo1.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre = Number(inputExo1.value);
    let signe; // Variable pour stocker le signe du nombre

    // Vérification de la valeur du nombre
    if (nombre == 0) {
        signe = "est 0";
    }
    else if (nombre > 0) {
        signe = "est positif";
    }
    else {
        signe = "est négatif";
    }

    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(signe);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo1.innerHTML = `Le nombre ${nombre} ${signe}`;
});


btnExo2.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre = Number(inputExo2.value);
    let resultat; // Variable pour stocker le signe du nombre

    if(nombre>0){
        resultat = nombre;
    } else{
        resultat = nombre + (-nombre)+ (-nombre);
    }
    
    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(resultat);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo2.innerHTML = `Le nombre ${nombre} à pour valeur absolu ${resultat}`;
});

btnExo3.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre1 = Number(inputExo3a.value);
    let nombre2 = Number(inputExo3b.value);
    let nombre3 = Number(inputExo3c.value);
    let resultat;

    if(nombre1 < nombre2 < nombre3){
        resultat = "Les nombres sont dans l'ordre"
    } else{
        resultat = "Les nombres ne sont pas dans l'ordre"
    }
    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(resultat);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo3.innerHTML = `${resultat}`;
});

btnExo4.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre1 = Number(inputExo3a.value);
    let nombre2 = Number(inputExo3b.value);
    let nombre3 = Number(inputExo3c.value);
    let resultat;

    if(nombre1 < nombre2 < nombre3){
        resultat = "Les nombres sont dans l'ordre"
    } else{
        resultat = "Les nombres ne sont pas dans l'ordre"
    }
    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(resultat);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo3.innerHTML = `${resultat}`;
});

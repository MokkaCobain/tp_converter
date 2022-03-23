//Les variables utiles
let temperature = document.getElementById(`temperature`); // Saisie user
let converter = document.converter; // Name du formulaire


// La div du résultat
let divResultat = document.createElement(`div`);
divResultat.setAttribute(`id`, `reponse`);

// Placement de la div du résultat
let divContent = document.getElementById(`content`);
divContent.appendChild(divResultat);

// EVENT = vérifier la saisie utilisateur
temperature.addEventListener(`keyup`, function (e){

    let verifier = this.value.trim();

    if(verifier === `` || isNaN(verifier)) {
        divResultat.className = `mauvaise-saisie`;
        divResultat.innerText = `Un nombre attendu`;

    }

});

// EVENT = convertir la saisie utilisateur 

converter.addEventListener(`submit`, function(e){

    // Le calcul de la conversion
    let formule = (temperature.value * 9/5) + 32; 
    // Le résultat
    let fahrenheit = `${formule}°F`;
    // La phrase du résultat
    let resultat = `${temperature.value}°C = ${fahrenheit}`; 

    //Affichage du résultat
    divResultat.className = `bonne-saisie`;
    divResultat.innerText = `${resultat}`;

    e.preventDefault();

   
});

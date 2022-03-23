//Les variables utiles
let temperature = document.getElementById(`temperature`); // Saisie user

let converter = document.converter; // Name du formulaire

let formule = (temperature.value * 9/5) + 32; // Le calcul de la conversion

let fahrenheit = `${formule}°F`; // Le résultat en fahrenheit

let resultat = `${temperature.value}°C = ${fahrenheit}`; // La phrase du résultat

// La div du résultat
let divResultat = document.createElement(`div`);
divResultat.setAttribute(`id`, `reponse`);

// Placement de la div du résultat
let divContainer = document.getElementById(`container`);
divContainer.appendChild(divResultat);

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
    
    divResultat.className = `bonne-saisie`;
    divResultat.innerText = `${resultat}`;

    e.preventDefault();
});

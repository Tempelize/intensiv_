// RECHERCHE POLICE 1 ET POLICE 2
const police1=window.getComputedStyle(document.getElementById('police-font-1')).fontFamily;
const police2=window.getComputedStyle(document.getElementById('police-font-2')).fontFamily;

// MODIFICATION DU TEXTE 
document.getElementById('police-font-1').innerText=police1;
document.getElementById('police-font-2').innerText=police2;

// RAJOUTER POUR LE HEADER
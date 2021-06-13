export default (function(){
// RECHERCHE POLICE 1 ET POLICE 2
const police1 = window.getComputedStyle(document.getElementById("police-font-text")).fontFamily;
const police2 = window.getComputedStyle(document.getElementById("police-font-header")).fontFamily;

// MODIFICATION DU TEXTE
document.getElementById("police-font-text").innerText = police1;
document.getElementById("police-font-header").innerText = police2;

})();




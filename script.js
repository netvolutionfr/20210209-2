console.log("Script lancé");

saisie = document.getElementById("saisie");
champnom = document.getElementById("nom");

champnom.focus();


bouton = document.getElementById("bouton");
bouton.addEventListener("click", function() {
    // Expression régulière ou "Regexp" :
    const texteAccepte = /^[A-Z]+$/;
    const valeursAcceptees = /^[0-9]+$/;

    if (saisie.value.length === 0 || champnom.value.length === 0) {
        alert("Saisie vide");
    } else {
        if (valeursAcceptees.test(saisie.value) && texteAccepte.test(champnom.value)) {
            alert("Votre saisie : " + saisie.value + " / nom : " + champnom.value);
        } else {
            alert("Saisie incorrecte");
        }
    }
});


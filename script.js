console.log("Script lancé");

saisie = document.getElementById("saisie");
saisie.focus();

champnom = document.getElementById("nom");

bouton = document.getElementById("bouton");
bouton.addEventListener("click", function() {
    const valeursAcceptees = /^[0-9]+$/;
    if (saisie.value.length === 0) {
        alert("Saisie vide");
    } else {
        if (valeursAcceptees.test(saisie.value)) {
            alert("Votre saisie : " + saisie.value);
        } else {
            alert("Vous n'avez pas saisi un nombre");
        }
    }
});


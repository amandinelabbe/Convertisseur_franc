const FACTEURS_CONVERSION = {
    AFR: 0.0015,
    EUR: 1.000145,
    FRF: 0.15244902,
    USD: 1.058935,
};


function echanger() {
    var select1 = document.getElementById("unite-entree");
    var select2 = document.getElementById("unite-sortie");
    var temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;
}

function convertir() {
    const valeur = parseFloat(document.getElementById('valeur').value);
    const uniteEntree = document.getElementById('unite-entree').value;
    const uniteSortie = document.getElementById('unite-sortie').value;
    const resultatElement = document.getElementById('resultat');
    const facteurEntree = FACTEURS_CONVERSION[uniteEntree];
    const facteurSortie = FACTEURS_CONVERSION[uniteSortie];
    const resultat = (valeur * facteurEntree) / facteurSortie;

    if (resultat < 0.1) {
        resultatElement.textContent = `${valeur} ${uniteEntree} = ${resultat} ${uniteSortie}`;
    } else {
        resultatElement.textContent = `${valeur} ${uniteEntree} = ${resultat.toFixed(2)} ${uniteSortie}`;
    }

}

document.getElementById('convertir').addEventListener('click', convertir);



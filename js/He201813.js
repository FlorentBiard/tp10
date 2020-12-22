"use strict";
let clothes = {
        v001 : {nom:"jeans",prix: 50,taille:100,stocke:5,marque:"nike"},
        v002 : {nom:"T-shirt",prix:25,taille:50,stocke:10,marque:"jack&john"}

};


class utilisateur {
    constructor(nom,prenom,email,dateN){


        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.anniversaire = dateN;

}
    printMyNam(){
        console.log(this.nom,this.prenom,this.email,this.anniversaire);
    }


}


function appel(form){
    let utilisateurs = new utilisateur(form.nom.value,form.prenom.value,form.email.value,form.anniversaire.value);
    utilisateurs.printMyNam();
    return false;
}

function affichage(){

        document.getElementById("j").innerHTML += "<p class='j1'>" + clothes.v001.nom +  "</p>" + "<br>" + "<p class='j2'>" + clothes.v001.prix + " euros" + "</p>" + "Il reste encore " + clothes.v001.stocke;
        document.getElementById("T-shirt").innerHTML += "<p class='t1'>" + clothes.v002.nom + "</p>" + "<p class='t2'>"+ clothes.v002.prix  + " euros" + "</p>" + "<p class='t3'>" + "Il reste encore " + clothes.v002.stocke + "</p>";

}
/*
@description cette fonction va avoir les valeurs des boutons qui en suite, la variable concerner par le bouton seras comparer au clefs du tableau associatifs clothes et puis fournira le panier  avec de la DOM
 */

function panier(r){
    let reponse = r.name;
    console.log(reponse);

        if(reponse === "v001"){
        document.getElementById("resultat").innerHTML = "<th>" + clothes.v001.nom + "</th>" + "<th>" + clothes.v001.marque + "</th>" + "<input oninput='totalPanier();' type='number' name='totalPrix' id='valeur1'>";

        clothes.v001.stocke--;
            } else if(reponse === "v002"){
            document.getElementById("resultatt").innerHTML =  "<th>" + clothes.v002.nom + "</th>" + "<th>" + clothes.v002.marque + "</th>" + "<input oninput='totalPanier();' type='number' name='totalPrix' id='valeur2'>";
        }

}
/*
@description la fonction totalPanier() aura comme role de faire le calcule est additioner les articles que l'utilisateur founira en introduisant un nombre.

 */
function totalPanier(){
    let panierPrix = document.getElementById("total");
    let valeurPrix1 = document.getElementById("valeur1").value;
    let valeurPrix2 = document.getElementById("valeur2").value;
    let totall = (clothes.v001.prix * valeurPrix1) + (clothes.v002.prix * valeurPrix2);

        panierPrix.innerHTML = "<p>" + totall + "</p>";v
}




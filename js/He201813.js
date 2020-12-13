"use strict";
let clothes = {
        nom : ['jeans', 't-shirt'],
        prix : [50,25],
        taille : [60,45],
        stocke: [10,15]

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


        document.getElementById("j").innerHTML += "<p class='j1'>" + clothes.nom[0] +  "</p>" + "<br>" + "<p class='j2'>" + clothes.prix[0] + " euros" + "</p>" + "Il reste encore " + clothes.stocke[0];

}
affichage();


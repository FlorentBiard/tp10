"use strict";
let clothes = {
        vetement1: { nomV : "jeans", prix : 50 },
        vetement2: { nomV : "t-shirt", prix : 25}

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

        document.getElementById("j").innerHTML += "<p class='j1'>" + clothes.vetement1.nomV +  "</p>" + "<br>" + "<p class='j2'>" + clothes.vetement1.prix + " euros" + "</p>";
}
affichage();

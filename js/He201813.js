


function formulaire(){
document.getElementById("form").innerHTML =
    "<form action='#' onsubmit=' appel(this); return false'>" +
    "<label>Votre Nom</label>" +
    "<input  type='text' name='nom' required>" +
    "<br>" +
    "<label>Votre Prenom</label>" +
    "<input type='text' name='prenom' required>" +
    "<br>" +
    "<label>Votre Email</label>" +
    "<input type='email' name='email'  required>" +
    "<br>" +
    "<label>Votre Date de naissance</label>" +
    "<input type='date' name='anniversaire' required>" +
    "<br>" +
    "<input type='submit' value='confirmer'>";
}


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

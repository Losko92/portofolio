function affichagetab(){
    document.write('<table border=2px width=30%');
    for (let i = 0; i <= 5; i++) {
       document.write('<tr><td>*</td><td>*</td><td>*</td></tr>') ;
        
    }
    document.write('</table>');
}
function affichagetab2(){
    var count = prompt("Combien de lignes souhaitez vous ?");
    document.write('<table border=2px width=30%')
    for (let i = 0; i <= count; i++) {
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
        
    }
    document.write('</table>');
    }
function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Enter votre mot de passe");
    if(login == "admin" && password == "admin"){
        document.write("Woo BACK BABY")
    }
      else
      alert("mot de passe errone")
}
function seconnecter2(){
    var i = 0;
    do {
    var id =prompt ("Donner votre nom d'utilisateur");
    var mdp = prompt ("Entrez votre ot de passe");
    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue:   "+id);
        break;

    }
    else
    alert ("Acces Refusé")
    i+=1
    } while (i>3)
    if (i==3)
    alert("Delai dépassé")

}

function cdc() {
    var chaine = prompt("Donne un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("a chaine contient   " + chaine.length+"  caracteres    " + "<br>");
    document.write("la premiere lettre est  "+ chaine.substr(0,1)+"<br>");
    
}
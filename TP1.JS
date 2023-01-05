function calcul_moyenne()
{   
    var note1=prompt("Donner une premiere note svp");
    var note2=prompt("Donner une deuxieme note svp");
    var note3=prompt("Donner une troisieme note svp");
    var note4=prompt("Donner une quatrieme note svp");
var somme =  Number(note1)*2 + Number(note2)*2 +Number(note3)*2 +Number(note4)*3;

var moyenne= somme / 9;
document.write("voici la somme:" +somme +"   ");
document.write("voici la moyenne:" +moyenne);


if (moyenne<10)
    document.write ("vous etes redoublant  ");
    else
    document.write("vous etes admis");
}               

function age_test()
{
    var age1=prompt("Dis moi ton age stp");

    if(age1<18)
         document.write("vous etes mineur ");
         else
         document.write ("vous etes majeur");


}
function simple_affichage()
{
    var nom=prompt ("Quel est votre nom");
    var prenom=prompt ("Quel est votre prenom");

    document.write("div style='background-color:red; border:2px solid blue; height:30px;'>");
    document.write("<p1 style='color:red';>Bonjour  " + prenom+ "   "+nom+ "</p1>");
    document.write("</div>")
}
function test_color()
{
    var couleur = prompt ('donner une couleur');
        if (couleur == "rouge" || couleur =='ROUGE' || couleur=='R')
            document.body.style.background="red";
            else if (couleur == 'blue' || couleur== 'BLEU'|| couleur=='B')
            document.body.style.background="blue";
            else if (couleur == 'vert' || couleur== 'VERT' || couleur=='V')
            document.body.style.background="green";
            else
            alert ("couleur inconnue ! . .....");
        }
        function somme()
        {
            var a = document.getElementById("t1") .value;   
            var b = document.getElementById ("t2").value;
            var s = Number (a) + Number (b)
            t3.value = s;
            
        }
        function soustraction()
        {
            var a = document.getElementById("t1") .value;   
            var b = document.getElementById ("t2").value;
            var s = Number (a) - Number (b)
            t3.value = s;
            
        }
        function produit()
        {
            var a = document.getElementById("t1") .value;   
            var b = document.getElementById ("t2").value;
            var s = Number (a) * Number (b)
            t3.value = s;
            
        }
        function division()
        {
            var a = document.getElementById("t1") .value;   
            var b = document.getElementById ("t2").value;
            var s = Number (a) / Number (b)
            t3.value = s;
            
        }
        function parite()
        {
            var X =  document.getElementById ("t1").value;
            if (Number(X)%2==0){

                alert ("Le nombre est pair");

            
                t3.value = "Le nombre est pair"      }
                else
                {
                    alert ("Le nombre est impair")
                    t3.value= "Le nombre est pair"
                } 

            }
            function permuter()
            {
                var v3 = "";
                a = document.getElementById("inputOne").value
                b = document.getElementById("inputTwo").value
                v3=a;
                a=b;
                b=v3;

                inputOne.value = a;
                inputTwo.value = b;
            }
           
        

            
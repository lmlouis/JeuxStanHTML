
//COULEUR MARQUANT UNE REPONSE VRAIE
function couleur_vrai(x)
{
    x.style.background =  "green" ;
}
//COULEUR MARQUANT UNE REPONSE FAUSSE
function couleur_fausse(x)
{
    x.style.background =  "yellow" ;
    x.style.color = "black";
}

function couleur_erreur(t)
{
    x.style.background = "red";
    x.style.color = "black";    
}


//REPONSE 1
function un(t)
{
       if(t.repun.value == "Azerbaidjan")
        {
            couleur_vrai(t.repun);
        }
        else if(t.repun.selectedIndex == 0)
        {
            t.repun.style.background = "black";
            t.repun.style.color = "white";
            t.repun.focus();
        }
        else 
        {
            couleur_fausse(t.repun);   
        }
}

//REPONSE 2
function deux(t)
{
       if(t.repdeux.value == "Turkménistan")
        {
            couleur_vrai(t.repdeux);
        }
        else if(t.repdeux.selectedIndex == 0)
        {
            t.repdeux.style.background = "black";
            t.repdeux.style.color = "white";
            t.repdeux.focus();
        }
        else 
        {
            couleur_fausse(t.repdeux);   
        }
}

//REPONSE 3
function trois(t)
{
       if(t.reptrois.value == "Ousbékistan")
        {
            couleur_vrai(t.reptrois);
        }
        else if(t.reptrois.selectedIndex == 0)
        {
            t.reptrois.style.background = "black";
            t.reptrois.style.color = "white";
            t.reptrois.focus();
        }
        else 
        {
            couleur_fausse(t.reptrois);   
        }
}


//REPONSE 4
function quatre(t)
{
       if(t.repquatre.value == "Afghanistan")
        {
            couleur_vrai(t.repquatre);
        }
        else if(t.repquatre.selectedIndex == 0)
        {
            t.repquatre.style.background = "black";
            t.repquatre.style.color = "white";
            t.repquatre.focus();
        }
        else 
        {
            couleur_fausse(t.repquatre);   
        }
}

//REPONSE 5
function cinq(t)
{
       if(t.repcinq.value == "Pakistan")
        {
            couleur_vrai(t.repcinq);
        }
        else if(t.repcinq.selectedIndex == 0)
        {
            t.repcinq.style.background = "black";
            t.repcinq.style.color = "white";
            t.repcinq.focus();
        }
        else 
        {
            couleur_fausse(t.repcinq);   
        }
}

//REPONSE 6
function six(t)
{
       if(t.repsix.value == "Tadjikistan")
        {
            couleur_vrai(t.repsix);
        }
        else if(t.repsix.selectedIndex == 0)
        {
            t.repsix.style.background = "black";
            t.repsix.style.color = "white";
            t.repsix.focus();
        }
        else 
        {
            couleur_fausse(t.repsix);   
        }
}

//REPONSE 7
function sept(t)
{
       if(t.repsept.value == "Kirghizistan")
        {
            couleur_vrai(t.repsept);
        }
        else if(t.repsept.selectedIndex == 0)
        {
            t.repsept.style.background = "black";
            t.repsept.style.color = "white";
            t.repsept.focus();
        }
        else 
        {
            couleur_fausse(t.repsept);   
        }

}

function annuler(t) //ANNULE LE COLORIAGE 
{
    t.repsept.style.background = "navy";
    t.repsept.style.color = "white"; 

    t.repsix.style.background = "navy";
    t.repsix.style.color = "white";  

    t.repcinq.style.background = "navy";
    t.repcinq.style.color = "white";

    t.repquatre.style.background = "navy";
    t.repquatre.style.color = "white"; 

    t.reptrois.style.background = "navy";
    t.reptrois.style.color = "white"; 

    t.repdeux.style.background = "navy";
    t.repdeux.style.color = "white"; 

    t.repun.style.background = "navy";
    t.repun.style.color = "white"; 
}

const lol = document.querySelector("body");




//GESTION DES REOPNSE 
function reponses(t)
{
    un(t);
    deux(t); 
    trois(t);
    quatre(t);
    cinq(t);
    six(t);
    sept(t);     
}





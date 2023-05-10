var i=1;
               
function trocar()
{
i++;
if(i==6){
    i=1;
}
document.getElementById("fotos").src=i+".jpg";
}

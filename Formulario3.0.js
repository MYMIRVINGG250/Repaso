class Coordenada
{
  constructor(X,Y)
  {
      this.ValorX=X;
      this.ValorY=Y;
  
  }
  info()
  {
    return  "<h3>" + "(" + this.ValorX + " , " + this.ValorY + ")" +"</h3>";
  }
}

this.ValoresGuardados = new Array();

Agregar=function(nuevo)
{
  
   this.ValorX=document.getElementById("X").value;
   this.ValorY=document.getElementById("Y").value;

  nuevo="("+ this.ValorX +"," + this.ValorY +")";

   this.ValoresGuardados.push(nuevo);

   Mostrar();
}

Mostrar=function()
        {
            let res="";
            document.getElementById('resultado').innerHTML="";
            for(let i=0;i<this.ValoresGuardados.length;i++)
                res += "El Punto " + (i+1) + " es " +  this.ValoresGuardados[i] + "<br>";
            return document.getElementById('resultado').innerHTML+=res;
        }

Distancia=function()
{
  
  let suma=0;
  document.getElementById('X').value="";
  console.log(this.ValorX);
  console.log(this.ValorY);
  alert("profe no entiendo por que no funciona la linea 49 me podria ayudar con la logica en clase")
  for(let i=0;i<this.ValoresGuardados.length;i++)
  {
    let dis=0;
    dis= Math.pow((this.ValorX[i])-(this.ValoresGuardados[i+1].ValorX),2) + Math.pow((this.ValoresGuardados[i].ValorY)-(this.ValoresGuardados[i+1].ValorY),2);
    suma+= "La distancia es: " + Math.sqrt(dis);
  }
    return document.getElementById('resultado').innerHTML=suma;
}
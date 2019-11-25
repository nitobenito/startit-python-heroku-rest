let laiks = Math.floor(Math.random()*61); 
window.onload=pieskaitaPunktu();
function pieskaitaPunktu() {
    let vards=prompt("Ievadi savu vardu!");
    let s={"vards":vards,"punkti":laiks};
    dabutRezultatuTabulu(s, paraditRezultatuTabulu); 
  }

  function paraditRezultatuTabulu(rez){
    let saraksts=document.createElement("OL");
    for (var r in rez){
      let viens=document.createElement("LI");
      viens.innerHTML=rez[r]["vards"]+" "+rez[r]["punkti"];
      saraksts.appendChild(viens);
    }
    document.getElementById("spele").appendChild(saraksts);
  }

  function dabutRezultatuTabulu(o, fnKadTabulaDabuta){
    var urla = new URL("https://alynxserver.herokuapp.com:5000/api/rezultati");  
    Object.keys(o).forEach(key => urla.searchParams.append(key,o[key]));
    fetch(new Request(urla))
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data.rezultati);
        fnKadTabulaDabuta(data.rezultati);
     });
  }

 let laiks = 60; 
  function pieskaitaPunktu() {
    let vards=prompt("Ievadi savu vardu!");
    //s="{\"vards\": \""+vards+"\",\"punkti\": "+laiks+"}";
    s={"vards":vards,"punkti":laiks};
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
  function dabutRezultatuTabulu(s, fnKadTabulaDabuta){
    var urla = new URL("http://127.0.0.1:5000/api/rezultati");
    Object.keys(s).forEach(key => urla.searchParams.append(key,s[key]))
    fetch(new Request(urla))
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data.rezultati);
        fnKadTabulaDabuta(data.rezultati);
      });
  }


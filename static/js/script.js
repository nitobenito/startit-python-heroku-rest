let laiks = Math.floor(Math.random()*61); 
window.onload=pieskaitaPunktu();
function pieskaitaPunktu() {
    let vards=prompt("Ievadi savu vardu!");
    let s={"vards":vards,"punkti":laiks};
    const url = 'https://alynxserver.herokuapp.com/api/rezultati';
    let request = new Request(url, {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(o)
    });
    fetch(request)
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data.rezultati);
        paraditRezultatuTabulu(data.rezultati);
     });; 
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

  function dabutRezultatuTabulu1(o, fnKadTabulaDabuta){
    var urla = new URL("https://alynxserver.herokuapp.com/api/rezultati");  
    Object.keys(o).forEach(key => urla.searchParams.append(key,o[key]));
    fetch(new Request(urla))
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data.rezultati);
        fnKadTabulaDabuta(data.rezultati);
     });
  }
 function dabutRezultatuTabulu(o, fnKadTabulaDabuta){
   console.log(JSON.stringify(o));
   const url = 'https://alynxserver.herokuapp.com/api/rezultati';
   var request = new Request(url, {
   method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(o)
});
    fetch(request)
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data.rezultati);
        fnKadTabulaDabuta(data.rezultati);
     });
  }

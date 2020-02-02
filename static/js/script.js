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
    body: JSON.stringify(s)
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

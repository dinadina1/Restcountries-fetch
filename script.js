
let res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row";

function bar(data1){
    for(let i=0;i<data1.length;i++){
        let col = document.createElement("div");
        col.className = "col-lg-4 col-sm-12 col-md-4";
        col.innerHTML += `<div class="card" style="width:100%;height:350px">
        <div class="card-header text-center">
        ${data1[i].name.common}
        </div>
        <img src=${data1[i].flags.png} class="card-img-top" style="width:100%;height:150px" alt="flags">
        <div class="card-body text-center" >
          <p class="card-text">Capital : ${data1[i].capital}</p>
          <p class="card-text">Region : ${data1[i].region}</p>
          <p class="card-text">Country Code : ${data1[i].capital}</p>
        </div>
      </div>`
      row.append(col);
    }
}



container.append(row);
document.body.append(container);




function satirEkle() {
    let satir = document.querySelector("#tabloNot tbody").innerHTML;
  
    let name = document.querySelector("#name").value;
    let point = document.querySelector("#point").value;
  
    document.querySelector("#btnAdd").addEventListener("click", () => {
          const elTr = document.createElement("tr");
          let elTd = document.createElement("td").className = "siraNo";
          elTr.append(elTd);
          document.createElement("td");
          elTd.innerHTML = `<input class="disableInput" type="text" value="${name}" disabled>`;
          elTr.append(elTd);
         elTd = document.createElement("td").className = "point";
          elTd.innerHTML = `<input id="pointi" class="disableInput" type="text" value="${point}" disabled>`;
          elTr.append(elTd);
          elTd = document.createElement("td");
          elTd.innerHTML = `<i onclick="SomeDetailRowFunction()" class="fa-solid fa-pen"></i> &nbsp <i onclick="deleteRow()" class="fa-solid fa-trash-can"></i>`;
          elTr.append(elTd);
      });
  
    satir += `
    <tr>
            <td class="siraNo">5</td>
            <td><input value="${name}" class="disableInput" disabled ></td>
            <td><input value="${point}" class="disableInput" id="pointi" disabled ></td>
   
            <td><i class="fa-solid fa-pen" onclick="SomeDetailRowFunction()"></i>&nbsp<i class="fa-solid fa-trash-can" onclick="deleteRow()"></i></td>
            
          </tr>`;
    document.querySelector("#tabloNot tbody").innerHTML = satir;
    satirNoYaz();
    getAveragePoint();
  }
  function satirNoYaz(){
    let noo=document.querySelectorAll(".siraNo");
    for(let i=0; i<noo.length; i++){
      
      noo[i].innerHTML=i+1;
      console.log("i=", noo[i])
    }
    
  }
  satirNoYaz();
  function getAveragePoint(){
    let AveragePoint=0;
    let sum=0;
    let points=document.querySelectorAll("#pointi");
    for(let i=0; i<points.length; i++){
      sum+=Number(points[i].value);
      }
    AveragePoint= sum/points.length;
    document.querySelector(".APoint").innerHTML=AveragePoint;
  }
  getAveragePoint();
  function deleteRow(){
    var td = event.target.parentNode;
      var tr = td.parentNode;
      let input1 = tr.querySelector("td:nth-child(2) input");
      let input2 = tr.querySelector("td:nth-child(3) input");
      if (input1.className == "enableInput") {
          input1.setAttribute("class", "disableInput");
          input1.disabled = true;
          input2.setAttribute("class", "disableInput");
          input2.disabled = true;
          input2.value = eskiPoint;
          let kalem = tr.querySelector("td:nth-child(4) i");
          kalem.setAttribute("class", "fa-solid fa-pen");
          let cop = tr.querySelector("td:nth-child(4) i:nth-child(2)");
          cop.setAttribute("class", "fa-solid fa-trash-can");
      }
      else {
         
          tr.parentNode.removeChild(tr);
      }
      getAveragePoint();
    satirNoYaz();
  }
  function SomeDetailRowFunction() {
      var td = event.target.parentNode;
      var tr = td.parentNode;
      let input1 = tr.querySelector("td:nth-child(2) input");
      let input2 = tr.querySelector("td:nth-child(3) input");
      if (input1.className == "disableInput") {
          input1.setAttribute("class", "enableInput");
          input1.disabled = false;
          input2.setAttribute("class", "enableInput");
          input2.disabled = false;
          let kalem = tr.querySelector("td:nth-child(4) i");
          kalem.setAttribute("class", "fa-solid fa-check");
          let cop = tr.querySelector("td:nth-child(4) i:nth-child(2)");
          cop.setAttribute("class", "fa-solid fa-xmark");
          eskiPoint = input2.value;
      }
      else if (input1.className == "enableInput") {
          input1.setAttribute("class", "disableInput");
          input1.disabled = true;
          input2.setAttribute("class", "disableInput");
          input2.disabled = true;
          let kalem = tr.querySelector("td:nth-child(4) i");
          kalem.setAttribute("class", "fa-solid fa-pen");
          let cop = tr.querySelector("td:nth-child(4) i:nth-child(2)");
          cop.setAttribute("class", "fa-solid fa-trash-can");
      }
      getAveragePoint();
    satirNoYaz();
  }
  
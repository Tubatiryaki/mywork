let sayi=Math.floor(Math.random()*(100-1+1) )+1;
function oyun() {
   document.querySelector("#sayi").style.display= "inline-block";
   document.querySelector("#tahmin").style.display= "inline-block";
   document.querySelector("#oyun").style.display= "none";
   
   
}
function tahmin() {

   let tahmin = document.querySelector("#sayi").value; 
   if (Number(tahmin)==0) {
    document.querySelector("#message").innerText="Lütfen bir sayı giriniz";
   }
   if(Number(tahmin)< Number(sayi)){

    document.querySelector("#message").innerText="Daha büyük bir sayı giriniz";
}
if (Number(tahmin)> Number(sayi)) {
    document.querySelector("#message").innerText="Daha küçük bir sayı giriniz";
    
}
if (Number(tahmin) == Number(sayi)) {
    
   
   document.querySelector("#message").innerText="Tebrikler kazandınız";
   document.querySelector("#oyun").style.display= "inline-block";
   document.querySelector("#sayi").style.display= "none";
   document.querySelector("#tahmin").style.display= "none";
}
    
}
document.querySelector("#sayi").addEventListener("keypress",(e)=>{
    if(e.keyCode === 13) tahmin();
});

document.querySelector("#sayi").addEventListener("click",(e)=>{
    document.querySelector("#message").innerText="";
});

document.querySelector("#sayi").addEventListener("change",(e)=>{
    document.querySelector("#message").innerText ="";
});
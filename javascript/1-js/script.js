function hesapla(num1, num2, islem) {
    if (islem == "toplam") {
      document.querySelector("#sonuc").innerText = Number(num1) + Number(num2);
    } else if (islem == "cikarma") {
      document.querySelector("#sonuc").innerText = Number(num1) - Number(num2);
    } else if (islem == "bolme") {
      document.querySelector("#sonuc").innerText = Number(num1) / Number(num2);
    } else if (islem == "carpma") {
      document.querySelector("#sonuc").innerText = Number(num1) * Number(num2);
    }
  }
import getMenu from "./api.js";
import elements from "./helpers.js";

// Sayfa yüklendiğinde getMenu fonksiyonunu çalıştırmalı
document.addEventListener("DOMContentLoaded", getMenu);
// querySelectorAll ile çekilen tüm butonlara aynı anda addEventListener eklemeyiz.Bunun sebebi querySelectorAll ile çekilen elemanların bir dizi olmasıdır.
elements.buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`Butona tıklandı`);
  });
});

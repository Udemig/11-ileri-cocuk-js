import getData from "./api.js";
import { elements } from "./helpers.js";

// Tema butonuna tıklayınca body'e class ekleyip çıkarıyoruz
elements.themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-body");
});

// Form gönderildiğinde çalışacak fonksiyon

const handleSubmit = (e) => {
  // Sayfa yenilemeyi iptal et
  e.preventDefault();
  // Input içerisindeki değere eriş
  let userName = e.target[0].value;

  // Api'a istek at

  getData(userName);
};

// Formun gönderilmesini izle
elements.form.addEventListener("submit", handleSubmit);

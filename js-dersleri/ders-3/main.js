// * DOM (Document Object Modal)

// Javascript dosyasından Htmldeki elemanlara erişmek için birkaç yöntem mevcuttur:

// 1-) document.getElementsByTagName(): Html elemanlarına tag adı adına göre erişmek için kullanılır

const başlık1 = document.getElementsByTagName("h1");

// console.log(başlık1);

// 2-) document.getElementsByClassName(): Html elemanlarına class adı adına göre erişmek için kullanılır

const başlık2 = document.getElementsByClassName("title-2");

// console.log(başlık2);

// 3-) document.getElementsById(): Html elemanlarına id sine göre erişmek için kullanılır

const başlık3 = document.getElementById("title-3");

// console.log(başlık3);

// 4-) document.querySelector(): Html elemanlarına belirtilen seçici özellikle erişmek için kullanılır.

const başlık4 = document.querySelector("#title-4");

// console.log(başlık4);

// 5-) document.querySelectorAll(): document.querySelector  metodundan farklı olarak belirtilen özellikteki birden fazla elemanlana erişmek için kullanılır.

const başlıklar = document.querySelectorAll(".description");

// console.log(başlıklar);

// başlık4.style.backgroundColor = "red";
// başlık4.style.fontSize = "30px";
// başlık4.style.padding = "20px";

başlık4.classList.add("dinamikClass");

başlık3.classList.remove("başlık2");

// * AddEventListeners

const alertBtn = document.querySelector(".give-alert");

alertBtn.addEventListener("click", () => {
  alert("Bu butona tıklandı");
});

const area = document.querySelector(".area");

area.addEventListener("mouseenter", () => {
  console.log(`Mouse burada`);
});

area.addEventListener("mouseleave", () => {
  console.log(`Mouse az önce buradaydı`);
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("change", () => {
  console.log(`İnputa bir şeyler yazıldı`);
});

searchInput.addEventListener("focus", () => {
  console.log(`Inputa odaklanıldı `);
});

// * innerText && innerHtml

const paragraph = document.querySelector(".paragraph");

paragraph.innerText =
  "Yazılım sektörünün önemli progralama dillerinden biri olan javascripti en iyi yazılım akademisi  Udemigde öğreniyoruz.";

const area2 = document.querySelector(".area-2");

area2.innerHTML = "<img src='https://picsum.photos/200'/>";

// * API

// Api'dan kullanıcı verilerini al

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data.users));

const getDataBtn = document.querySelector("#getData");

const getDataFnc = async () => {
  // Api'a istek at
  const res = await fetch("https://dummyjson.com/users");
  // Response'u (cevabı) json verisinden javascript nesnesine çevir
  const data = await res.json();
};

getDataBtn.addEventListener("click", () => getDataFnc());

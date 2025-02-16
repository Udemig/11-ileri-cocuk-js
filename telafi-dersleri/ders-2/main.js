// * Javascript Arrays (Diziler)

// const kişi1 = "Enes";
// const kişi2 = "Ali";
// const kişi3 = "Mehmet";
// const kişi4 = "Can";

const kişiler = ["Enes", "Ali", "Mehmet", "Can", "Pelin"];

// Dizi elemanlarına erişme
document.write(`Kişiler: ${kişiler} <br/>`);

// Dizinin spesifik bir elemanına erişme
document.write(`Kişiler 1 .eleman: ${kişiler[0]} <br/>`);
document.write(`Kişiler 2 .eleman: ${kişiler[1]} <br/>`);

// * Dizi Metoları

// ! push ==> Diziye sonda eleman eklemek için kullanılır.

kişiler.push("Hakan");
kişiler.push("Kemal");

document.write(`Kişiler-1: ${kişiler} <br/>`);

// ! unshift ==> Diziye baştan eleman eklemek için kullanılır.

kişiler.unshift("Kürşat");

document.write(`Kişiler-2: ${kişiler} <br/>`);

// ! pop  ==> Dizinin sonundan eleman çıkarmak için kullanılır.

kişiler.pop();

document.write(`Kişiler-3: ${kişiler} <br/>`);

// ! shift ==> Dizinin başından eleman çıkarmak için kullanılır.

kişiler.shift();

document.write(`Kişiler-4: ${kişiler} <br/>`);

// ! Bir dizinin elemanını güncelleme
kişiler[0] = "İsmail";

document.write(`Kişiler-5: ${kişiler} <br/>`);

// ! sort ==> Dizinin elemanlarını sıralamak için kullanılır.

document.write(`Kişiler Sıralı A-Z: ${kişiler.sort()} <br/>`);
document.write(`Kişiler Sıralı Z-A: ${kişiler.sort().reverse()} <br/>`);

// ! reverse ==> Diziye takla attırır.Yani dizi elamanlarının sırasını tam tersine çevirir.

const sayılar = [467, 1083, 3456, 2354, 144, 23, 58];

document.write(`Sayılar: ${sayılar} <br/>`);

document.write(`Sıralı Sayılar A-Z: ${sayılar.sort((x, y) => x - y)} <br/>`);

document.write(`Sıralı Sayılar Z-A: ${sayılar.sort((x, y) => y - x)} <br/>`);

const karmaDizi = [1, 44, true, false, { name: "Yusuf", age: 23 }, "Malatya"];

const kullanıcılar = [
  {
    id: 1,
    isim: "Enes",
    soyisim: "Özkan",
    yaş: 15,
    title: "Frontend Developer",
    puan: 87,
  },
  {
    id: 2,
    isim: "Fatma",
    soyisim: "Demir",
    yaş: 23,
    title: "Backend Developer",
    puan: 73,
  },
  {
    id: 3,
    isim: "Ali",
    soyisim: "Yılmaz",
    yaş: 29,
    title: "Full Stack Developer",
    puan: 91,
  },
  {
    id: 4,
    isim: "Ayşe",
    soyisim: "Kaya",
    yaş: 31,
    title: "UI/UX Designer",
    puan: 65,
  },
  {
    id: 5,
    isim: "Murat",
    soyisim: "Çelik",
    yaş: 27,
    title: "DevOps Engineer",
    puan: 78,
  },
  {
    id: 6,
    isim: "Selin",
    soyisim: "Aydın",
    yaş: 22,
    title: "Data Scientist",
    puan: 84,
  },
  {
    id: 7,
    isim: "Mehmet",
    soyisim: "Kurt",
    yaş: 35,
    title: "Mobile Developer",
    puan: 92,
  },
  {
    id: 8,
    isim: "Zeynep",
    soyisim: "Şahin",
    yaş: 26,
    title: "Product Manager",
    puan: 77,
  },
  {
    id: 9,
    isim: "Ahmet",
    soyisim: "Koç",
    yaş: 30,
    title: "Cloud Engineer",
    puan: 63,
  },
  {
    id: 10,
    isim: "Elif",
    soyisim: "Doğan",
    yaş: 24,
    title: "Software Tester",
    puan: 89,
  },
];

console.table(kullanıcılar);

// ! find ==> Dizi içerisindeki bir elemanı bulmak için kullanılır.Bu metot dizi elemanının hangi özelliğe göre bulacağını söylememizi ister.Bu metot bizim için bulunan elemanı bir obje şeklinde geri dönderir.

const kullanıcı1 = kullanıcılar.find((kullanıcı) => kullanıcı.isim == "Mehmet");

console.log(kullanıcı1);

const kullanıcı2 = kullanıcılar.find((kullanıcı) => kullanıcı.yaş == 22);

console.log(kullanıcı2);

// ! filter ==> Dizideki elemanları filtrelemek için kullanılır.Bu metot dizi elemanlarını hangi koşula göre filtreleyeceğini söylememizi ister.Filter metodu filtrelenen elemanları geriye bir dizi şeklinde döndürür.

const filtrelenenKullanıcılar = kullanıcılar.filter((i) => i.puan > 85);

console.log(filtrelenenKullanıcılar);

// ! Not: Filter ve find bir diziyi  dönerek tüm elemanları kontrol eder.Aralarındaki fark ise filter geriye bir dizi döndürür.Find ise geriye bir obje döndürür.

const filtrelenenKullanıcılar2 = kullanıcılar.find((i) => i.puan > 85);

console.log(filtrelenenKullanıcılar2);

// API

// https://jsonplaceholder.typicode.com/users

// https://jsonplaceholder.typicode.com/todos

// https://jsonplaceholder.typicode.com ==> baseUrl

// users &&  todos ==> endpointler

// * Async-await

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
};

// getData();

// * Promise

const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getUsers();

// * Jaavscript Switch case Yapısı

// Javascript'de bir değişkenin belirli sayıdaki değerlerine karşılık işlem yapabilmek için switch-case yapısı kullanılır.

// switch-case kullanılırken switch() içerisinde hangi değişkenin değerlerine bağlı olarak işlem yapmamız gerekiyorsa bunu yazmamız gerekir.Devamında bu değişkenin alacağı değerleri case (değerAdı): ile belirtip ilgili işlemi : dan sonra yazmamız gerekir.

// ? Bir ay değişkenin karşılık geldiği ay adını ekrana yazdırınız.

const ayNumarası = 3;

switch (ayNumarası) {
  case 1:
    document.write(`Ocak ayı <br/>`);
    break;
  case 2:
    document.write(`Şubat ayı <br/>`);
    break;
  case 3:
    document.write(`Mart ayı <br/>`);
    break;
  case 4:
    document.write(`Nisan ayı <br/>`);
    break;
  case 5:
    document.write(`Mayıs ayı <br/>`);
    break;
  case 6:
    document.write(`Haziran ayı <br/>`);
    break;
  case 7:
    document.write(`Temmuz ayı <br/>`);
    break;
  case 8:
    document.write(`Ağustos ayı <br/>`);
    break;
  case 9:
    document.write(`Eylül ayı <br/>`);
    break;
  case 10:
    document.write(`Ekim ayı <br/>`);
    break;
  case 11:
    document.write(`Kasım ayı <br/>`);
    break;
  case 12:
    document.write(`Aralık ayı <br/>`);
    break;
  default:
    document.write(`Tanımsız ay <br/>`);
}

// switch case içerisinde yer alan case e karşılık gelen değerden sonra tüm caseleri çalıştırır.Bunu engellemek için case lerin sonuna 'break' komutu eklenir.

// Switch case default ile de case değerleri belirtilen değerler haricinde gelen yapıları karşılar.

// todo: Bir sayı değerine göre eğer sayı 1 se 'Html5&Css3' 2 ise 'Javascript' 3 ise 'Scss' 4 ise 'Bootstrap' 5 ise 'Sql' bunun haricindeki değerler içinse tanımsız değer yazdıran codescripti oluşturunuz.

let sayi = 6;
switch (sayi) {
  case 1:
    document.write("HTML5 ve CSS3" + "<br/>");
    break;
  case 2:
    document.write("JavaScript" + "<br/>");
    break;
  case 3:
    document.write("SCSS" + "<br/>");
    break;
  case 4:
    document.write("Bootstrap" + "<br/>");
    break;
  case 5:
    document.write("SQL" + "<br/>");
    break;
  default:
    document.write("Tanımsız değer" + "<br/>");
}

// typeOf ==> Bir ifadenin veri tipini belirlemek için kullanılır.

const yaş = 22;

document.write(`Yaş: ${yaş} <br/>`);

document.write(`Veri Tipi: ${typeof yaş} <br/>`);

document.write(`---------------------------- <br/>`);

// * Javascript Sayı Metotları

const sayı = 14.87654567;

document.write(`Sayı: ${sayı} <br/>`);

// Ondalıklı kısmında 3 basamak olsun
document.write(`Sayı-1: ${sayı.toFixed(2)} <br/>`);

// Bu sayıyı en yakın tam sayıya yuvarla
document.write(`Sayı-2: ${Math.round(sayı)} <br/>`);

// Bu sayıyı en yakın bir alt tam sayıya yuvarla
document.write(`Sayı-3: ${Math.floor(sayı)} <br/>`);

// Bu sayıyı bir üst tam sayıya yuvarla
document.write(`Sayı-4: ${Math.ceil(sayı)} <br/>`);

// ! Math.pow ==> Bir sayının üssünü almak için kullanılır.
document.write(`Sayı-5: ${Math.pow(3, 4)} <br/>`);

// ! Math.max ==> Sayılar arasından en büyüğünü almak için kullanılır.

document.write(`Sayı-5: ${Math.max(23, 44, 56, 78, 1, 245)} <br/>`);

// ! Math.min ==> Sayılar arasından en küçüğünü almak için kullanılır.

document.write(`Sayı-5: ${Math.min(23, 44, 56, 78, 1, 245)} <br/>`);

// * Javascript Diziler && Dizi Metotları

// Javascript'de verilerimizi daha kolay yönetmek için diziler kullanılır.Bir diziyi tanımlarken let veya const anahtar kelimesinden biri seçilip bunun devamında bu diziye bir isim verilir '=' konulup [] oluşturulur.Buradaki [] içerisinde dizi elemanları listelenir.

const users = ["Yusuf", "Enes", "Mehmet", "Ali", "Buse", "Merve"];

// Dizi elemanlarına toptan erişme
document.write(`Kullanıcılar: ${users} <br/>`);

// Dizinin bir elemanına erişme
document.write(`Kullanıcılar: ${users[0]} <br/>`);

// Bir dizinin sonuna eleman ekleme
users.push("Hakan");

document.write(`Kullanıcılar-1: ${users} <br/>`);

// Bir dizinin başına eleman ekleme
users.unshift("Hasan");

document.write(`Kullanıcılar-2: ${users} <br/>`);

// Bir dizinin sonundan eleman kaldırma
users.pop();

document.write(`Kullanıcılar-3: ${users} <br/>`);

// Bir dizinin başından eleman kaldırma
users.shift();

document.write(`Kullanıcılar-4: ${users} <br/>`);

// ! sort==> Bir dizinin elemanlarını sıralamak için kullanılır.

document.write(`Sıralı Kullanıcılar A-Z: ${users.sort()} <br/>`);

// ! reverse ==> Bir dizinin elemanlarını tersine çevirmek için kullanılır.
document.write(`Sıralı Kullanıcılar Z-A : ${users.sort().reverse()} <br/>`);

// ! sort metodu alfabetik sıralamaları düzgün bir şekilde yaparken sayılarda sıralamayı tam olarak doğru yapamaz
// Bunu düzeltmek için sort metodu içerisinde bir adet fonksiyon yazılır.

const numbers = [1, 2, 567, 45, 897, 1234];

document.write(`Sayılar: ${numbers} <br/>`);

document.write(`Sıralı Sayılar YANLIŞ: ${numbers.sort()} <br/>`);

document.write(
  `Sıralı Sayılar DOĞRU A-Z: ${numbers.sort((sayı1, sayı2) => {
    return sayı1 - sayı2;
  })} <br/>`
);

document.write(
  `Sıralı Sayılar DOĞRU Z-A: ${numbers.sort((sayı1, sayı2) => {
    return sayı2 - sayı1;
  })} <br/>`
);

const karmaDizi = [1, 2, 3, "selamlar", "Malatya", "Enes", true, false];

document.write(`Karma Dizi: ${karmaDizi} <br/>`);

// * Javascript Nesneler

// Javascript de nesneler oluşturmak için let veya const yazıldıktan sonra objeye bir isim verilir bu isimden sonra = {} konulur.Buradaki {} içerisinde `key:value` değer çiftleri halinde değerler yazılır.

const öğrenci = {
  isim: "Enes",
  soyisim: "Özkan",
  yaş: 15,
  öğrenciMi: true,
  notlar: [100, 100, 90, 95],
  kendiniTanıt: function () {
    document.write(
      `Selamlar ben ${this.isim} ${this.yaş} yaşındayım.Geleceğin başarılı yazılımcılarından biriyim. <br/> `
    );
  },
};

// console.log(öğrenci);
// console.log(öğrenci.notlar);
// console.log(öğrenci.notlar[1]);

öğrenci.kendiniTanıt();

// Bir dizi içerisinde obje kullanımı

const kullanıcılar = [
  { id: 1, isim: "Enes", soyisim: "Özkan", puan: 100 },
  { id: 2, isim: "Ahmet ", soyisim: "Kara", puan: 85 },
  { id: 2, isim: "Buse", soyisim: "Sarıgül", puan: 55 },
  { id: 2, isim: "Banu", soyisim: "Çiçek", puan: 75 },
];

console.log(kullanıcılar);

// Kullanıcılar içerisinden ismi Buse olan kişiyi bul

const bulunanKişi = kullanıcılar.find((kişi) => {
  return kişi.isim === "Buse";
});

console.log(bulunanKişi);

// Puanı 100 olan kişiyi bul

const çalışkanKişi = kullanıcılar.find((a) => {
  return a.puan === 100;
});

console.log(çalışkanKişi);

// ! find ==> Bir dizi  içerisinden bir elemanı bulmak için kullanılır.Bu metot bizden bulunması istenen elemanın hangi özelliğe göre bulunacağını belirtmemizi ister.Ör: ismi Buse olan kişiyi bulmak istiyorsak bunu belirtmemiz gerekir.

document.write(`-------------------------- <br/>`);

// * Javascript Tarih Objesi

// Javascript içerisinde güncel tarih verisine erişmek için `new Date` kullanılır.Bu obje hem güncel tarih verisini verir hemde içerisinde bulunan metotlar sayesinde gün,ay,yıl,dakika,saniye değerlerine erişmemizide sağlar.

const tarihDeğişkeni = new Date();

document.write(`Tarih: ${tarihDeğişkeni} <br/>`);

// Gün
const gün = tarihDeğişkeni.getDate();

document.write(`Tarih: ${gün} <br/>`);

// Ay
const ay = tarihDeğişkeni.getMonth();

document.write(`Tarih: ${ay + 1} <br/>`);

// Saat
const saat = tarihDeğişkeni.getHours();

document.write(`Saat: ${saat} <br/>`);

// Dakika
const dakika = tarihDeğişkeni.getMinutes();

document.write(`Dakika: ${dakika} <br/>`);

// Yıl
const yıl = tarihDeğişkeni.getFullYear();

document.write(`Yıl: ${yıl} <br/>`);

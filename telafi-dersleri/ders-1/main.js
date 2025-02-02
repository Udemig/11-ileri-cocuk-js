// * let ve const ile değişken tanımlama

let name = "Yusuf";

document.write(name + "<br/>");

// let name = "Enes"; name daha önceden tanımlandığından hata verir.

const country = "Türkiye";

document.write(country + "<br/>");

// const country = "Almanya"; country'yi daha önceden tanımlandığımızdan hata verir.

// Var ile değişken tanımlamak güvenlik açıklarına sebep olduğundan bunun yerine güncel projelerde let ve const kullanılır.

// ? let ve const arasındaki fark nedir?

// let ile tanımlanan bir değişkenin değeri güncellenebilirken const ile tanımlanan bir değişkenin değeri doğrudan güncellenemez.

let age = 40;

document.write(age + "<br/>");

age = 22;

document.write(age + "<br/>");

const courseName = "Udemig";

// courseName = "Udemig Akademi"; const sabit değişkenler için kullanıldığından içeriği güncellenemez.

// * Arrow Functions

// function writeToDocument() {}

let writeToDocument = () => {
  document.write("Selamlar Javascript" + "<br/>");
};

writeToDocument();

const calculate = (a, b) => {
  let total = a + b;

  document.write(total + "<br/>");
};

calculate(34, 56);

// const ortalamaHesapla = (x, y) => {
//   let toplam = x + y;

//   let ortalama = toplam / 2;

//   return ortalama;
// };

const ortalamaHesapla = (x, y) => (x + y) / 2;

const ortlamaSonuç = ortalamaHesapla(100, 90);

document.write(ortlamaSonuç + "<br/>");

// * if-else

// todo: Kullancı sayısı 40'dan büyükse sınıf full-doludur değilse sınıf full-dolu değildir yazıdırız.

const mevcut = 34;

if (mevcut > 40) {
  document.write("sınıf full-doludur" + "<br/>");
} else {
  document.write("sınıf full-dolu değildir" + "<br/>");
}

// todo: Ortalama 50'den küçükse 'Sınıfta kaldınız' 50-64 arasındaysa 'Geçtiniz ama belge alamadınız' 65-84 aralığındaysa 'Teşekkür Belgesi aldınız' 85 ve üzeriyse 'Tebrikler Takdir Belgesi aldınız' yazdırınız.

const ortalama = 100;

if (ortalama < 50) {
  document.write("Sınıfta kaldınız" + "<br/>");
} else if (ortalama >= 50 && ortalama <= 64) {
  document.write("Geçtiniz ama belge alamadınız" + "<br/>");
} else if (ortalama >= 65 && ortalama <= 84) {
  document.write("Teşekkür Belgesi aldınız" + "<br/>");
} else if (ortalama >= 85) {
  document.write("Tebrikler Takdir Belgesi aldınız" + "<br/>");
}

// * switch-case

const üniOrtalama = 6;

switch (üniOrtalama) {
  case 0:
    document.write("Ortlamanız çok kötü" + "<br/>");
    break;
  case 1:
    document.write("Ortlamanız çok düşük" + "<br/>");
    break;
  case 2:
    document.write("Ortlamanız  düşük" + "<br/>");
    break;
  case 3:
    document.write("Ortlamanız ideal" + "<br/>");
    break;
  case 4:
    document.write("Ortlamanız iyi" + "<br/>");
    break;
  case 5:
    document.write("Ortlamanız çok iyi" + "<br/>");
    break;
  default:
    document.write("Tanımsız Ortalama" + "<br/>");
}

document.write("--------------------------------------------------" + "<br/>");

// todo: Bir kurs değişkeni oluşturunuz.Bu değişkenin değeri 1 ise Frontend Kursu 2 ise Backend Kursu 3 ise Mobile Kursu 4 ise İngilizce Kursu yazdıran ama bu değerlerin haricindeki bir değer için Tanımsız Kurs yazdıran yapıyı switch-case ile oluşturunuz.

let kurs = 100;

switch (kurs) {
  case 1:
    document.write("Frontend Kursu" + "<br/>");
    break;
  case 2:
    document.write("Backend Kursu" + "<br/>");
    break;
  case 3:
    document.write("Mobile Kursu" + "<br/>");
    break;
  case 4:
    document.write("İngilizce Kursu" + "<br/>");
    break;
  default:
    document.write("Tanımsız Kurs" + "<br/>");
    break;
}

const ondalıklıSayı = 13.355434567543;

document.write(ondalıklıSayı + "<br/>");

//  toFixed ==> Ondalıklı bir sayının .'dan sonra kaç basamaktan oluşsağını belirlemek için kullanılır.

document.write(ondalıklıSayı.toFixed(3) + "<br/>");

// Math.round ==> Bir ondalıklı sayıyı en yakın tam sayıya yuvarlamak için kullanılır.

document.write(Math.round(ondalıklıSayı) + "<br/>");

// Math.floor ==> Bir ondalıklı sayıyı en yakın bir üst tam sayıya yuvarlamak için kullanılır.

document.write("Üst Tam Sayı" + Math.floor(ondalıklıSayı) + "<br/>");

// Math.ceil ==> Bir ondalıklı sayıyı en yakın bir alt tam sayıya yuvarlamak için kullanılır.

document.write("Alt Tam Sayı" + Math.ceil(ondalıklıSayı) + "<br/>");

// Math.max ==> Belirli adetdeki sayıdan en büyüğünü bulmak için kullanılır

document.write(Math.max(1, 2, 3, 4, 5) + "<br/>");

// Math.min ==> Belirli adetdeki sayıdan en küçüğünü bulmak için kullanılır

document.write(Math.min(1, 2, 3, 4, 5) + "<br/>");

// Math.random ==> Bu metot bizim için 0-1 arasında rastgele sayılar oluşturur.

document.write(Math.round(Math.random() * 1000));

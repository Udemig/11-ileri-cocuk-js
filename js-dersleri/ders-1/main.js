// Js Çıktı Metotları

// alert,document.write,console.log

// alert("11 İleri Çocuk Js dersinden selamlar !!");

// * Javascript Değişkenler

// Değişkenler değeri değişen ifadelere denir.

// Değişken tanımlarken 'var,let ve const' anahtar kelimelerinden biri seçilir.Sonrasında bir boşluk bırakılıp değişkene  bir isim verilir.Verilen bu ismin devamında '='  konulup = sağında ilgili değişkenin değeri yazılır.

var isim = "Yusuf";

var isim = "Enes";

document.write("Kişi İsim:" + isim + "<br/>");

// Var ile tanımlanan değişkenlerde aynı isimde bir adet daha değişken tanımlayabiliriz.Bu program içerisinde güvenlik açığına sebeb olur.Bu yüzden güncel projelerde var anahtar kelimesi kullanılmaz.

let ülke = "Türkiye";

// let ülke = "Almanya"; let ile tanımlanan bir değişken aynı değişkeni yeniden tanımlamamıza izin vermez.

document.write("Ülke:" + ülke + "<br/>");

const yaş = 22;

// const yaş = 23; const  ile tanımlanan bir değişken aynı değişkeni yeniden tanımlamamıza izin vermez.

document.write("Yaş:" + yaş + "<br/>");

// let ve const javascript'in önceki sürümlerinde yer alan var ile değişken tanımlama sırasından çıkan güvenlik açıklarının giderilmesi amacıyla güncel projelerde var anahtar kelimesinin yerini almıştır.

// ? Peki neden 2 adet değişken tanımlamaya yarayan anahtar kelime mevcut ?

// let ile oluşturulan değişkenlerin değeri güncellenebilir.Fakat const ile tanımlanan değişkenler sabittir değeri değişmez.

let şehir = "Ankara";

document.write("Şehir:" + şehir + "<br/>");

şehir = "Malatya";

document.write("Şehir:" + şehir + "<br/>");

const mevcutKişi = 10;

document.write("Kişi Sayısı:" + mevcutKişi + "<br/>");

// mevcutKişi = 11;

// document.write("Kişi Sayısı:" + mevcutKişi + "<br/>"); const ile tanımlanan bir değişkenin değeri değiştirilemez.

// * Javascript Fonksiyonlar

// Fonksiyonlar bir işi yapmak üzere özelleştirilmiş kod parçacıklarıdır.

// Bir fonksiyonun kendisine belirtilen işlemi yapabilmesi için önce bu fonksiyonun tanımlanması sonrasında bu fonksiyonun çağırılması gerekir.

// ! Bir fonksiyonun tanımlanması
function selamla() {
  document.write("Merhaba dünya !!" + "<br/>");
}

// ! Bir fonksiyonun çağırılması
selamla();

function toplamaİşlemi() {
  let sayı1 = 5;
  let sayı2 = 15;

  let toplam = sayı1 + sayı2;

  document.write("Toplam:", toplam, "<br/>");
}

toplamaİşlemi();
// toplamaİşlemi();
// toplamaİşlemi();
// toplamaİşlemi();

// * Fonksiyonların Dinamik İşlemler Yapması
function parametreliToplama(x, y) {
  let toplam = x + y;

  document.write("Toplama 🤩:", toplam, "<br/>");
}

parametreliToplama(5, 4);
parametreliToplama(12, 4);

// * Fonksiyonlarda Return Kullanımı

function stokHesapla(a, b) {
  let stok = a + b;

  return stok;
}

document.write("Depo toplam stok:", stokHesapla(44, 55), "<br/>");

// * Arrow Funtions

// Javascriptin en güncel sürümüyle gelen arrow functionslar sayesinde özellikle callback fonksiyonları daha rahat ifade edebiliriz.

// Bir callBack function tanımlanırken tıpkı bir değişken tanımlar gibi let veya const anahtar kelimesi seçilir.Sonrasında bir boşluk bırakılıp fonksiyona bir isim verilir.Verilen bu ismin devamında sırayıyla = () => {} yapısı oluşturulur.Buradaki {} içerisinde fonksiyondan yapılması istenen işlemler kodlanır.

const çıktıVer = () => {
  document.write(
    "Selamlar,Udemig akademide javascript dersleri işliyoruz.",
    "<br/>"
  );
};

çıktıVer();

// Arrow functionda parametre kullanımı

const toplama = (a, b) => {
  let toplam = a + b;

  document.write("Toplam:", toplam, "<br/>");
};

toplama(1, 2);

// Arrow function return kullanımı

// const ikiKatınıAl = (x) => {
//   return x * 2;
// };

// Arrow functionlarda return işlemi yapılırken eğer bu işlem tek satırda yapılabilirse bunu return ve {} kullanmadan yapabiliriz.
const ikiKatınıAl = (x) => x * 2;

document.write("İki katı:", ikiKatınıAl(10), "<br/>");
document.write("İki katı:", ikiKatınıAl(14), "<br/>");

// todo: Bir tane arrow function tanımlayınız.Bu arrow function kendisine parametre verilen iki sayının ortalamasını hesaplayıp ekrana yazdırsın.Bu code script'i oluşturunuz.

const ortalamaHesapla = (s1, s2) => {
  let ortalama = (s1 + s2) / 2;

  document.write("Ortalama:", ortalama, "<br/>");
};

ortalamaHesapla(90, 100);

// * If-Else:

// Javascript'de koşullu yapılar if-else ile oluşturulur.

let kişiYaşı = 11;

if (kişiYaşı > 18) {
  document.write("Ehliyet alabilirsiniz", "<br/>");
} else {
  document.write("Ehliyet alamazsınız", "<br/>");
}

let sıraNo = 4;

if (sıraNo === 1) {
  document.write("Birinci kişisiniz", "<br/>");
} else if (sıraNo === 2) {
  document.write("İkinci kişisiniz", "<br/>");
} else if (sıraNo === 3) {
  document.write("Üçüncü kişisiniz", "<br/>");
} else {
  document.write("Sonuncu kişisiniz", "<br/>");
}

//  todo: Üç adet sayının ortalamasını hesaplayan ve eğer ortalama 50'den büyükse 'Ortalam 50'den büyüktür' ortalama 50'ye eşitse 'Ortalama 50dir' ortalama 50'den küçükse 'Ortalama 50den küçüktür' yazdıran fonksiyonu oluşturunuz.

const ortalamaHesaplaYazdır = (a, b, c) => {
  // Ortalama hesapla
  let ortalama = (a + b + c) / 3;

  // Ortalamaya bağlı olarak çıktı ver
  if (ortalama < 50) {
    document.write("Ortalama 50 den küçüktür", "<br/>");
  } else if (ortalama === 50) {
    document.write("Ortalama 50 ye eşittir", "<br/>");
  } else {
    document.write("Ortalama 50 den büyüktür", "<br/>");
  }
};

ortalamaHesaplaYazdır(100, 80, 65);

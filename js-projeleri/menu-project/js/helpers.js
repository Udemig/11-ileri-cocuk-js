const elements = {
  menuArea: document.querySelector(".menu-area"),
  buttons: document.querySelectorAll(".filter-btn"),
  // Birden fazla elemanı js kısmına çekeceksek querySelector  kullanılamaz.Çünkü bu metot bizim için sadece bir eleman çeker.Eğer birden fazla eleman çekmek istiyorsak querySelectorAll kullanmalıyız.
};

export default elements;

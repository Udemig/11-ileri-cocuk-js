import getMenu from "./api.js";
import elements from "./helpers.js";
import renderMenu from "./ui.js";

// Sayfa yüklendiğinde getMenu fonksiyonunu çalıştırmalı
document.addEventListener("DOMContentLoaded", getMenu);
// querySelectorAll ile çekilen tüm butonlara aynı anda addEventListener eklemeyiz.Bunun sebebi querySelectorAll ile çekilen elemanların bir dizi olmasıdır.
elements.buttons.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    // Tıklanılan elemanın içerisindeki category değerine eriş
    const selectedCategory = e.target.dataset.category;

    // Db.json'dan verileri al
    const menu = await getMenu();

    // Seçili kategorideki verileri al
    const filtredMenu = menu.filter(
      (item) => item.category == selectedCategory
    );

    // Ürünler arasında all kategorisinde bir ürün olmadığından bizim burada tüm ürünleri render etmemiz gerekir

    if (selectedCategory === "all") {
      // Eğer seçili kategori all ise tüm menü elemanlarını renderla
      renderMenu(menu);
    } else {
      // Seçili kategoriyle ilgili ürünleri renderla
      renderMenu(filtredMenu);
    }
  });
});

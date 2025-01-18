import renderMenu from "./ui.js";

const getMenu = async () => {
  // Db.json 'a istek at
  const res = await fetch("db.json");
  // Verileri  js nesnesine çevir
  const data = await res.json();
  // Data içerisindeki menu dizisini bir değişkene aktar
  const menu = data.menu;

  // Verileri render et
  renderMenu(menu);

  // Verileri dışarıya dön
  return menu;
};

export default getMenu;

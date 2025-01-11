const elements = {
  form: document.querySelector("form"),
  themeBtn: document.querySelector(".theme-btn"),
  main: document.querySelector("main"),
};

const parseDate = (date) => {
  // Js içerisindeki tarih objesini çağır
  const dateObject = new Date(date);
  // Tarih içerisindeki günü al
  const day = dateObject.getDay();
  // Tarih içerisindeki günü al
  const month = dateObject.getMonth() + 1;
  // Tarih içerisindeki yılı al
  const year = dateObject.getFullYear();

  // Fonksiyon çağırıldığında tarih versiini return et
  return day + "-" + month + "-" + year;
};

export { elements, parseDate };

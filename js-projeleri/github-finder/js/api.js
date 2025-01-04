import renderProfile from "./ui.js";

const getData = async (userName) => {
  // Api'a istek at
  const res = await fetch(`https://api.github.com/users/${userName}`);

  // Gelen veriyi js nesnesine çevir
  const user = await res.json();
  // Api'dan gelen veriye göre arayüzü renderla
  renderProfile(user);
};

export default getData;

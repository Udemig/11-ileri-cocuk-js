import { elements } from "./helpers.js";

const renderProfile = (user) => {
  console.log(user);

  elements.main.innerHTML = `
   <section class="left">
        <img
          src="https://avatars.githubusercontent.com/u/148998418?v=4"
          alt=""
        />
        <a href="#">Profili Göster</a>
      </section>
      <section class="right">
        <div>
          <span>Açık Repolar: 47</span>
          <span>Açık Gösteriler: 0</span>
          <span>Takipçiler: 47</span>
          <span>Takip Edilenler: 47</span>
        </div>
        <ul>
          <li>
            Hakkında::React-Frontend Developer | Software Developer | React
            -Native Developer | Mobile Developer | Backend Developer | Software
            Engineer
          </li>
          <li>Şirket:Emaartechs</li>
          <li>Website:</li>
          <li>Konum:Malatya/Turkey</li>
          <li>Hesap Oluşturma:25-10-2023</li>
        </ul>
      </section>`;
};

export default renderProfile;

import { elements, parseDate } from "./helpers.js";

const renderProfile = (user) => {
  console.log(user);

  elements.main.innerHTML = `
   <section class="left">
        <img
          src="${user.avatar_url}"
          alt=""
        />
        <a href="${user.html_url}" target='_blank'>Profili Göster</a>
      </section>
      <section class="right">
        <div>
          <span>Açık Repolar: ${user.public_repos}</span>
          <span>Açık Gösteriler: ${user.public_gists}</span>
          <span>Takipçiler: ${user.followers}</span>
          <span>Takip Edilenler: ${user.following}</span>
        </div>
        <ul>
          <li>
            Hakkında:${user.bio}
          </li>
          <li>Şirket:${user.company}</li>
          <li>Website:${user.blog}</li>
          <li>Konum:${user.location}</li>
          <li>Hesap Oluşturma:${parseDate(user.created_at)}</li>
        </ul>
      </section>`;
};

export default renderProfile;

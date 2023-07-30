import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const div2 = document.createElement("div");
  div2.classList.add("card");

  const div3 = document.createElement("div");
  div3.classList.add("headline");
  div3.textContent = anabaslik;

  const div4 = document.createElement("div");
  div4.classList.add("author");

  const div5 = document.createElement("div");
  div5.classList.add("img-container");

  const img1 = document.createElement("img");
  img1.setAttribute("src", "yazarFoto");

  const span3 = document.createElement("span");
  span3.textContent = yazarAdi;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      response.data.makaleler.forEach((item) => {
        console.log(index, "reseet => ", item);
        makale = Card(item);
        parent.appendChild(makale);
        console.log("res:", response);
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(function () {});
};

export { Card, cardEkleyici };

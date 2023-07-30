import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divtopic = document.createElement("div");
  divtopic.classList.add("topics");

  const divtab1 = document.createElement("div");
  divtab1.classList.add("tab");
  divtab1.textContent = "javascript";

  const divtab2 = document.createElement("div");
  divtab2.classList.add("tab");
  divtab2.textContent = "bootstrap";

  const divtab3 = document.createElement("div");
  divtab3.classList.add("tab");
  divtab3.textContent = "teknoloji";

  divtopic.appendChild(divtab1);
  divtopic.appendChild(divtab2);
  divtopic.appendChild(divtab3);
  return divtopic;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios
    .get("http://localhost:5001/api/konular")

    .then((response) => {
      // Tablar(response.data.konular);
      response.data.konular.forEach((item, index) => {
        // console.log(index, "res => ", item);
        konu = Tablar(item);
        // console.log("deneme:", item);
      });
      let containertab = document.querySelector(".tabs-container");

      containertab.append(divtopicx);
      console.log("deneme3:", item);
    })
    .catch((error) => {
      console.log("error => ", error);
    })
    .finally(function () {});
};

export { Tablar, tabEkleyici };

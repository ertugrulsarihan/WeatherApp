const form = document.querySelector("form");
const detay = document.querySelector(".detay");
const card = document.querySelector(".card");
const zamanSrc=document.querySelector('img.zaman');
const ikon=document.querySelector('.icon img');

const updateUı = (veri) => {
  const sehirDetay = veri.sehirDetay;
  const havadurumu = veri.havadurumu;
  const Sıcaklık=JSON.stringify(havadurumu.Temperature);
  const gerçekSıcaklık=JSON.parse(Sıcaklık)
  console.log(gerçekSıcaklık.Metric.Value);
  detay.innerHTML = `<div class="text-muted text-uppercase text-center detay">
<h1 class="my-3">${sehirDetay.EnglishName}</h1>
<div class="my-3">${havadurumu.WeatherText}</div>
<div class="display-4 my-4">
  <span>Sıcaklık</span>
  <span>&deg;${gerçekSıcaklık.Metric.Value}</span>
</div>
</div>`;

 const ikonSrc=`img/icons/${havadurumu.WeatherIcon}.svg`;
 ikon.setAttribute('src',ikonSrc);
 let zamanResmi=havadurumu.IsDayTime? 'img/day.svg':'img/night.svg'
 zamanSrc.setAttribute('src',zamanResmi)
if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
}
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const sehir = form.sehir.value.trim();

  sehirgüncelle(sehir).then((veri) => {
    updateUı(veri);
    console.log(veri);
  });
  form.reset();
localStorage.setItem('sehir',sehir)
  

});

const sehirgüncelle = async (sehir) => {
  const sehirDetay = await getCity(sehir);
  const havadurumu = await havaDurumuGetir(sehirDetay.Key);
  return {
    sehirDetay,
    havadurumu,
  };
};

if(localStorage.getItem('sehir')){
    sehirgüncelle(localStorage.getItem('sehir')).then((veri) => {
        updateUı(veri);
        console.log(veri);
      });
  }

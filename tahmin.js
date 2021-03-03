const key = "pAw1tLYwQrc2YXrsGOaxN03lCGIyBEDP";

const getCity = async (konum) => {
  const temelUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const sorgu = `?apikey=${key}&q=${konum}`;
  const res = await fetch(temelUrl + sorgu);
  const veri = await res.json();
  return veri[0];
};

const havaDurumuGetir = async (id) => {
  const temelURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const sorgu = `${id}?apikey=${key}`;
  const res = await fetch(temelURL + sorgu);
  const veri = await res.json();
  return veri[0];
};

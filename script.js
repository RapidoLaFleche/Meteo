let latitude = 44.8333;
let longitude = -0.5667;
let key = "953a967565257fb337d9d5c0cb570b24";


let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

fetch(url)
.then((response) => response.json())
.then((object) => {
    console.log(object);
});

//Fonction qui récupere les coordonnées de l'utilisateur
navigator.geolocation.getCurrentPosition(coordonnees);
function coordonnees(pos) {
  let crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
}

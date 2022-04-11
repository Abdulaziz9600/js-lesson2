var userOld = parseInt(prompt ("Yoshngizini kiriting "));
var viewUser = document.createElement ("p");
var enoughAge = 18 - userOld;

viewUser.style.textAlign = "center";
viewUser.style.fontWeight = "bold";;

document.body.append(viewUser);
if (userOld >= 18) {
  viewUser.textContent = "Siz bu Sportda qatnashishingiz Mumkin";
  console.log("Siz bu Sportda qatnashishingiz Mumkin");
  viewUser.style.color = "#F4CA16FF";
  viewUser.style.fontSize ="48px"
} if (userOld < 18)  { 
  viewUser.textContent = "Bu Sport uchun yoshingiz" + enoughAge +  "yoshga kichik" ;
  console.log("Telefoni sotib olaolmaysiz!"  + enoughAge +  " yoshga kichik" );
  viewUser.style.color = "#F4CA16FF";
  viewUser.style.fontSize ="48px"
}
 else  { (userOld === undefined || isNaN(userOld) || userOld === null)
  viewUser.textContent = "Yoshingizni kirtmadingiz! Qayta urinib koring😊";
  console.log("Yoshingizni kirtmadingiz!! Qayta urinib loring😊");
  viewUser.style.color = "#EB4C42FF";
  viewUser.style.fontSize ="48px"
}
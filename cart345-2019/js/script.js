// CART 345: Final Project
//
// by Alexandra Salois
//
var nameInput;

function changePage(page) {
  console.log(page);
  $("#page"+page).css('display', 'none');
  page++;
  $("#page"+page).css('display', 'block');
  console.log(nameInput);
}

function saveName(name) {
  nameInput = document.getElementById("name").value;
//  $("#welcomeCard").css('display','none');
  $("#welcomeCard").css('display','block');
  $("#name").css('display','none');
  $("#inputName").css('display','none');
  console.log(nameInput);
}

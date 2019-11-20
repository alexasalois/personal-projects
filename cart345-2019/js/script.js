// CART 345: Final Project
//
// by Alexandra Salois
//

function changePage(page) {
  console.log(page);
  $("#page"+page).css('display', 'none');
  page++;
  $("#page"+page).css('display', 'block');
}

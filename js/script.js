var hotelGet = document.querySelector(".js-search-hotels");
var search = document.querySelector("#js-form");

hotelGet.addEventListener("click", function(event){
  event.preventDefault();
  search.classList.toggle("search-form-open");
});

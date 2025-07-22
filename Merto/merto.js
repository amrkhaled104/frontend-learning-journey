let searchSuggestions=document.querySelector("#searchSuggestions");
let form=document.querySelector("#form");

form.addEventListener("click",function(){
    searchSuggestions.classList.toggle("d-none");
})


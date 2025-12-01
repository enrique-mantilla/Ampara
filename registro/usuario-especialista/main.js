

const btn = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-horizontal");


if(btn && menu){
  btn.addEventListener("click", () => {

    menu.classList.toggle("active");
  
  });
}


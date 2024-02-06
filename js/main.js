// hamburger toggle
const hamburgerToggle= document.querySelector("#hamburger-toggle");
const nav = document.querySelector("#nav");
hamburgerToggle.addEventListener("click", function(){
  hamburgerToggle.classList.toggle("hamburger-acitve");
  nav.classList.toggle("hidden")
})

// header scroll
window.onscroll = () => {
  const headerScroll = document.querySelector("#header");
  const fixNav = headerScroll.offsetTop;
  
  if (window.pageYOffset > fixNav) {
    headerScroll.classList.add('fixedNav');
  } else {
    headerScroll.classList.remove('fixedNav');
  }
};

// pesan
const nama = document.querySelector("#nama");
const saran = document.querySelector("#saran")
const button = document.querySelector("#button")
button.addEventListener("click", function(){
  const namaValue = nama.value || "Hamba Allah";
  const saranValue = saran.value || "Web nya keren";
  const phone = '6285263916607';

  const pesan = `https://api.whatsapp.com/send?phone=${phone}&text=gue ${namaValue}, saran gue singkat aja "${saranValue}"`

  window.location.href = pesan;
})

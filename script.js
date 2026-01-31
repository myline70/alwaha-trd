function setLang(lang){
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang(){
  const lang = localStorage.getItem("lang") || "en";
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerHTML = el.getAttribute("data-"+lang);
  });
  document.body.className = lang === "ar" ? "rtl" : "";
}

function toggleMenu(){
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(e){
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  if(navLinks && !nav.contains(e.target)){
    navLinks.classList.remove('active');
  }
});

window.onload = applyLang;
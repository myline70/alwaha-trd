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

window.onload = applyLang;
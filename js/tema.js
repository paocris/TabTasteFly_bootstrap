
(() => {
 "use strict";

 const storedTheme = localStorage.getItem("theme");

 const getPreferredTheme = () => {
   if (storedTheme) {
     return storedTheme;
   }

   return window.matchMedia("(prefers-color-scheme: dark)").matches
     ? "dark"
     : "light";
 };

 const setTheme = function (theme) {
   if (
     theme === "auto" &&
     window.matchMedia("(prefers-color-scheme: dark)").matches
   ) {
     document.documentElement.setAttribute("data-bs-theme", "dark");
   } else {
     document.documentElement.setAttribute("data-bs-theme", theme);
   }
 };

 setTheme(getPreferredTheme());

 const showActiveTheme = (theme) => {
   const activeThemeIcon = document.querySelector(".theme-icon-active use");
   const btnToActive = document.querySelector(
     `[data-bs-theme-value="${theme}"]`
   );
   const svgOfActiveBtn = btnToActive
     .querySelector("svg use")
     .getAttribute("href");

   document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
     element.classList.remove("active");
   });

   btnToActive.classList.add("active");
   activeThemeIcon.setAttribute("href", svgOfActiveBtn);
 };

 window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", () => {
     if (storedTheme !== "light" || storedTheme !== "dark") {
       setTheme(getPreferredTheme());
     }
   });

 window.addEventListener("DOMContentLoaded", () => {
   showActiveTheme(getPreferredTheme());

   document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
     toggle.addEventListener("click", () => {
       const theme = toggle.getAttribute("data-bs-theme-value");
       localStorage.setItem("theme", theme);
       setTheme(theme);
       showActiveTheme(theme);
     });
   });
 });
})();


//Alertas


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('¡El evento fue el mes pasado!', 'danger')
  })
}


$("#btnSubmit").click(function() {
  $(this).prop("disabled", true); //deshabilitamos el botón
  $(this).html(
  `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...` //añadimos el spinner
  );
});

//Loader pagina

const spinnerwrapperEl = document.querySelector('.spinner-wrapper');


window.addEventListener('load', () => {
  spinnerwrapperEl.style.opacity = '3';

  setTimeout (() =>{
    spinnerwrapperEl.style.display = 'none';
  }, 200);
})

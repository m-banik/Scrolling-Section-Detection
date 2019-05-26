// jQuery
// const dotModifier = function() {
//   const $sec2 = $(".sec2").offset().top;
//   const $sec3 = $(".sec3").offset().top;
//   const $sec4 = $(".sec4").offset().top;
//   if ($(this).scrollTop() < $sec2) {
//     $("li")
//       .not(".dot1")
//       .removeClass("active");
//     $(".dot1").addClass("active");
//   } else if ($(this).scrollTop() < $sec3) {
//     $("li")
//       .not(".dot2")
//       .removeClass("active");
//     $(".dot2").addClass("active");
//   } else if ($(this).scrollTop() < $sec4) {
//     $("li")
//       .not(".dot3")
//       .removeClass("active");
//     $(".dot3").addClass("active");
//   } else {
//     $("li")
//       .not(".dot4")
//       .removeClass("active");
//     $(".dot4").addClass("active");
//   }
// };

// $(window).on("scroll", dotModifier);
// window.onload = dotModifier;

// Vanilla JS
const scrollListener = function() {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll("li");
  sections.forEach((section, id) => {
    if (
      this.scrollY >= section.offsetTop &&
      (id === sections.length - 1 || this.scrollY < sections[id + 1].offsetTop)
    ) {
      dots.forEach((dot, index) => {
        if (id === index) dot.classList.add("active");
        else dot.classList.remove("active");
      });
    }
  });
};
window.addEventListener("scroll", scrollListener);
window.onload = scrollListener;

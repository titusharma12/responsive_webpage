const circular_slider = document.querySelector(".wrapper");
const character_name = document.querySelector(".character_name");
slides = document.querySelectorAll(".slides");
images = document.querySelectorAll(".slides img");
descriptions_item = document.querySelectorAll(".descriptions_item");

slides.forEach((slide, i) => {
  slide.onclick = () => {
    circular_slider.style.transform = `rotateZ(-${(360 / 5) * (i + 4)}deg)`;
    character_name.classList.remove("active");
    setTimeout(() => {
      character_name.textContent =
        descriptions_item[i].querySelector("h1").textContent;
      character_name.classList.add("active");
    }, 800);
    images.forEach((img, i) => {
      img.style.setProperty("--img-no", 2);
      img.classList.remove("active");
      descriptions_item[i].classList.remove("active");
    });
    descriptions_item[i].classList.add("active");
    slide.querySelector("img").classList.add("active");
  };
});

function navbar() {
  let mobile_container = document.getElementById("mobile-container");
  let menu = document.getElementById("menu");
  menu.style.display = "block";
  mobile_container.style.display = "none";
}
function btnclose() {
  // alert("hello");
  let mobile_container = document.getElementById("mobile-container");
  let menu = document.getElementById("menu");
  menu.style.display = "none";
  mobile_container.style.display = "flex";
}


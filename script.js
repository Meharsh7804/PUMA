let tl = gsap.timeline();

// animate the navbar
tl.from("header", { duration: 1, y: -50, opacity: 0 });

//animate puma logo
tl.from(".puma-white", { duration: 2, opacity: 0 });

// animate the shoe
tl.from(".black-shoe", { duration: 1, y: 50, opacity: 0 });

// animate the name
tl.from(".name, .name-2", { duration: 1, y: 50, opacity: 0 });

// animate the arrows
tl.from(".left-arrow-container", { duration: 1, x: -50, opacity: 0 });
tl.from(".right-arrow-container", { duration: 1, x: 50, opacity: 0 });

// animate the tagline
tl.from(".tagline, .tagline-2", { duration: 1, y: 50, opacity: 0 });

//Slider Animations
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

var area = document.querySelector(".trending");
var specificArea1 = document.querySelector(".trending-item-1");
var specificArea2 = document.querySelector(".trending-item-2");

area.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    x: dets.x,
    y: dets.y,
    ease: "circ.out",
  });
});

specificArea1.addEventListener("mouseenter", () => {
  const cursor = document.querySelector(".cursor");
  cursor.innerText = "THE 100";
  cursor.classList.add("hovering");
});

specificArea1.addEventListener("mouseout", () => {
  const cursor = document.querySelector(".cursor");
  cursor.innerText = "PUMA";
  cursor.classList.remove("hovering");
});

specificArea2.addEventListener("mouseenter", () => {
  const cursor = document.querySelector(".cursor");
  cursor.innerText = "RS-X";
  cursor.classList.add("hovering-2");
});

specificArea2.addEventListener("mouseout", () => {
  const cursor = document.querySelector(".cursor");
  cursor.innerText = "PUMA";
  cursor.classList.remove("hovering-2");
});

window.onload = function () {
  var slider = document.querySelector(".image-slider article div ul");
  var firstImg = slider.querySelector("li:first-child");
  var cloneFirstImg = firstImg.cloneNode(true);
  slider.appendChild(cloneFirstImg);

  slider.addEventListener("transitionend", function () {
    if (
      slider.style.transform ===
      `translateX(-${100 * slider.children.length - 1}%)`
    ) {
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
      setTimeout(function () {
        slider.style.transition = "transform 1s";
      }, 0);
    }
  });
};

window.addEventListener("scroll", function () {
  const shutters = document.querySelectorAll(".shutter");

  shutters.forEach((shutter) => {
    const rect = shutter.getBoundingClientRect();
    const isInViewport =
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2;

    if (isInViewport) {
      shutter.classList.add("open");
    } else {
      shutter.classList.remove("open");
    }
  });
});

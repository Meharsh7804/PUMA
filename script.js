let tl = gsap.timeline();

// animate the navbar
tl.from("header", { duration: 1, y: -50, opacity: 0 });

//animate puma logo
tl.from(".sliderBg", { duration: 2, opacity: 0 });

// animate the shoe
tl.from(".sliderImg", { duration: 1, y: 50, opacity: 0 });

// animate the name
tl.from(".sliderPrice", { duration: 1, x: -50, opacity: 0 });

// animate the tagline
tl.from(".sliderTitle", { duration: 1, x: 50, opacity: 0 });

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "../assets/Images/sneaker-images/air.png",
      },
      {
        code: "darkblue",
        img: "../assets/Images/sneaker-images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/jordan.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/blazer.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "../assets/Images/sneaker-images/crater.png",
      },
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "../assets/Images/sneaker-images/hippie.png",
      },
      {
        code: "black",
        img: "../assets/Images/sneaker-images/hippie2.png",
      },
    ],
  },
];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

document.querySelectorAll(".menuItem").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    document.querySelectorAll(".menuItem").forEach((div) => {
      div.classList.remove("active");
    });
    // Add active class to clicked item
    this.classList.add("active");
  });
});

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

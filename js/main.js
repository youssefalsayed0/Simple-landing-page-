let navigation = document.getElementById("navbar");
let arrow = document.getElementById("floating-arrow");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "#2c4755";
  } else {
    navigation.style.backgroundColor = "";
  }

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }


};

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* start nice scroll */

/* end nice scroll */
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight + 20}px`;

      // description.style.height = `170px`;

      item.querySelector(".accordion-vector").style.transform =
        "rotate(180deg)";
    } else {
      description.style.height = "0px";
      item.querySelector(".accordion-vector").style.transform = "rotate(0deg)";
    }
    removeOpen(index);
  });
});

function removeOpen(index) {
  accordionContent.forEach((item, index_open) => {
    if (index != index_open) {
      item.classList.remove("open");

      let description = item.querySelector(".description");
      description.style.height = "0px";
      item.querySelector(".accordion-vector").style.transform = "rotate(0deg)";
    }
  });
}

// .accordion-content .description{
//   height: 170px;
// }

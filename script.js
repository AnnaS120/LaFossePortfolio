// Contact form submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thanks for getting in touch!");
});


// Interactive journey timeline
const timelineIcons = document.querySelectorAll(".timeline-icon");

timelineIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        const descriptionId = icon.getAttribute("aria-controls");
        const description = document.getElementById(descriptionId);

        description.hidden = !description.hidden;

        icon.setAttribute("aria-expanded", !description.hidden);
    });
});

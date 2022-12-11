"use strict";

const arrows = document.querySelectorAll(".aside__arrow");
const lists = document.querySelectorAll(".aside__list");

const openContent = () => {
    arrows.forEach((arrow, i) =>
        arrow.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("none");
            lists[i].classList.toggle("display");
        })
    );
};
openContent();

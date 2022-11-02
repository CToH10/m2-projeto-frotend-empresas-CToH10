import { dropdown } from "../../scripts/dropdown.js"

const dropdownBtn = document.querySelector(".dropdownBtn")
const homeBtn     = document.querySelector(".homeBtn")
const registerBtn = document.querySelector(".registerBtn")
const goBackBtn   = document.querySelector(".goBack")


dropdownBtn.addEventListener("click", dropdown)
homeBtn.addEventListener("click", () => {
    window.location.href = "../home"
})

registerBtn.addEventListener("click", () => {
    window.location.href = "../register"
})

goBackBtn.addEventListener("click", () => {
    window.location.href = "../register"
})
import { dropdown } from "../../scripts/dropdown.js"

const dropdownBtn = document.querySelector(".dropdownBtn")
const homeBtn     = document.querySelector(".homeBtn")
const loginBtn    = document.querySelector(".registerBtn")
const goBackBtn   = document.querySelector(".goBack")

dropdownBtn.addEventListener("click", dropdown)

homeBtn.addEventListener("click", () => {
    window.location.href = "../home"
})

goBackBtn.addEventListener("click", () => history.back())

loginBtn.addEventListener("click", () => {
    window.location.href = "../login"
})
import { editProfile } from "../../scripts/modal.js"
import { dropdown } from "../../scripts/dropdown.js"


const body = document.querySelector("body")
const logout = document.querySelector(".logout")
const editBtn = document.querySelector(".edit")
const dropdownBtn = document.querySelector(".dropdownBtn")

dropdownBtn.addEventListener("click", dropdown)


logout.addEventListener("click", () => {
    localStorage.clear()
})

editBtn.addEventListener("click", () => {
    body.append(editProfile())
})



import { editProfile } from "../../scripts/modal.js"
import { dropdown } from "../../scripts/dropdown.js"


const body = document.querySelector("body")
const logout = document.querySelector(".logout")
const editBtn = document.querySelector(".edit")



logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../home"
})

editBtn.addEventListener("click", () => {
    body.append(editProfile())
})



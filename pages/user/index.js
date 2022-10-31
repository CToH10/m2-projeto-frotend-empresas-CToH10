import { editProfile } from "../../scripts/modal.js"


const body = document.querySelector("body")
const logout = document.querySelector(".logout")
const editBtn = document.querySelector(".edit")

logout.addEventListener("click", () => {
    localStorage.clear()
})

editBtn.addEventListener("click", () => {
    body.append(editProfile())
})

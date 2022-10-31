import { deleteModal, editModal, newDepartment, viewDepartment } from "../../scripts/modal.js"

const body = document.querySelector("body")
const logout = document.querySelector(".logout")
const createEnterprise = document.querySelector(".newDpt")
let viewBtn   = document.querySelectorAll(".open")
let deleteBtn = document.querySelectorAll(".delete")
let editBtn   = document.querySelectorAll(".edit")

logout.addEventListener("click", () => {
    localStorage.clear()
})

createEnterprise.addEventListener("click", () => {
    body.append(newDepartment())
})

viewBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        body.append(viewDepartment())
    })
})

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        body.append(deleteModal(btn.classList))
    })
})

editBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        body.append(editModal(btn.classList))
    })
})  

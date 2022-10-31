import { deleteModal, editModal, newDepartment } from "../../scripts/modal.js"

const body = document.querySelector("body")
const createEnterprise = document.querySelector(".newDpt")
let deleteBtn = document.querySelectorAll(".delete")
let editBtn   = document.querySelectorAll(".edit")

createEnterprise.addEventListener("click", () => {
    body.append(newDepartment())
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

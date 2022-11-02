import { listCompanies, listAllDepartments, listUsers } from "../../scripts/api.js"
import { deleteModal, editModal, newDepartment, viewDepartment } from "../../scripts/modal.js"

const body             = document.querySelector("body")
const logout           = document.querySelector(".logout")
const createEnterprise = document.querySelector(".newDpt")
const selectCompany    = document.querySelector(".selectCompany")
const listDepartments  = document.querySelector(".listDepartments")
const allUsers         = document.querySelector(".allUsers")
let token              = JSON.parse(localStorage.getItem("token"))

let companiesList   = await listCompanies()
let departmentsList = await listAllDepartments()
let usersList       = await listUsers()

companiesList.forEach((elem) => {
    selectCompany.insertAdjacentHTML("beforeend", `
    <option value="${elem.uuid}">${elem.name}</option>
    `)
})

departmentsList.forEach((elem) => {
    listDepartments.insertAdjacentHTML("beforeend", `
    <li name="${elem.uuid}">
        <section class="dptId marginBottom">
            <h3 class="dptName">${elem.name}</h3>
            <p class="dptDescription">${elem.description}</p>
            <p class="enterpriseName">${elem.companies.name}</p>
        </section>
        <section class="interactDpt flex justifyCenter gap-4">
            <button class="open"></button>
            <button class="edit"></button>
            <button class="delete"></button>
        </section>
    </li>
    `)
})

usersList.forEach((elem) => {
    let companyID = ""

    if (elem.department_uuid) {
        departmentsList.forEach((dpt) => {
            if (dpt.uuid == elem.uuid){
                companyID = dpt.name
            }})
    }

    if (elem.is_admin == false) {
        let professional = elem.professional_level
        professional = professional.charAt(0).toUpperCase() + professional.slice(1)
    allUsers.insertAdjacentHTML("beforeend", `
        <li name="${elem.uuid}">
            <section class="userId marginBottom">
                <h3 class="userName">${elem.username}</h3>
                <p class="userLevel">${professional}</p>
                <p class="enterpriseName">${companyID}</p>
            </section>
            <section class="interactUser flex justifyCenter gap-4">
                <button class="edit userEdit"></button>
                <button class="delete deleteUser"></button>
            </section>
        </li>
    `)

    }
})

logout.addEventListener("click", () => {
    localStorage.clear()
})

createEnterprise.addEventListener("click", () => {
    body.append(newDepartment())
})

let viewBtn   = document.querySelectorAll(".open")
let deleteBtn = document.querySelectorAll(".delete")
let editBtn   = document.querySelectorAll(".edit")

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
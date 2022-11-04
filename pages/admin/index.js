import { getButtons, listingUsers, listTheCompanies } from "../../scripts/admin.js"
import { companiesBySector, employedDpt, listAllDepartments, listUsers, outOfWork } from "../../scripts/api.js"
import { deleteModal, editModal, newDepartment, viewDepartment } from "../../scripts/modal.js"

window.title           = "Admin"
const body             = document.querySelector("body")
const logout           = document.querySelector(".logout")
const createEnterprise = document.querySelector(".newDpt")
const selectCompany    = document.querySelector(".selectCompany")
const listDepartments  = document.querySelector(".listDepartments")
const allUsers         = document.querySelector(".allUsers")
let token              = JSON.parse(localStorage.getItem("token"))

if (!token) {
    window.location.href = "../home"
}

let companiesList   = await companiesBySector()
let departmentsList = await listAllDepartments(token)

companiesList.forEach((elem) => {
    selectCompany.insertAdjacentHTML("beforeend", `
    <option value="${elem.uuid}">${elem.name}</option>
    `)
})

selectCompany.addEventListener("change", async () => {
    let value = selectCompany.options[selectCompany.selectedIndex].value
    let list  = await listAllDepartments(token, value)
    listDepartments.replaceChildren()
    list.forEach((elem) => {
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
    getButtons(listDepartments)
})

logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../home"
})

createEnterprise.addEventListener("click", async () => {
    let companies = await companiesBySector()
    body.append(newDepartment(companies, token))
})

listingUsers()
listTheCompanies()
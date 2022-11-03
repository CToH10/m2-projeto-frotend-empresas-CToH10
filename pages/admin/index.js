import { companiesBySector, employedDpt, listAllDepartments, listUsers, outOfWork } from "../../scripts/api.js"
import { deleteModal, editModal, newDepartment, viewDepartment } from "../../scripts/modal.js"

const body             = document.querySelector("body")
const logout           = document.querySelector(".logout")
const createEnterprise = document.querySelector(".newDpt")
const selectCompany    = document.querySelector(".selectCompany")
const listDepartments  = document.querySelector(".listDepartments")
const allUsers         = document.querySelector(".allUsers")
let token              = JSON.parse(localStorage.getItem("token"))

let companiesList = await companiesBySector()
let departmentsList = await listAllDepartments(token)


export async function listTheCompanies() {
    departmentsList = await listAllDepartments(token)
    listDepartments.replaceChildren()
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
    getButtons(listDepartments)
}

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
})

logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../home"
})

createEnterprise.addEventListener("click", async () => {
    let companies = await companiesBySector()
    body.append(newDepartment(companies, token))
})

export function getButtons(elem = document) {
    let viewBtn   = elem.querySelectorAll(".open")
    let deleteBtn = elem.querySelectorAll(".delete")
    let editBtn   = elem.querySelectorAll(".edit")
    
    viewBtn.forEach((btn) => {
        btn.addEventListener("click", async ()=> {
            let dpt        = btn.parentElement.parentElement
            let id         = btn.parentElement.parentElement.getAttribute("name")
            let listNoJobs = await outOfWork(token)
            let thisSector = await employedDpt(token, id)
            body.append(viewDepartment(dpt, token, id, listNoJobs, thisSector))
        })
    })
    
    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", ()=> {
            let id = btn.parentElement.parentElement.getAttribute("name")
            body.append(deleteModal(btn, token, id))
        })
    })
    
    editBtn.forEach((btn) => {
        btn.addEventListener("click", ()=> {
            let id = btn.parentElement.parentElement.getAttribute("name")
            body.append(editModal(btn.classList, token, id))
        })
    })  
}

export async function listingUsers() {
    let usersList  = await listUsers(token)
    const allUsers = document.querySelector(".allUsers")
    allUsers.replaceChildren()

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

            if (professional) {
                professional = professional.charAt(0).toUpperCase() + professional.slice(1)
            } else {
                professional = ""
            }
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
    getButtons(allUsers)
}

listingUsers()
listTheCompanies()
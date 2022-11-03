import { listingUsers, listTheCompanies } from "../pages/admin/index.js"
import { adminEditUser, companiesBySector, createDpt, deleteDpt, deleteUser, editUser, hireWorker, outOfWork } from "./api.js"
import { getValues } from "./inputs.js"

function modal() {
    let modal = document.createElement("section")
    modal.classList = "modal flex justifyCenter alignCenter absolute front"

    return modal
}

export function editModal(classList, token, id) {
    let modalSect   = modal()
    let modalBox    = document.createElement("section")
    let closeModal  = document.createElement("button")
    let editTitle   = document.createElement("h2")
    let editForm    = document.createElement("form")
    let confirmEdit = document.createElement("button")

    modalBox.classList    = "modalBox editBox flexColumn justifyBetween relative"
    closeModal.classList  = "dismissButton absolute"
    editTitle.classList   = "titleModal marginBottom"
    editForm.classList    = "editForm flexColumn justifyBetween"
    confirmEdit.classList = "confirmEdit"

    confirmEdit.type = "submit"

    editForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, editTitle, editForm)
    
    if (classList.contains("userEdit")) {
        let kindOfWork = document.createElement("select")
        let selectKind = document.createElement("option")
        let homeOffice = document.createElement("option")
        let hybrid     = document.createElement("option")
        let presential = document.createElement("option")

        modalBox.classList.add("editUser")
        kindOfWork.classList = "newWorker userSelect"

        kindOfWork.id = "kind_of_work"
        homeOffice.id = "home office"
        hybrid.id     = "híbrido"
        presential.id = "presencial"

        selectKind.value = ""
        homeOffice.value = "home office"
        hybrid.value     = "híbrido"
        presential.value = "presencial"

        selectKind.innerText = "Selecionar modalidade de trabalho"
        homeOffice.innerText = "Home Office"
        hybrid.innerText     = "Híbrido"
        presential.innerText = "Presencial"

        let proLevel    = document.createElement("select")
        let selectLevel = document.createElement("option")
        let trainee     = document.createElement("option")
        let junior      = document.createElement("option")
        let midLevel    = document.createElement("option")
        let senior      = document.createElement("option")

        proLevel.classList = "newWorker userSelect proLevel"

        proLevel.id    = "professional_level"
        trainee.id     = "estagiário"
        junior.id      = "júnior"
        midLevel.id    = "pleno"
        senior.id      = "sênior"

        selectLevel.value = ""
        trainee.value     = "estagiário"
        junior.value      = "júnior"
        midLevel.value    = "pleno"
        senior.value      = "sênior"

        selectLevel.innerText = "Selecionar nível profissional"
        trainee.innerText     = "Estagiário"
        junior.innerText      = "Júnior"
        midLevel.innerText    = "Pleno"
        senior.innerText      = "Sênior"

        editTitle.innerText   = "Editar usuário"
        confirmEdit.innerText = "Editar"

        kindOfWork.append(selectKind, homeOffice, hybrid, presential)
        proLevel.append(selectLevel, trainee, junior, midLevel, senior)
        editForm.append(kindOfWork, proLevel, confirmEdit)
        
        editForm.addEventListener("submit", async (event)=> {
            event.preventDefault()
            let values = getValues(editForm.elements)
    
            let edited = await adminEditUser(token, values, id)
            listingUsers()
            modalSect.remove()
        })

    } else {
        editTitle.innerText     = "Editar Departamento"
        confirmEdit.innerText   = "Editar o departamento"
        let dptDescText         = document.createElement("textarea")
        dptDescText.classList   = "dptDescText"
        dptDescText.placeholder = "valores anteriores"
        editForm.append(dptDescText, confirmEdit)
    }


    return modalSect
}

export function deleteModal(btn, token, id) {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let deleteTitle   = document.createElement("h2")
    let confirmDelete = document.createElement("button")
    let allUsers      = document.querySelector(".allUsers")
    let classList     = btn.classList

    modalBox.classList      = "modalBox deleteBox flexColumn justifyAround alignCenter gap-1 relative"
    closeModal.classList    = "dismissButton absolute"
    deleteTitle.classList   = "deleteTitle"
    confirmDelete.classList = "hire confirmDelete"
    confirmDelete.id        = id

    confirmDelete.type      = "submit"
    confirmDelete.innerText = "Deletar"

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })
    if (classList.contains("deleteUser")){
        let name = btn.parentElement.parentElement.children[0].children[0].innerText
        deleteTitle.innerText = `Realmente deseja remover o usuário ${name}?`
        confirmDelete.addEventListener("click", async ()=>{

            let deletion = await deleteUser(token, confirmDelete.id)
            listingUsers()
            modalSect.remove()
        })
    } else {
        let name = btn.parentElement.parentElement.children[0].children[0].innerText
        deleteTitle.innerText = `Realmente deseja deletar o Departamento ${name} e demitir seus funcionários?`
        confirmDelete.addEventListener("click", async ()=>{

            let deletion = await deleteDpt(token, confirmDelete.id)
            listTheCompanies()
            modalSect.remove()
        })
    }

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, deleteTitle, confirmDelete)

    return modalSect
}

export function newDepartment(list, token) {
    let modalSect       = modal()
    let modalBox        = document.createElement("section")
    let closeModal      = document.createElement("button")
    let newDptTitle     = document.createElement("h2")
    let creationForm    = document.createElement("form")
    let dptName         = document.createElement("input")
    let dptDesc         = document.createElement("input")
    let company         = document.createElement("select")
    let selectCompany   = document.createElement("option")
    let confirmCreation = document.createElement("button")
    let companies       = list

    modalBox.classList        = "modalBox newDptBox flexColumn justifyBetween relative"
    closeModal.classList      = "dismissButton absolute"
    newDptTitle.classList     = "titleModal marginBottom"
    creationForm.classList    = "editForm flexColumn justifyBetween"
    dptName.classList         = "newInput"
    dptDesc.classList         = "newInput"
    company.classList         = "newInput"
    confirmCreation.classList = "confirmEdit"

    dptName.placeholder       = "Nome do departamento"
    dptDesc.placeholder       = "Descrição"
    newDptTitle.innerText     = "Criar departamento"
    selectCompany.innerText   = "Selecionar empresa"
    confirmCreation.innerText = "Criar o departamento"

    dptName.required = true
    company.required = true

    dptName.id = "name"
    dptDesc.id = "description"
    company.id = "company_uuid"
    
    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })
    
    
    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, newDptTitle, creationForm)
    creationForm.append(dptName, dptDesc, company, confirmCreation)
    company.append(selectCompany)   
    
    companies.forEach((comp) => {
        company.insertAdjacentHTML("beforeend", `
        <option value="${comp.uuid}">${comp.name}</option>
        `)
    })

    creationForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let body = getValues(creationForm.elements)
        createDpt(token, body)
        listTheCompanies()
        modalSect.remove()
    })


    return modalSect
}

export function viewDepartment(dpt, token, id, listingNoJobs, employed) {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let dptTitle      = document.createElement("h2")
    let dptId         = document.createElement("section")
    let dptSect       = document.createElement("section")
    let dptDesc       = document.createElement("h3")
    let companyName   = document.createElement("p")
    let getWorker     = document.createElement("form")
    let newWorker     = document.createElement("select")
    let selectWorker  = document.createElement("option")
    let hire          = document.createElement("button")
    let workersList   = document.createElement("ul")
    let listNoJobs    = listingNoJobs
    let thisSector    = employed
    let infoText      = [...dpt.children[0].children]

    thisSector.forEach((unem) => {
        let workerCard    = document.createElement("li")
        let workerInfo    = document.createElement("section")
        let workerName    = document.createElement("h3")
        let workerLevel   = document.createElement("p")
        let workerCompany = document.createElement("p")
        let fireWorker    = document.createElement("button")
        workerCard.classList    = "workerCard flexColumn gap-1"
        workerInfo.classList    = "workerInfo flexColumn gap-2"
        workerName.classList    = "dptDesc"
        workerLevel.classList   = "companyName"
        workerCompany.classList = "companyName"
        fireWorker.classList    = "fireWorker"
        workerName.innerText    = unem.username
        workerLevel.innerText   = "Pleno"
        workerCompany.innerText = "Company name"
        fireWorker.innerText    = "Desligar"
        workersList.appendChild(workerCard)
        workerCard.append(workerInfo, fireWorker)
        workerInfo.append(workerName, workerLevel, workerCompany)

    })
    
    
    modalBox.classList      = "modalBox relative"
    closeModal.classList    = "dismissButton absolute"
    dptId.classList         = "dptId flex justifyBetween marginBottom"
    getWorker.classList     = "getWorker flexColumn gap-1"
    dptSect.classList       = "dptSect"
    dptTitle.classList      = "titleModal marginBottom"
    dptDesc.classList       = "dptDesc"
    hire.classList          = "hire"
    newWorker.classList     = "newWorker"
    companyName.classList   = "companyName"
    workersList.classList   = "workersList flex"
    
    modalBox.append(closeModal, dptTitle, dptId, workersList)
    dptId.append(dptSect, getWorker)
    dptSect.append(dptDesc, companyName)
    getWorker.append(newWorker, hire)
    newWorker.appendChild(selectWorker)

    listNoJobs.forEach((unem) => {
        newWorker.insertAdjacentHTML("afterbegin", `
        <option value="${unem.uuid}">${unem.username}</option>
        `)
    })
    
    dptTitle.innerText      = infoText[0].textContent
    dptDesc.innerText       = infoText[1].textContent
    companyName.innerText   = infoText[2].textContent
    selectWorker.innerText  = "Selecionar usuário"
    hire.innerText          = "Contratar"
    
    modalBox.id  = dpt.getAttribute("name")
    newWorker.id = "user_uuid"
    hire.type    = "submit"

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    getWorker.addEventListener("submit", (event) => {
        event.preventDefault()
        let body = {department_uuid: modalBox.id,...getValues(getWorker.elements)}
        hireWorker(token, body)
    })

    modalSect.appendChild(modalBox)
    return modalSect
}

export function editProfile(token) {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let editTitle     = document.createElement("h2")
    let editForm      = document.createElement("form")
    let userNameInput = document.createElement("input")
    let emailInput    = document.createElement("input")
    let passwordInput = document.createElement("input")
    let confirmEdit   = document.createElement("button")

    modalBox.classList      = "modalBox editBox flexColumn justifyBetween relative"
    closeModal.classList    = "dismissButton absolute"
    editForm.classList      = "editForm flexColumn gap-1"
    userNameInput.classList = "newInput"
    emailInput.classList    = "newInput"
    passwordInput.classList = "newInput"
    confirmEdit.classList   = "confirmEdit"

    confirmEdit.type = "submit"

    editForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    userNameInput.id = "username"
    emailInput.id    = "email"
    passwordInput.id = "password"

    emailInput.type    = "email"
    passwordInput.type = "password"

    userNameInput.placeholder = "Seu nome"
    emailInput.placeholder    = "Seu e-mail"
    passwordInput.placeholder = "Sua senha"

    editTitle.innerText   = "Editar perfil"
    confirmEdit.innerText = "Editar perfil"

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, editTitle, editForm)
    editForm.append(userNameInput, emailInput, passwordInput, confirmEdit)

    editForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let body = getValues(editForm.elements)

        editUser(body, token)
        location.reload()
    })

    return modalSect
}

function modal() {
    let modal = document.createElement("section")
    modal.classList = ""

    return modal
}

export function editModal(classList) {
    let modalSect   = modal()
    let modalBox    = document.createElement("section")
    let closeModal  = document.createElement("button")
    let editTitle   = document.createElement("h2")
    let editForm    = document.createElement("form")
    let confirmEdit = document.createElement("button")

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

        kindOfWork.required = true

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

        selectLevel.required = true 

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

    } else {
        editTitle.innerText     = "Editar Departamento"
        confirmEdit.innerText   = "Editar o departamento"
        let dptDescText         = document.createElement("input")
        dptDescText.placeholder = "valores anteriores"
        editForm.append(dptDescText, confirmEdit)
    }

    return modalSect
}

export function deleteModal(classList) {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let deleteTitle   = document.createElement("h2")
    let confirmDelete = document.createElement("button")

    confirmDelete.type = "submit"
    confirmDelete.innerText = "Deletar"

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    if (classList.contains("deleteUser")){
        deleteTitle.innerText = "Realmente deseja remover o usuário NOME?"
    } else {
        deleteTitle.innerText = "Realmente deseja deletar o Departamento NOME e demitir seus funcionários?"
    }

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, deleteTitle, confirmDelete)

    return modalSect
}

export function newDepartment() {
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


    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    dptName.placeholder       = "Nome do departamento"
    dptDesc.placeholder       = "Descrição"
    selectCompany.innerText   = "Selecionar empresa"
    confirmCreation.innerText = "Criar o departamento"

    dptName.required = true
    company.required = true

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, newDptTitle, creationForm)
    creationForm.append(dptName, dptDesc, company, confirmCreation)
    company.append(selectCompany)   

    return modalSect
}

export function viewDepartment() {
    let modalSect = modal()
    let modalBox    = document.createElement("section")
    let closeModal = document.createElement("button")
    let dptTitle     = document.createElement("h2")
    let dptId = document.createElement("section")
    let dptSect = document.createElement("section")
    let dptDesc = document.createElement("h3")
    let companyName = document.createElement("p")
    let getWorker = document.createElement("section")
    let newWorker = document.createElement("select")
    let selectWorker = document.createElement("option")
    let hire = document.createElement("button")
    let workersList = document.createElement("ul")
    let workerCard = document.createElement("li")
    let workerInfo = document.createElement("section")
    let workerName = document.createElement("h3")
    let workerLevel = document.createElement("p")
    let workerCompany = document.createElement("p")
    let fireWorker = document.createElement("button")

    modalBox.append(closeModal, dptTitle, dptId, workersList)
    dptId.append(dptSect, getWorker)
    dptSect.append(dptDesc, companyName)
    getWorker.append(newWorker, hire)
    newWorker.appendChild(selectWorker)
    workersList.append(workerCard, fireWorker)
    workerCard.appendChild(workerInfo)
    workerInfo.append(workerName, workerLevel, workerCompany)

    dptTitle.innerText = "Nome do departamento"
    dptDesc.innerText = "Descrição"
    companyName.innerText = "Nome da empresa"
    selectWorker.innerText = "Selecionar usuário"
    workerName.innerText = "Nome de usuário"
    workerLevel.innerText = "Pleno"
    workerLevel.innerText = "Company name"
    fireWorker.innerText = "Desligar"

    getWorker.type = "submit"


    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    modalSect.appendChild(modalBox)
    return modalSect
}
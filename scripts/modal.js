function modal() {
    let modal = document.createElement("section")
    modal.classList = "modal flex justifyCenter alignCenter absolute front"

    return modal
}

export function editModal(classList) {
    let modalSect   = modal()
    let modalBox    = document.createElement("section")
    let closeModal  = document.createElement("button")
    let editTitle   = document.createElement("h2")
    let editForm    = document.createElement("form")
    let confirmEdit = document.createElement("button")

    modalBox.classList = "modalBox editBox flexColumn justifyBetween relative"
    closeModal.classList = "dismissButton absolute"
    editTitle.classList = "titleModal marginBottom"
    editForm.classList = "editForm flexColumn justifyBetween"
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

        proLevel.classList = "newWorker userSelect"
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
        let dptDescText         = document.createElement("textarea")
        dptDescText.classList   = "dptDescText"
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

    modalBox.classList = "modalBox deleteBox flexColumn justifyAround alignCenter gap-1 relative"
    closeModal.classList = "dismissButton absolute"
    deleteTitle.classList = "deleteTitle"
    confirmDelete.classList = "hire confirmDelete"

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

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })


    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, newDptTitle, creationForm)
    creationForm.append(dptName, dptDesc, company, confirmCreation)
    company.append(selectCompany)   

    return modalSect
}

export function viewDepartment() {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let dptTitle      = document.createElement("h2")
    let dptId         = document.createElement("section")
    let dptSect       = document.createElement("section")
    let dptDesc       = document.createElement("h3")
    let companyName   = document.createElement("p")
    let getWorker     = document.createElement("section")
    let newWorker     = document.createElement("select")
    let selectWorker  = document.createElement("option")
    let hire          = document.createElement("button")
    let workersList   = document.createElement("ul")
    let workerCard    = document.createElement("li")
    let workerInfo    = document.createElement("section")
    let workerName    = document.createElement("h3")
    let workerLevel   = document.createElement("p")
    let workerCompany = document.createElement("p")
    let fireWorker    = document.createElement("button")

    modalBox.classList = "modalBox relative"
    closeModal.classList = "dismissButton absolute"
    dptId.classList = "dptId flex justifyBetween marginBottom"
    getWorker.classList = "getWorker flexColumn gap-1"
    dptSect.classList = "dptSect"
    dptTitle.classList = "titleModal marginBottom"
    dptDesc.classList = "dptDesc"
    hire.classList = "hire"
    newWorker.classList = "newWorker"
    companyName.classList = "companyName"
    workerName.classList = "dptDesc"
    workerLevel.classList = "companyName"
    workerCompany.classList = "companyName"
    workersList.classList = "workersList flex"
    workerCard.classList = "workerCard flexColumn gap-1"
    workerInfo.classList = "workerInfo flexColumn gap-2"
    fireWorker.classList = "fireWorker"

    modalBox.append(closeModal, dptTitle, dptId, workersList)
    dptId.append(dptSect, getWorker)
    dptSect.append(dptDesc, companyName)
    getWorker.append(newWorker, hire)
    newWorker.appendChild(selectWorker)
    workersList.appendChild(workerCard)
    workerCard.append(workerInfo, fireWorker)
    workerInfo.append(workerName, workerLevel, workerCompany)

    dptTitle.innerText = "Nome do departamento"
    dptDesc.innerText = "Descrição"
    companyName.innerText = "Nome da empresa"
    selectWorker.innerText = "Selecionar usuário"
    hire.innerText = "Contratar"
    workerName.innerText = "Nome de usuário"
    workerLevel.innerText = "Pleno"
    workerCompany.innerText = "Company name"
    fireWorker.innerText = "Desligar"

    getWorker.type = "submit"


    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    modalSect.appendChild(modalBox)
    return modalSect
}

export function editProfile() {
    let modalSect     = modal()
    let modalBox      = document.createElement("section")
    let closeModal    = document.createElement("button")
    let editTitle     = document.createElement("h2")
    let editForm      = document.createElement("form")
    let userNameInput = document.createElement("input")
    let emailInput    = document.createElement("input")
    let passwordInput = document.createElement("input")
    let confirmEdit   = document.createElement("button")

    modalBox.classList = "modalBox editBox flexColumn justifyBetween relative"
    closeModal.classList = "dismissButton absolute"
    editForm.classList = "editForm flexColumn gap-1"
    userNameInput.classList = "newInput"
    emailInput.classList = "newInput"
    passwordInput.classList = "newInput"
    confirmEdit.classList = "confirmEdit"

    confirmEdit.type = "submit"

    editForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    closeModal.innerText = "X"
    closeModal.addEventListener("click", ()=> {
        modalSect.remove()
    })

    emailInput.type = "email"
    passwordInput.type = "password"

    userNameInput.placeholder = "Seu nome"
    emailInput.placeholder = "Seu e-mail"
    passwordInput.placeholder = "Sua senha"

    editTitle.innerText   = "Editar perfil"
    confirmEdit.innerText = "Editar perfil"

    modalSect.appendChild(modalBox)
    modalBox.append(closeModal, editTitle, editForm)
    editForm.append(userNameInput, emailInput, passwordInput, confirmEdit)

    return modalSect
}
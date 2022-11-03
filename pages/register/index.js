import { createUser } from "../../scripts/api.js"
import { dropdown } from "../../scripts/dropdown.js"
import { getValues } from "../../scripts/inputs.js"

const dropdownBtn  = document.querySelector(".dropdownBtn")
const homeBtn      = document.querySelector(".homeBtn")
const loginBtn     = document.querySelector(".registerBtn")
const goBackBtn    = document.querySelector(".goBack")
const registerForm = document.querySelector("form")
const submitForm   = document.querySelector(".submitForm")
const emailInput   = document.querySelector("#email")

dropdownBtn.addEventListener("click", dropdown)

homeBtn.addEventListener("click", () => {
    window.location.href = "../home"
})

loginBtn.addEventListener("click", () => {
    window.location.href = "../login"
})

goBackBtn.addEventListener("click", () => history.back())

registerForm.addEventListener("submit", async (event) =>{
    event.preventDefault()
    submitForm.replaceChildren()
    submitForm.insertAdjacentHTML("afterbegin", `
    <img src="../../assets/img/spinner.svg" alt="Spinning" class="spinner">
    `)

    let formBody = getValues(registerForm.elements)

    let formSucces = await createUser(formBody)

    if(formSucces.error) {
        let message = formSucces.error[0]
        message = message.charAt(0).toUpperCase() + message.slice(1)
        submitForm.classList.add("redForm")
        submitForm.replaceChildren()
        submitForm.innerText = message

        emailInput.addEventListener("input", () => {
            submitForm.classList.remove("redForm")
            submitForm.replaceChildren()
            submitForm.innerText = "Cadastre-se"
        })

    } else {
        window.location.href = "../login"
    }

})

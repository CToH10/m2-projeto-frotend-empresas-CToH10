import { isAdmin, login } from "../../scripts/api.js"
import { dropdown } from "../../scripts/dropdown.js"
import { getValues } from "../../scripts/inputs.js"

const dropdownBtn = document.querySelector(".dropdownBtn")
const homeBtn     = document.querySelector(".homeBtn")
const registerBtn = document.querySelector(".registerBtn")
const goBackBtn   = document.querySelector(".goBack")
const loginForm   = document.querySelector("form")
const submitForm   = document.querySelector(".submitForm")


dropdownBtn.addEventListener("click", dropdown)
homeBtn.addEventListener("click", () => {
    window.location.href = "../home"
})

registerBtn.addEventListener("click", () => {
    window.location.href = "../register"
})

goBackBtn.addEventListener("click", () => {
    window.location.href = "../register"
})


loginForm.addEventListener("submit", async (event) =>{
    event.preventDefault()
    submitForm.replaceChildren()
    submitForm.insertAdjacentHTML("afterbegin", `
    <img src="../../assets/img/spinner.svg" alt="Spinning" class="spinner">
    `)

    let formBody    = getValues(loginForm.elements)
    let loginResult = await login(formBody)
    let admin       = await isAdmin(loginResult.token)
    localStorage.setItem("token", JSON.stringify(loginResult.token))

    if (loginResult.token) {
        if (admin.is_admin) {
            window.location.href = "../admin"
        } else {
            window.location.href = "../user"
        }
        
    } else {
        submitForm.replaceChildren()
        submitForm.innerText = "Login"
    }
})
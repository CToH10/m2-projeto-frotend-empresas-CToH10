import { editProfile } from "../../scripts/modal.js"
import { userInfo } from "../../scripts/api.js"


const body = document.querySelector("body")
const logout = document.querySelector(".logout")
const editBtn = document.querySelector(".edit")
const userName = document.querySelector(".name")
const userEmail = document.querySelector(".email")
const userLevel = document.querySelector(".professional_level")
const kindWork = document.querySelector(".kind_of_work")
let token = JSON.parse(localStorage.getItem("token"))
let userProfile = await userInfo(token)
let proLevel = userProfile.professional_level
proLevel = proLevel.charAt(0).toUpperCase() + proLevel.slice(1)


userName.innerText  = userProfile.username
userEmail.innerText = userProfile.email
userLevel.innerText = proLevel
kindWork.innerText  = userProfile.kind_of_work


console.log(userProfile)

logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../home"
})

editBtn.addEventListener("click", () => {
    body.append(editProfile())
})



import { coworkers, userInfo } from "./api.js"


const body          = document.querySelector("body")
const logout        = document.querySelector(".logout")
const editBtn       = document.querySelector(".edit")
const userName      = document.querySelector(".name")
const userEmail     = document.querySelector(".email")
const userLevel     = document.querySelector(".professional_level")
const kindWork      = document.querySelector(".kind_of_work")
const companyTitle  = document.querySelector(".companyTitle")
const listCoworkers = document.querySelector(".listCoworkers")
let token           = JSON.parse(localStorage.getItem("token"))

let coworkersList   = await coworkers(token)


export async function makeProfile() {
    let userProfile = await userInfo(token)
    let proLevel    = userProfile.professional_level
    let workFrom    = userProfile.kind_of_work
    if (proLevel != null) {
        proLevel        = proLevel.charAt(0).toUpperCase() + proLevel.slice(1)
    }
    if (workFrom != null) {
        workFrom        = workFrom.charAt(0).toUpperCase() + workFrom.slice(1)
    }
    
    document.title  = userProfile.username

    userName.innerText  = userProfile.username
    userEmail.innerText = userProfile.email
    userLevel.innerText = proLevel
    kindWork.innerText  = workFrom

}
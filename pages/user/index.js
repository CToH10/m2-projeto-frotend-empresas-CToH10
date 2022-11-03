import { editProfile } from "../../scripts/modal.js"
import { coworkers, userInfo } from "../../scripts/api.js"


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



logout.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../home"
})

editBtn.addEventListener("click", () => {
    body.append(editProfile(token))
})

function populateList() {
    if (coworkersList.length == 0) {
        companyTitle.innerText = ""
        listCoworkers.replaceChildren()
        listCoworkers.insertAdjacentHTML("afterbegin", `
        <h2 class="notHired">Você ainda não foi contratado</h2>
        `)
    } else {
        coworkersList.forEach((person) => {
            listCoworkers.insertAdjacentHTML("beforeend", `
            <li>
            <h3 class="coworkerName marginBottom">${person.users.username}</h3>
            <p class="coworkerLevel">${person.users.kind_of_work}</p>
            </li>
            `)
        })
    }
}

export async function makeProfile() {
    let userProfile     = await userInfo(token)
    let proLevel        = userProfile.professional_level
    proLevel            = proLevel.charAt(0).toUpperCase() + proLevel.slice(1)
    
    document.title      = userProfile.username

    userName.innerText  = userProfile.username
    userEmail.innerText = userProfile.email
    userLevel.innerText = proLevel
    kindWork.innerText  = userProfile.kind_of_work

}

makeProfile()
populateList()
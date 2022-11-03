import { editProfile } from "../../scripts/modal.js"
import { companiesBySector, coworkers, userInfo } from "../../scripts/api.js"
import { makeProfile } from "../../scripts/user.js"


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
let userProfile     = await userInfo(token)


let coworkersList   = await coworkers(token)
let companiesList   = await companiesBySector()
let currentCompany  = companiesList.filter((comp) => comp.uuid == coworkersList[0].company_uuid)

if (window.location.href.includes("user")) {

    logout.addEventListener("click", () => {
        localStorage.clear()
        window.location.href = "../home"
    })
    
    
    editBtn.addEventListener("click", () => {
        body.append(editProfile(token))
    })
}

function populateList() {
    if (coworkersList[0].company_uuid == null) {
        companyTitle.innerText = ""
        listCoworkers.replaceChildren()
        listCoworkers.insertAdjacentHTML("afterbegin", `
        <h2 class="notHired">Você ainda não foi contratado</h2>
        `)
    } else {
        companyTitle.innerText = `${currentCompany[0].name} - ${coworkersList[0].name}`
        coworkersList = coworkersList[0].users
        listCoworkers.replaceChildren()
        coworkersList.forEach((person) => {
            if (person.username != userProfile.username) {
                let workFrom = person.kind_of_work
                workFrom     = workFrom.charAt(0).toUpperCase() + workFrom.slice(1)
                listCoworkers.insertAdjacentHTML("beforeend", `
                <li>
                <h3 class="coworkerName marginBottom">${person.username}</h3>
                <p class="coworkerLevel">${workFrom}</p>
                </li>
                `)
            }
        })
    }
}

makeProfile()
populateList()
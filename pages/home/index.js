import { listCompanies, listSectors } from "../../scripts/api.js"
import { dropdown } from "../../scripts/dropdown.js"

const dropdownBtn = document.querySelector(".dropdownBtn")
const enterprises   = document.querySelector(".enterprises")
const companiesList = document.querySelector(".companiesList")

dropdownBtn.addEventListener("click", dropdown)
let allSectors   = await listSectors()
let allCompanies = await listCompanies()

allSectors.forEach((sector) => {
    enterprises.insertAdjacentHTML("beforeend", `
    <option value="${sector.description}">${sector.description}</option>
    `)
})

allCompanies.forEach((comp) => {
    let horas = comp.opening_hours.slice(0, 2) + " horas"

    companiesList.insertAdjacentHTML("beforeend", `
    <li class="company flexColumn justifyBetween" name="${comp.uuid}">
        <h3 class="enterName">${comp.name}</h3>
        <section class="companyInfo flexColumn gap-2">
            <p class="openHours">${horas}</p>
            <p class="sectorSelect marginBottom">${comp.sectors.description}</p>
        </section>
    </li class="company flexColumn gap-2">
    `)
})
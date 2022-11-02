const baseUrl = "http://localhost:6278/"
let headers   = {
    "Content-Type": "application/json"
}

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjA4MjNjMjgtMmE5Zi00YTg2LTg1MTUtNmIzZmZiOTEzZDRiIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTY2NzQwMTE0NCwiZXhwIjoxNjY4MjY1MTQ0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.50sb6oyx9nqB750vkJ-QuGQ6pD_2ilPFTdQSWJ7m-20"

export async function createUser(body) {

    try { let create = await fetch(`${baseUrl}auth/register`,{
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })

    let createJson = await create.json()

    return createJson

    } catch (err) {
        console.log(err)
    }
}

export async function listCompanies() {
    try { let companies = await fetch(`${baseUrl}companies`)

    let companiesJson = await companies.json()

    return companiesJson

    } catch (err) {
        console.log(err)
    }
}

export async function listAllDepartments() {
    try { let departments = await fetch(`${baseUrl}departments`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let departmentsJson = await departments.json()
    return departmentsJson

    } catch (err) {
        console.log(err)
    }
}

export async function listUsers() {
    try { let users = await fetch(`${baseUrl}users`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let usersJson = await users.json()

    // console.log(usersJson)

    return usersJson

    } catch (err) {
        console.log(err)
    }
}
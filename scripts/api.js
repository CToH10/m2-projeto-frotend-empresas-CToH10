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

export async function login(body) {
    try { let login = await fetch(`${baseUrl}auth/login`,{
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })

    let loginJson = await login.json()


    return loginJson

    } catch (err) {
        console.log(err)
    }
}

export async function isAdmin(token) {
    try { let admin = await fetch(`${baseUrl}auth/validate_user`,{
        headers: {Authorization: `Bearer ${token}`},
    })

    let adminJson = await admin.json()

    return adminJson

    } catch (err) {
        console.log(err)
    }
}

export async function companiesBySector(sector = "") {
    try { let compSector = await fetch(`${baseUrl}companies/${sector}`)
        let compSJson = await compSector.json()

        return compSJson
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

export async function listSectors() {
    try { let sectors = await fetch(`${baseUrl}sectors`)

    let sectorsJson = await sectors.json()

    return sectorsJson

    } catch (err) {
        console.log(err)
    }
}

export async function userInfo(token) {
    try { let user = await fetch(`${baseUrl}users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let userJson = await user.json()

    return userJson
        
    } catch (err) {
        console.log(err)
    }
}

export async function coworkers(token) {
    try { let list = await fetch(`${baseUrl}users/departments/coworkers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let listJson = await list.json()
    
    return listJson

    } catch (err) {
        console.log(err)
    }
}

export async function editUser(body, token) {
    try { let edit = await fetch(`${baseUrl}users`, {
        method: "PATCH", 
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
        let editJson = await edit.json()

        return editJson

    } catch (err) {
        console.log(err)
    }
}


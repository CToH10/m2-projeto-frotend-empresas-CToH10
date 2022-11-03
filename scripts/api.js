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
        return (err)
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
        return (err)
    }
}

export async function isAdmin(token) {
    try { let admin = await fetch(`${baseUrl}auth/validate_user`,{
        headers: {Authorization: `Bearer ${token}`},
    })

    let adminJson = await admin.json()

    return adminJson

    } catch (err) {
        return (err)
    }
}

export async function companiesBySector(sector = "") {
    try { let compSector = await fetch(`${baseUrl}companies/${sector}`)
        let compSJson = await compSector.json()

        return compSJson
    } catch (err) {
        return (err)
    }
}

export async function listAllDepartments(token, id = "") {
    try { let departments = await fetch(`${baseUrl}departments/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let departmentsJson = await departments.json()
    return departmentsJson

    } catch (err) {
        return (err)
    }
}

export async function listUsers(token) {
    try { let users = await fetch(`${baseUrl}users`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let usersJson = await users.json()

    return usersJson

    } catch (err) {
        return (err)
    }
}

export async function listSectors() {
    try { let sectors = await fetch(`${baseUrl}sectors`)

    let sectorsJson = await sectors.json()

    return sectorsJson

    } catch (err) {
        return (err)
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
        return (err)
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
        return (err)
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
        return (err)
    }
}

export async function deleteUser(token, id) {
    try { let erase = await fetch(`${baseUrl}admin/delete_user/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        let eraseJson = erase.status

    } catch (err) {
        return (err)
    }
}

export async function adminEditUser(token, body, id) {
    try {
        let updated = await fetch(`${baseUrl}admin/update_user/${id}`, {
            method: "PATCH", 
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        let updatedJson = await updated.json()

        return updatedJson

    } catch (err) {
        return (err)
    }
}

export async function outOfWork(token) {
    try { let unemployed = await fetch(`${baseUrl}admin/out_of_work`, {
        headers: {
            Authorization: `Bearer ${token}`
        }

    })
    let unemployedJson = unemployed.json()

    return unemployedJson
    
    } catch (err) {
        return (err)
    }
}

export async function employedDpt(token, id) {
    let allUsers = await listUsers(token)
    let found = allUsers.filter((user) => 
        user.department_uuid == id
    )

    return found
}

export async function deleteDpt(token, id) {
    try {
        let byeDpt = await fetch(`${baseUrl}departments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
    } catch (err) {
        return (err)
    }
}

export async function createDpt(token, body) {
    try {
        let newDpt = await fetch(`${baseUrl}departments`, {
            method: "POST",
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`
            }, 
            body: JSON.stringify(body)
        })

        let newDptResponse = await newDpt.json()
    } catch (err) {
        return (err)
    }
}

export async function hireWorker(token, body) {
    try {
        let newHire = await fetch(`${baseUrl}departments/hire`, {
            method: "PATCH", 
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        let newHireJson = await newHire.json()
    } catch (err) {
        return (err)
    }
}

export async function fireWorkerDpt(token, id) {
    try{
        let byeWorker = await fetch(`${baseUrl}departments/dismiss/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (err) {
        return (err)
    }
}
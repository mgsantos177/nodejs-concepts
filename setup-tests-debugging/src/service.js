import './types.js'

/** 
 * @param { IncomingUser } user
 * @returns { OutcomingUser}
 */
function parseUser(user) {
    const result = {
        email: user.email,
        name: user.name,
    }

    return result
}

export { parseUser }


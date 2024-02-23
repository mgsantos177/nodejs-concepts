import { parseUser } from '../src/service.js'
import '../src/types.js'
import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Service', () => {
    /** @type { IncomingUser} */
    const user = {
        email: 'peter@quill.com',
        name: 'peter',
        password: 'starlord'
    }

    const result = parseUser(user);

    assert.deepStrictEqual(result, {
        name: user.name,
        email: user.email
    })
})
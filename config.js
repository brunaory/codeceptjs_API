require('dotenv').config({ path: __dirname + `/.env` })

const ENV = process.env.ENV || 'homolog';
const HOMOLOG = {
    domain: process.env.HOMOLOG_API_URL,
    public_key: process.env.HOMOLOG_PUBLIC_KEY,
}

module.exports = HOMOLOG

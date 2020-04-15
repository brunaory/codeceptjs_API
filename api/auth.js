var axios = require('axios')
const env = require('../config')

async function getMarvelCharacters(hash, public_key=env.public_key, domain=env.domain) {
  
  return axios.get(`${domain}/v1/public/characters` +
    "?&apikey=" + public_key +
    "&ts=1" +
    "&hash=" + hash,
 ).catch(error => {
  return error})
}


async function getCharacters(hash, character, public_key=env.public_key, domain=env.domain) {
  const character_Id = character
  return axios.get(`${domain}/v1/public/characters/${character_Id}` +
    
    "?&apikey=" + public_key +
    "&ts=1" +
    "&hash=" + hash,
 ).catch(error => {
  return error})
}

async function getComics(hash, character, public_key=env.public_key, domain=env.domain) {
  const character_Id = character
  return axios.get(`${domain}/v1/public/characters/${character_Id}/comics` +
    
    "?&apikey=" + public_key +
    "&ts=1" +
    "&hash=" + hash,
 ).catch(error => {
  return error})
}



module.exports = {getMarvelCharacters, getCharacters, getComics}
const chai = require("chai")
const expect = chai.expect
const Validator = require('jsonschema').Validator
const schemaValidator = new Validator()
const {marvelCharactersSchema} = require('../schemas/marvelCharacters_schema')
const {charactersSchema} = require('../schemas/characters_schema')
const {comicsSchema} = require('../schemas/comics_schema')
const {getMarvelCharacters, getCharacters, getComics} = require('../api/auth')
const {hash, character} = require('../variables/users')
const assertArrays = require('chai-arrays');
chai.use(assertArrays);


Feature("API Marvel");

Scenario('Validate Marvel characters contracts  @schema @marvel', async () => {
  const charactersMarvel = await getMarvelCharacters(hash)
  const result = schemaValidator.validate(charactersMarvel.data, marvelCharactersSchema)
  expect(result.errors).to.length(0)
})

Scenario('Validate characters contracts  @schema @characters', async () => {
  const characters = await getCharacters(character, hash)
  const result = schemaValidator.validate(characters.data, charactersSchema)
  expect(result.errors).to.length(0)
})

Scenario('Validate comics contracts  @schema @comics', async () => {
  const comics = await getComics(character, hash)
  const result = schemaValidator.validate(comics.data, comicsSchema)
  expect(result.errors).to.length(0)
})

Scenario('Return 200 - sucess @sucess', async () => {
  const charactersMarvel = await getMarvelCharacters(hash)
  expect(charactersMarvel.status).to.equal(200)
})

Scenario('List characters @list', async () => {
  const responseCharacter = await getMarvelCharacters(hash)
  const charcterOne = responseCharacter.data.data.results[0].name
  const charcterTwo = responseCharacter.data.data.results[1].name
  const charcterThree = responseCharacter.data.data.results[2].name
  const charcterFor = responseCharacter.data.data.results[3].name
  const charcterFive = responseCharacter.data.data.results[4].name
  const characters = [charcterOne, charcterTwo, charcterThree, charcterFor, charcterFive]
  console.log(characters)
  expect(characters.length).to.equal(5)
})

Scenario('Description character @descripion', async () => {
  const responseCharacter = await getMarvelCharacters(hash)
  const descriptionCharacter = responseCharacter.data.data.results[2].description
  console.log('Description: ',descriptionCharacter)
  expect(descriptionCharacter).not.to.eq(null)
  expect(descriptionCharacter).not.to.eq("")
})

Scenario('Comics character @comics', async () => {
  const responseCharacter = await getMarvelCharacters(hash)
  const comicsCharacter = responseCharacter.data.data.results[2].comics
  console.log(comicsCharacter)
  expect(comicsCharacter).not.to.eq(null)
  expect(comicsCharacter).not.to.eq("")
})
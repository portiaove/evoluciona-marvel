import axios from 'axios'
const apiKey = process.env.API-KEY

const http = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=${apiKey}`
})

const listCharacters = () => http.get('/')
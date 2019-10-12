import axios from 'axios'
const MARVEL_API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY

const http = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?nameStartsWith=th&apikey=${MARVEL_API_KEY}`
})

const listCharacters = () =>  http.get('/')

export default { listCharacters }
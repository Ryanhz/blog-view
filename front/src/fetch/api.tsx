export const serverHost = host()
export const baseURL = serverHost + "/v2"

function host() {
  if (process.env.NODE_ENV == 'production') {
    return 'http://api.enight.club'
  } else {
    return "http://localhost:8001"
  }
}

const profile = '/profile'
const users = '/users'
const posts = '/posts'
const categories = '/categories'
const tags = '/tags'
const socials = '/socials'

export const API = {
  profile,
  users,
  posts,
  categories,
  tags,
  socials
}
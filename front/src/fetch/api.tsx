export const serverHost = host()
export const baseURL = serverHost + "/v1"

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

export const API = {
  profile,
  users,
  posts,
  categories,
  tags
}
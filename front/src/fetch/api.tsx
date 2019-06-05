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
const user = '/user'
const posts = '/posts'
const categories = '/categories'
const tags = '/tags'

export const API = {
  profile,
  user,
  posts,
  categories,
  tags
}
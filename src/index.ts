import { apiClient } from 'src/lib'

const articleId = 'xg8qvl87pey'
const res = apiClient.articles._articleId(articleId).$get()

console.log(res)

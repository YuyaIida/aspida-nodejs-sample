// import { apiClient } from 'src/lib'
import aspida from '@aspida/axios'
import axios from 'axios'
import api from 'src/api/$api'

const apiClient = api(aspida(axios, { baseURL: 'https://hobby.microcms.io/api/v1/' }))
const articleId = 'xg8qvl87pey'
const res = apiClient.articles._articleId(articleId).$get()

console.log(apiClient)

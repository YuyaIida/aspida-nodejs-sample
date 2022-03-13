import aspida from '@aspida/axios'
import axios from 'axios'
import api from 'src/api/$api'

export const apiClient = api(aspida(axios, { baseURL: 'https://hobby.microcms.io/api/v1/' }))

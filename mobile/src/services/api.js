import axios from 'axios'

// 10.0.0.2:3000 // for simule on android studio
// 10.0.3.2:3000 // for simule on genymotion

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000'
})

export default api
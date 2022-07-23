import Axios from 'axios'

const instance = Axios.create({
})

// instance.interceptors.request.use((response) => /* open alert */ response.data)
instance.interceptors.response.use((response) => /* cierre alert */ response.data)

export default instance;
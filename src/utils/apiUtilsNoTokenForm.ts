const baseURL = import.meta.env.VITE_API_URL

const makeAPICallNoTokenForm = async ({ path, method = 'POST', payload = null }) => {
  const myHeaders = new Headers()

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: payload,
    redirect: 'follow'
  }

  let url = new window.URL(`${baseURL}${path}`)

  return window
    .fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json()
      if (!response.ok) {
        let errorMessage

        if (data && data.message) {
          if (typeof data.message === 'string') {
            errorMessage = data.message
          } else if (Array.isArray(data.message)) {
            errorMessage = data.message.map(({ msg, param }) => `${param}: ${msg}`).join(', ')
          }
        } else {
          errorMessage = 'An unknown error occured!'
        }
        const error = new Error(errorMessage)
        error.status = response.status || 500
        return Promise.reject(error)
      }
      return data
    })
    .catch((error) => {
      throw error
    })
}

export default makeAPICallNoTokenForm

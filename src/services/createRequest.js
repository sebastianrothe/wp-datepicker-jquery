export default function createRequest(api, callback) {
  /* global XMLHttpRequest */
  const request = new XMLHttpRequest()
  request.open('GET', api, true)

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      callback(request.responseText)
    } else {
      console.warn('Failed getting disabled dates. ', request.status)
    }
  }

  request.onerror = () => {
    console.warn('Failed getting disabled dates. ', request.status)
  }

  return request
}

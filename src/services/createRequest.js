export default function createRequest(api, callback) {
  /* global XMLHttpRequest */
  const request = new XMLHttpRequest()
  request.open('GET', api, true)

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      console.info('finished loading data: ' + request.responseText)
      callback(request.responseText)
    } else {
      console.error('Failed getting disabled dates. ', request.status)
    }
  }

  request.onerror = () => {
    console.error('Failed getting disabled dates. ', request.status)
  }

  return request
}

import axios from 'axios'

export const getLocation = async (IPAddress?: string) => {
  let requestUrl
  let pattern = /^(((?!-))(xn--)?[a-z0-9-_]{0,61}[a-z0-9]{1,1}.)*(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}).[a-z]{2,}$/
  let domain = IPAddress?.match(pattern)

  if (domain) {
    requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&domain=${IPAddress}`
  } else if (!domain && IPAddress) {
    requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${IPAddress}`
  } else {
    requestUrl =
      'https://geo.ipify.org/api/v2/country,city?apiKey=at_VbZj5MT3jx4avUFDHcvvrCbdoZHci'
  }
  const request = await axios.get(requestUrl)
  return request
}

import { useState, useEffect } from 'react'
import { getLocation } from '../components/api'
import Header from '../components/Header'
import Map from '../components/map'

interface Location {
  ip: string
  isp: string
  country: string
  region: string
  timezone: string
  lat: number
  lng: number
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>('')
  const [data, setData] = useState<Location>({
    ip: '',
    isp: '',
    country: '',
    region: '',
    timezone: '',
    lat: 0,
    lng: 0,
  })

  const getIPInformation = (input: string | undefined) => {
    getLocation(input)
      .then((data) => {
        setData({
          ip: data?.data?.ip,
          isp: data?.data?.isp,
          country: data?.data?.location?.country,
          region: data?.data?.location?.region,
          timezone: data?.data?.location?.timezone,
          lat: data?.data?.location?.lat,
          lng: data?.data?.location?.lng,
        })
      })
      .catch((err) => console.log('error', err))
  }

  useEffect(() => {
    getIPInformation(searchTerm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = (input: string | undefined) => {
    setSearchTerm(input)
    getIPInformation(input)
  }
  return (
    <>
      <Header
        ip={data?.ip}
        isp={data?.isp}
        country={data?.country}
        region={data?.region}
        timezone={data?.timezone}
        handleSearch={handleSearch}
      />
      <Map lat={data?.lat} lng={data?.lng} />
    </>
  )
}

export default App

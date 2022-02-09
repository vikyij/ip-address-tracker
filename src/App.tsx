import { useState, useEffect } from 'react'
import { getLocation } from './components/api'
import Header from './components/Header'
import Map from './components/map'

interface Location {
  ip: string
  isp: string
  location: {
    country: string
    region: string
    timezone: string
    lat: number
    lng: number
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [data, setData] = useState<Location | undefined>()

  const getIPInformation = () => {
    getLocation(searchTerm)
      .then((data) => {
        setData(data?.data)
      })
      .catch((err) => console.log('error', err))
  }

  useEffect(() => {
    getIPInformation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = (input: string) => {
    setSearchTerm(input)
  }
  return (
    <>
      <Header
        ip={data?.ip}
        isp={data?.isp}
        country={data?.location?.country}
        region={data?.location?.region}
        timezone={data?.location?.timezone}
        handleSearch={handleSearch}
        getIPInformation={getIPInformation}
      />
      {data && <Map lat={data?.location?.lat} lng={data?.location?.lng} />}
    </>
  )
}

export default App

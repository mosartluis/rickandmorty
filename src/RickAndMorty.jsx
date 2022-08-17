import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainLayout from './components/MainLayout'
import randomLocation from "./hooks/randomLocation"
import searchLocations from './hooks/searchLocations';
import axios from 'axios';

function RickAndMorty() {
  const [nameLocation, setNameLocation] = useState('')
  const [searchedDimensionUrl, setSearchedDimensionUrl] = useState('')
  
  const { location, setLocation } = randomLocation()
  const searchedLocations = searchLocations(nameLocation)

  const handleSearchedLocation = (url, name) => {
    setNameLocation(name)
    setSearchedDimensionUrl(url)
  }

  useEffect(() => {
    if(searchedDimensionUrl){
      axios.get(searchedDimensionUrl)
      .then(res => setLocation(res.data))
      .catch(error => console.log(error))
    }
  }, [searchedDimensionUrl])

  
  return (
    <>
      <Header 
        nameLocation={nameLocation} 
        setNameLocation={setNameLocation} 
        searchedLocations={searchedLocations} 
        handleSearchedLocation={handleSearchedLocation}
      />
      <MainLayout 
        nameLocation={nameLocation} 
        setNameLocation={setNameLocation} 
        location={location}
      />     
    </>
  )
}

export default RickAndMorty

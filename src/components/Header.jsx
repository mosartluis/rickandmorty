import { useEffect, useState } from 'react'
import Name from '../img/NameImg.png'


const Header = ({nameLocation, setNameLocation, searchedLocations, handleSearchedLocation}) => {
  const [isActiveInput, setIsActiveInput] = useState(false)

  const offInput = e => {
    if(e.target.classList[0] !== 'inputSearch' &&
       e.target.classList[0] !== 'listSearch') {
      setIsActiveInput(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', offInput)
  }, [])

  return (
    <header className='header'>
        <section className='headerSearch'>
            <img src={Name} alt='Text Rick And Morty' />
            <article className='headerSearcher'>
              <input 
                className='inputSearch'
                onFocus={() => setIsActiveInput(true)}
                value={nameLocation}
                placeholder='Search Dimension'
                onChange={e => setNameLocation(e.target.value)}
                type="text" 
              />
              <section className={`listSearch ${isActiveInput ? 'on' : 'off'}`}>
                {searchedLocations.map(searchedLocation => (
                  <p 
                    key={searchedLocation?.url} 
                    onClick={() => handleSearchedLocation(searchedLocation?.url, searchedLocation.name)}
                  >{searchedLocation.name}</p>
                ))}
              </section>
            </article>
        </section>
  </header>
  )
}

export default Header
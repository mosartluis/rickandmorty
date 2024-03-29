import { useState } from "react";
import Location from "./Location"
import cardsPagesLogic from "../hooks/cardsPagesLogic";


const Main = ({location}) => {
  const [cards, setCards] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pages, setPages] = useState([])

  cardsPagesLogic(location,setCards, setPages, pageNumber, setPageNumber)
 
  return (
    <main className='body'>
        <Location 
          name={location?.name} 
          dimension={location?.dimension} 
          type={location?.type} 
          population={location?.residents?.length}
        />
        <section className='body__dataLocation'>
          {cards[pageNumber - 1]}
        </section>
        <section className="pagination">
          {pages}
        </section>
    </main>
  )
}

export default Main
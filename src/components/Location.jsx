const Location = ({name, dimension, type, population}) => {
  
  return (
    <section className='body'>
        <br></br>
        <br></br>
        <br></br>
        <div className='contInfLocation'>
            <div className='infoLocTittle'>
                <h2>{name}</h2>
            </div>
            <div className='infoLocInfo'>
                <p><span>Type:</span> {type}</p>
                <p><span>Dimension:</span> {dimension}</p>
                <p><span>Population:</span> {population}</p>
            </div>
        </div>
    </section>
  )
}

export default Location

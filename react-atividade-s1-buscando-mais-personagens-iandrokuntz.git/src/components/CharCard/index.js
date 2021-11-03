import "./style.css"

const CharCard = ({item}) => {

    const name = item?.name

    return(
        <div className="Card">
            <div className={item?.status}>

                <h3>{name}</h3>
                <img src={item?.image} alt={name}></img>
                <p> Species: {item?.species}</p>
                <p>{item?.status}</p>
                
            </div>
        </div>
    )
}

export default CharCard
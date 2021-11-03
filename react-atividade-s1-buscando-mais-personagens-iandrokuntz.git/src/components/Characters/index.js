import "./style.css"
import CharCard from "../CharCard"

const Characters = ({characterList}) => {

    return(
        <div>

            {characterList.map((item) => (
                <CharCard key={item.id} item={item} />
                
            ))}

        </div>

    )
}

export default Characters
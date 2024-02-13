import {useState} from "react";

function Card({id, name, info, image, price, removeTour}) {
    
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info: `${info.substring(0,200)}....`
    
    function toggleHandler(){
        console.log(readmore,"oncikckckk");

        setReadmore(!readmore)
        console.log(readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={toggleHandler}>
                        {
                            readmore ? `Show Less` : `Read More`
                        }
                    </span>
                </div>
            </div>
            {/* evet handler to remove tours based on id */}
            <button onClick={() => removeTour(id)} className="btn-red"> 
                Not Interested
            </button>
        </div>
    )
}
export default Card;
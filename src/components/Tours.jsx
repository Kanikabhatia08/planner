import Card from "./Card"; 

function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan with love</h2>
            </div>
            <div className="cards">
                {/* 7 tours, 7 cards */}
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card> //simple destructure passing as props
                    })
                }
            </div>
        </div>
    )
    
}

export default Tours;
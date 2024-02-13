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
// {
//     id: 6,
//     name: "Jaisalmer",
//     info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
//     image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
//     price: "68,595",
// },
export default Tours;
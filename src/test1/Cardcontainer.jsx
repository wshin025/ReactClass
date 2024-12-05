import Card from "./Card";
import apt1 from '../imgs/apt1.jpg'
import see1 from '../imgs/see1.jpg'
import oce1 from '../imgs/oce1.jpg'

const listing=[
    {
        id:1,
        title: "서울의 아늑한 아파트",
        price:100000,
        rating:4.9,
        imageUrl: `${apt1}`
    },
    {
        id:2,
        title: "서울의 아늑한 아파트",
        price:100000,
        rating:4.9,
        imageUrl: `${oce1}`
    },
    {
        id:3,
        title: "서울의 아늑한 아파트",
        price:100000,
        rating:4.9,
        imageUrl: `${see1}`
    }
];

function CardContainer(){
    return(
        <div className="card-container">
            {listing.map(listing => (
                <Card key={listing.id}{...listing}/>
            ))}
        </div>
    );
}

export default CardContainer;
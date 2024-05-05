//esto es un componente, digamos es una funcion 
import "./Card.css"

//function Card(props){   //este fue el primero, igaul funciona solamente con props
//pero los llamados quedan asi: <h2>{props.title}</h2>    y    <p>{props.description}</p>
//donde title y description son nombres que estoy creando alli mismo
function Card({title,description}){
    
    return(<div className="Cardclass">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>);
}

export default Card;
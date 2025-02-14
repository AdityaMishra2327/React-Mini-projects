function Card(props){
    return(

        <div className="cards">
            <div className="card">
                <img src={props.imgscr} alt="nature" className="card__img"/>
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.link}><button>Read More</button></a>
                </div>
            </div>
        </div>

    );
}

export default Card;
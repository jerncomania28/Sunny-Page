

const Card = ({ data }) => {

    const { avatar, content, name, title } = data;
    return (
        <div className="card">
            <img src={avatar} alt="sunny-side team" className="card__image" />

            <p className="card__text">
                {content}
            </p>

            <div className="card__footer">
                <p className="card__footer--header">
                    {name}
                </p>
                <p className="card__footer--text">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default Card;
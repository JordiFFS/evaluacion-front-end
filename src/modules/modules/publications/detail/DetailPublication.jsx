
export const DetailPublication = ({ active, dateConvert }) => {
    return (
        <div className="detail-container">

            <div className="detail-card" >
                {active.media ? <img className="detail-img" src={active.media} alt="Imagen de la publicación" /> : null}
                <p className="detail-title">{active.text}</p>
                <p className="username">Usuario: {active.username}</p>
                <p className="author">Por: {active.name}</p>
                <p className="user_desc">Descripción de usuario: {active.user_desc} </p>
                <p className="date">Fecha: {dateConvert(active.date)}</p>
                <div className="interactions">
                    <span>👍 {active.likes}</span>
                    <span>💬 {active.comments}</span>
                    <span>🔄 {active.shares}</span>
                </div>
            </div>
        </div>
    )
}

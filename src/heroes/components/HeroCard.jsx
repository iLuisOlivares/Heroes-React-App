
export const HeroCard = ({
    id = 'dc-batman',
    superhero = 'Batman',
    publisher = 'DC Comics',
}) => {

    const imgUrl = `src/assets/${id}.jpg`

    return (
        <div className="col d-flex justify-content-center align-items-center p-2">

            <div className="card" style={{ "width": "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p>{publisher}</p>
                </div>

            </div >

        </div>
    )
}
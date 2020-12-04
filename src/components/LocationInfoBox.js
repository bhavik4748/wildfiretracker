

function LocationInfoBox({info, closeClick}) {

    return (
        <div className="location-info">
            <div className="closeModal" onClick={closeClick} >x</div>
            <h2>Event Location Info</h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                    TITLE: <strong>{info.title}</strong>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfoBox

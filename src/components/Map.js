import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationVolcanoMarker from './LocationVolcanoMarker';
import LocationInfoBox from './LocationInfoBox';
import LocationStormMarker from './LocationStormMarker';

export const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((ev, index) => {

        if (ev.categories[0].id === 8) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title , date: ev.geometries[0].date })} />
        } else if (ev.categories[0].id === 12 && ev.geometries[0].type === 'Point') {
            return <LocationVolcanoMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        } else if (ev.categories[0].id === 12 && ev.geometries[0].type !== 'Point')
            console.log(ev);
        else if (ev.categories[0].id === 10) {
            return ev.geometries.map((geo, index2) => {
                return <LocationStormMarker key={index2} lat={geo.coordinates[1]} lng={geo.coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title , date: geo.date })} />
            })

        }
        return null
    })

    const closeClick = () => {
        setLocationInfo(null);
    }

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'your key' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} closeClick={closeClick} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}



import { Icon, InlineIcon } from '@iconify/react';
import tropicalStorm from '@iconify/icons-carbon/tropical-storm';


const LocationStormMarker = ({ key, lat, lng, onClick }) => {
    return (
        <div onClick={onClick} key={key} >
            <Icon icon={tropicalStorm} className="location-storm-icon" key={key} />
        </div>
    )
}

export default LocationStormMarker

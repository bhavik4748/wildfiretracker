import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ key, lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick} key={key} >
            <Icon icon={locationIcon} className="location-icon" key={key} />
        </div>
    )
}

export default LocationMarker

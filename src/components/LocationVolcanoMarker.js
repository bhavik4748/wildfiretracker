
import { Icon, InlineIcon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-emojione/volcano';



const LocationVolcanoMarker = ({ key, lat, lng, onClick }) => {
    return (
        <div onClick={onClick} key={key} >
            <Icon icon={volcanoIcon} className="location-icon" key={key} />
        </div>
    )
}


export default LocationVolcanoMarker

import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';


const Header = () => {
    return (
        <header className="header" >
            <div className="desktop">
                <h2><Icon icon={locationIcon}></Icon> WildFire Tracker (Powered by NASA)</h2>
            </div>
            <div className="mobile">
                <h3><Icon icon={locationIcon}></Icon> WildFire Tracker (Powered by NASA)</h3>
            </div>
        </header>
    )
}

export default Header

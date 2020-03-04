import React from 'react';
import { NavLink } from 'react-router-dom';

// Large Sidebar SVGs
import { ReactComponent as CloseIcon} from '../assets/navigation/SVGs/largeSidebar/cross.svg';

export default function MembershipNotify(props) {
    return (
        <div className="membership-notify">
            <p className="membership-notify__paragraph">StudioME now offers memberships!</p>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'memberships')}
                    className="membership-notify__link"
                    to="/#memberships" exact style={{textDecoration: 'none'}}
                >
                <button className="membership-notify__button">Learn More</button>
                </NavLink>
            
            <button
                onClick={props.closeMembershipNotify}
                aria-label="Close"
                title="Membership Close"
                className="membership-notify__close"
            >
                <CloseIcon className="membership-notify__close-icon" />
            </button >
        </div>
    )
}

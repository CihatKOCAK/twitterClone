
import SideLink from '../components/SideLink';
import {
    HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon, MoreIcon
} from '../icons/Icon'
import twitterLogo from "../images/twitter.svg"
import React, { useState } from "react";
import UserBox from '../components/UserBox';


const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Explore',
        icon: ExploreIcon,
    },
    {
        name: 'Notifications',
        icon: NotificationsIcon,
    },
    {
        name: 'Message',
        icon: MessagesIcon,
    },
    {
        name: 'Bookmarks',
        icon: BookmarksIcon,
    },
    {
        name: 'List',
        icon: ListIcon,
    },
    {
        name: 'Profile',
        icon: ProfileIcon,
    },
    {
        name: 'More',
        icon: MoreIcon,
    },
    
];

const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const handleMenuItemClik = (name) => {
        setActive(name);
    }
    return (
        <div className="flex flex-col justify-between w-72 bg-blue-10 px-2 ">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary-light transform transition-colors duration-200">
                    <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
                </div>

                <nav>
                    <ul>
                       {sideLinks.map(({name,icon}) => (
                           <SideLink key = {name} name = {name} Icon = {icon} active={active} onMenuItemClick = {handleMenuItemClik} />
                       ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>
            </div>
            <UserBox />
        </div>
    )
}

export default Sidebar

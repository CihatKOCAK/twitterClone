import React from 'react'
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon, MoreIcon, PopulerIcon, ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon, ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon, SearchIcon } from '../Icon'

const Sidebar = () => {
    return (
        <div className="w-72 bg-blue-200">
            <h1>Sidebar</h1>
            <HomeIcon />
            <ExploreIcon />
            <NotificationsIcon />
            <MessagesIcon />
            <BookmarksIcon />
            <ListIcon />
            <ProfileIcon />
            <MoreIcon />

            <PopulerIcon className ="w-7 h-7" />
            <ImageIcon className ="w-7 h-7" />
            <GIFIcon className ="w-7 h-7" />
            <PollIcon className ="w-7 h-7" />
            <EmojiIcon className ="w-7 h-7" />
            <ScheduleIcon className ="w-7 h-7" />
            <ReplyIcon className ="w-7 h-7" />
            <ReTweetIcon className ="w-7 h-7" />
            <LikeIcon className ="w-7 h-7" />
            <ShareIcon className ="w-7 h-7" />
            <SearchIcon className ="w-7 h-7" />
        </div>
    )
}

export default Sidebar

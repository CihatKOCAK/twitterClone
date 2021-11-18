import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SearchIcon } from "../icons/Icon"

const Widgets = () => {
    return (
        <aside className="bg-white w-80" >
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5" />
                <input type="text" className=" placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm" placeholder="Search Twitter" name="" id="" />
            </div>

            <div className="mt-5">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'davsanavi'
                    }}
                    options={{
                        height: '1000'
                    }}
                />
            </div>
        </aside>
    )
}

export default Widgets


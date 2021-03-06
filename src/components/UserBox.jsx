import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 dark:hover:bg-gray-600 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img 
            src="https://pbs.twimg.com/profile_images/1457293343990456324/c2yR0CpQ_400x400.jpg"
             alt="Profile"
             className="w-11 h-11 rounded-full" />
            <div className="flex flex-col">
                <span className ="font-bold text-md text-black dark:text-gray-300">
                    Cihat KOÇAK
                </span>
                <span className="text-sm text-gray-dark">
                    @davsanavi
                </span>
            </div>
            <div className="flex space-x-1 ">
                <div className="w-1 h-1 bg-gray-900 dark:bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 dark:bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 dark:bg-gray-300 rounded-full" />
            </div>
        </div>
    )
}

export default UserBox

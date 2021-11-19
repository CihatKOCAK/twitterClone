import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { useState } from 'react/cjs/react.development'
import { SearchIcon } from "../icons/Icon"

const Widgets = () => {

    const [darkMode, setDarkMode] = useState(true);
    const root = window.document.documentElement;
    const setDark = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            root.classList.remove('white');
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
            root.classList.add('white');
        }

    }


    return (
        <aside className="bg-white w-80 dark:bg-black" >
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base
            dark:bg-gray-800 dark:text-gray-50">
                <SearchIcon className="w-5 h-5" />
                <input type="text" className=" placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm" placeholder="Search Twitter" name="" id="" />
            </div>


            <div>
                <button className="flex items-center ml-16 space-x-4 p-3 m-3" onClick={() => setDark()}>
                    {darkMode ? (
                        <svg className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    )}
                    <span className="text-sm cursor-pointer">{darkMode ? "Dark Mode" : (<span className="text-white">White Mode </span>)}</span>
                </button>
            </div>

            <div className="mt-5 ">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'davsanavi'
                    }}
                    options={darkMode? {
                        height: '1000',
                        theme:'white'
                    } : {
                        height: '1000',
                        theme:'dark'
                    }}
                />
            </div>
        </aside>
    )
}

export default Widgets


import React from 'react'

function Container({ children }) {
    return (
        <div className="dark:bg-black">
            <div className="flex min-h-screen max-w-7xl mx-auto  ">
                {children}
            </div>
        </div>
    )
}

export default Container

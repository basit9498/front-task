import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Index = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <Header
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <NavBar
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            {children}
            <Footer />
        </>
    )
}

export default Index
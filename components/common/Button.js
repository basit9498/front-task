import React from 'react'

const Button = ({ text, className }) => {
    return (
        <button className={`${className} h-11 rounded-full font-semibold px-4`}>{text}</button>
    )
}

export default Button
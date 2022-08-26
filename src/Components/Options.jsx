import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Options({dark}) {
    const [isActive, setActive] = React.useState(false);
    let toggle = () => {
        setActive(!isActive);
    }
    console.log(dark)
    return (
        <ul className={dark === true ?  "dark filters__content" : "filters__content"}>
            <NavLink to='/WebPort' className={({ isActive }) => (isActive ? 'filters__button tabActive' : 'filters__button')}>
                Projects
            </NavLink>
            <NavLink to='/skills' className={({ isActive }) => (isActive ? 'filters__button tabActive' : 'filters__button')}>
                Skills
            </NavLink>
        </ul>
    )
}

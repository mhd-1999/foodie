
import clsx from 'clsx'
import styles from './Header.module.css'
import { useEffect, useState } from 'react';
const lists = [{
    id: 1,
    name: "Home",
},
{
    id: 2,
    name: "About us"
},
{
    id: 3,
    name: "Menu"
},
{
    id: 4,
    name: "Reservation"
},
{
    id: 5,
    name: "Contacts"
}
]
function Header() {
    const [isShrunk, setShrunk] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
                    return true
                }
                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false
                }
                return isShrunk
            })

        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return <header className={clsx(styles.container, 'd-flex', { 'activeH': isShrunk })}>
        <div className={clsx(styles.logo, { 'd': isShrunk })} >
            <img src="//jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png" alt="" />

        </div>
        <div className={clsx(styles.logo, { 'd': !isShrunk })} >
            <img src='//jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/C-_Users_Kolberga_Desktop_logo_dark.png'></img>

        </div>

        <div className={clsx(styles.menu)}>
            <ul className='d-flex'>
                {lists.map(list => (
                    <li key={list.id} className={clsx(`{list.name}`)}>
                        {list.name}
                    </li>
                ))}
            </ul>
        </div>
    </header >;
}

export default Header;
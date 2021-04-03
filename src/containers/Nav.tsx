import {Link, LinkProps} from "react-router-dom";
import styles from './Nav.module.css'
import menu from '../material/menu.svg';
import {useState} from "react";
import * as React from "react";

function Nav(props: any) {
    const [opened, setOpened] = useState(false);

    function toggleMenu() {
        setOpened(!opened);
    }

    function closeMenu() {
        setOpened(false);
    }

    function MenuLink(props: LinkProps) {
        return <Link {...props} onClick={closeMenu} />
    }

    return (
        <nav className={opened ? styles.nav : styles.nav + ' ' + styles.navCollapsed}>
            <MenuLink className={styles.brandLink} to={'/'}>
                <section className={styles.brand}>
                    {
                        props.logoSrc
                            ? <img height={'auto'} src={props.logoSrc} alt={props.logo}/>
                            : undefined
                    }
                    {
                        props.brandName
                            ? <div className={styles.brandName}>{props.brandName}</div>
                            : undefined
                    }
                </section>
            </MenuLink>
            <span className={styles.divider}/>
            <MenuLink to={'/'}>
                <div className={styles.navLink}>
                    Home
                </div>
            </MenuLink>
            <MenuLink to={'/register'}>
                <div className={styles.navLink}>
                    Register
                </div>
            </MenuLink>
            <MenuLink to={'/about'}>
                <div className={styles.navLink}>
                    About
                </div>
            </MenuLink>
            <button className={styles.menuBtn} onClick={toggleMenu}>
                <img src={menu} alt={'menu'}/>
            </button>
        </nav>
    );
}

export default Nav;

import React from "react";
import clsx from "clsx";
import styles from "./Footer.module.css"
function Footer() {
    return <footer className="d-flex">
        <div className={clsx(styles.logo)}>
            <img src="//jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png" />
        </div>
        <div className={clsx(styles.name)}>
            <p> Create by <span>@Sniim</span></p>
        </div>
        <div className={clsx(styles.icon, 'd-flex')}>
            <a href="https://github.com/mhd-1999">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/s.niim94">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/s.niim/">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    </footer>;
}

export default Footer;
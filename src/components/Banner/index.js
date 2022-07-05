import styles from './Banner.module.css'
import clsx from 'clsx'
import { useRef } from 'react';
function Banner() {
    const bannerRef = useRef();
    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        bannerRef.current.style.backgroundPositionY = offset * 0.7 + 'px';
    })
    return <div ref={bannerRef} className={clsx(styles.banner)}><div className={clsx(styles.content)}>
        <p>Premium</p>
        <p>Quality</p>
        <h1>Restaurant </h1>
        <h1>& Dishes</h1>
    </div>
        <div className={clsx(styles.scrollDown)}>
            <div className={clsx(styles.mouse)}>
                <span></span>
            </div>
            <div className={clsx(styles.arrow)}>
                <span></span>
            </div>
        </div>
    </div>;
}

export default Banner;
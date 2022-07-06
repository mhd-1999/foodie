import clsx from "clsx"
import styles from './Welcome.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const items = [{
    id: 1,
    logo: "W",
    title: "Welcome to Jevelin Restauran",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices. Pellentesque bibendum condimentum neque, nec iaculis augue ultrices ac. Fusce interdum viverra aliquet.",
    btn: "ABOUT US",
    img: "https://cdn.jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/brooke-lark-96398.jpg"
}, {
    id: 2,
    logo: "&",
    title: "Chef & Owner Kate Fuson and Her Husband Jack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices. Pellentesque bibendum",
    btn: "READ MORE",
    img: "https://cdn.jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/monika-grabkowska-323579.jpg"
}]
function Welcome() {
    const imgRef = useRef([]);
    imgRef.current = [];
    const textRef = useRef([]);
    textRef.current = [];
    const addImgToRefs = el => {
        if (el && !imgRef.current.includes(el)) {
            imgRef.current.push(el);
        }
    }
    const addTextToRefs = el => {
        if (el && !textRef.current.includes(el)) {
            textRef.current.push(el);
        }
    }
    useEffect(() => {
        imgRef.current.forEach((el, idx) => {
            gsap.fromTo((el), {
                x: -500,
                opacity: 0,
                autoAlpha: 0,
                // scale: 0,
            }, {
                x: 0,
                duration: 2,
                opacity: 1,
                autoAlpha: 1,
                // scale: 1,
                ease: 'slow',
                scrollTrigger: {
                    id: `item-${idx + 1}`,
                    trigger: el,
                    start: 'top 70%',
                    end: 'top 110%',
                }
            })
        })
        textRef.current.forEach((el, idx) => {
            gsap.fromTo((el), {
                opacity: 0,
                autoAlpha: 0,
            }, {
                duration: 7,
                opacity: 1,
                autoAlpha: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    id: `item-${idx + 1}`,
                    trigger: el,
                    start: 'top 140%',
                    end: 'top 150%',
                    toggleActions: 'play none none reverse'
                }
            })
        })
    })
    return <div className={clsx(styles.wrapper)}>
        {items.map(item => (
            <div className={clsx(styles.item, 'd-flex')} key={item.id}>
                <div className={clsx(styles.itemImg)} style={{ backgroundImage: `url(${item.img})` }} ref={addImgToRefs}>
                </div>
                <div className={clsx(styles.itemText)} ref={addTextToRefs}>
                    <div className={clsx(styles.content)}>
                        <span>{item.logo}</span>
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <a href="#">{item.btn}</a>
                    </div>
                </div>
            </div>
        ))}
    </div>;
}

export default Welcome;
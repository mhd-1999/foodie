import clsx from "clsx";
import styles from "./OurTeam.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);
const teams = [{
    id: 1,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/michael-dam-258165.png",
    name: "Carol William",
    lvl: "Manager",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices."
},
{
    id: 2,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/michael-dam-2581653.png",
    name: "Peter Lauren",
    lvl: "BAR DIRECTOR",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
},
{
    id: 3,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/michael-dam-2581651.png",
    name: "Kate Fuson",
    lvl: "Head Chef ",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
},
{
    id: 4,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/michael-dam-2581652.png",
    name: "Jack Fuson",
    lvl: "WINE DIRECTOR",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
}]
function OurTeam() {
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
                scale: 0
            }, {
                duration: 2,
                scale: 1,
                ease: 'slow',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                    end: 'top 100%',
                }
            })
        })
        textRef.current.forEach((el, idx) => {
            gsap.fromTo((el), {
                opacity: 0,
            }, {
                duration: 4,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                    end: 'top 100%',
                    toggleActions: 'play none none reverse'
                }
            })
        })
    })
    return <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.title)}>
            <h1>Our Team</h1>
            <div className={clsx(styles.titleS)}>
                <span>is the best</span>
            </div>
        </div>
        <div className={clsx(styles.content, 'd-flex')}>
            {teams.map(team => (
                <div className={clsx(styles.contentItem)} key={team.id}>
                    <img src={team.img} alt="" ref={addImgToRefs} />
                    <div ref={addTextToRefs}>
                        <h3>{team.name}</h3>
                        <h1>{team.lvl}</h1>
                        <p>{team.dis}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>;
}

export default OurTeam;

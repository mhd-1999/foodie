import clsx from "clsx";
import { useRef } from "react";
import styles from './About.module.css';
const cats = [{
    id: 1,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/picture3.png",
    title: "Always",
    title1: " Fresh",
    text: "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat."
},
{
    id: 2,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/picture2.png",
    title: "Eco",
    title1: " Products",
    text: "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat."
},
{
    id: 3,
    img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/picture1.png",
    title: "Healthy",
    title1: " Deserts",
    text: "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat."
}
]
function About() {
    return <div className={clsx(styles.wrapper)} id="About us">
        <div className={clsx(styles.title)}>
            <h1>What we can offer</h1>
            <div className={clsx(styles.titleS)}>
                <span>from our hearts</span>
            </div>
        </div>
        <div className={clsx(styles.content, 'd-flex')}>
            {cats.map(cat => (
                <div className={clsx(styles.contentItem)} key={cat.id}>
                    <img src={cat.img} alt="" />
                    <h3><span>{cat.title}</span> {cat.title1}</h3>
                    <p>{cat.text}</p>
                </div>
            ))}

        </div>
    </div>;
}

export default About;
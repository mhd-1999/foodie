import clsx from "clsx";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Menu.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const foods = [{
    id: 1,
    name: "Proin gravida gravida",
    price: "$10.50",
    dis: "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et."
}, {
    id: 2,
    name: "Proin gravida gravida",
    price: "$10.50",
    dis: "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et."
}, {
    id: 3,
    name: "Proin gravida gravida",
    price: "$10.50",
    dis: "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et."
}]
const fadeImgs = [{
    id: 1,
    url: "//cdn.jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/andrew-dong-387384.png",
    dis: "Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus. Fusce volutpat, dolor in suscipit pharetra.",
    name: "Katey Gallardo",
    lvl: "Proud client / CEO ",

}, {
    id: 2,
    url: "//cdn.jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/03/matheus-ferrero-288182-unsplash2.png",
    dis: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in velit vehicula, iaculis tortor eu, placerat elit. Aenean iaculis nulla nec condimentum pulvinar.",
    name: "Brandon",
    lvl: "Wolf"
}
]
function Menu() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return <div className={clsx(styles.wrapper)} id="Menu">
        <div className={clsx(styles.imgTop)}>
        </div>
        <div className={clsx(styles.imgBot)}>
        </div>
        <div className={clsx(styles.menu)}>
            <div className={clsx(styles.title)}>
                {/* <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/17/2018/01/Layer-816.png" alt="" /> */}
                <h1>Enjoy The Best Cuisine</h1>
                <div className={clsx(styles.titleS)}>
                    <span>from our hearts</span>
                </div>
            </div>
            <div className={clsx(styles.content, 'd-flex')}>
                <div className={clsx(styles.contentL)}>
                    <h3 className={clsx(styles.cat)}>Starters</h3>
                    {foods.map((food, idx) => (
                        <div className={clsx(styles.contentItem)} key={idx}>
                            <div className={clsx(styles.top, 'd-flex')}>
                                <p>{food.name}</p>
                                <p>{food.price}</p>
                            </div>
                            <div className={clsx(styles.bot)}>
                                <p>{food.dis}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={clsx(styles.contentR)}>
                    <h3 className={clsx(styles.cat)}>Mains</h3>
                    {foods.map((food, idx) => (
                        <div className={clsx(styles.contentItem)} key={idx}>
                            <div className={clsx(styles.top, 'd-flex')}>
                                <p>{food.name}</p>
                                <p>{food.price}</p>
                            </div>
                            <div className={clsx(styles.bot)}>
                                <p>{food.dis}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href="#">view full menu</a>
        </div>
        <div className={clsx(styles.customer)}>
            <div className={clsx(styles.title)}>
                <h1>Our Team</h1>
                <div className={clsx(styles.titleS)}>
                    <span>is the best</span>
                </div>
            </div>
            <div className={clsx(styles.contentC)}>
                <div>
                    <Carousel fade activeIndex={index} onSelect={handleSelect}>
                        {fadeImgs.map((fadeImg, idx) => (
                            <Carousel.Item key={idx}>
                                <div className={clsx(styles.img)}>
                                    <img src={fadeImg.url} alt="" />
                                </div>
                                <div className={clsx(styles.text)}>
                                    <p>{fadeImg.dis}</p>
                                    <h3>{fadeImg.name}</h3>
                                    <h4>{fadeImg.lvl}</h4>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </div>;
}

export default Menu;
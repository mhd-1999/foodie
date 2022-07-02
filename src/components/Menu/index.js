import clsx from "clsx";
import styles from "./Menu.module.css";
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
function Menu() {
    return <div className={clsx(styles.wrapper)}>
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
                    {foods.map(food => (
                        <div className={clsx(styles.contentItem)} key={food.id}>
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
                    {foods.map(food => (
                        <div className={clsx(styles.contentItem)} key={food.id}>
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
        </div>
    </div>;
}

export default Menu;
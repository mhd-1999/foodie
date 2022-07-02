import clsx from "clsx"
import styles from './Welcome.module.css';
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

    return <div className={clsx(styles.wrapper)}>
        {items.map(item => (
            <div className={clsx(styles.item, 'd-flex')} key={item.id}>
                <div className={clsx(styles.itemImg)} style={{ backgroundImage: `url(${item.img})` }}>
                </div>
                <div className={clsx(styles.itemText)}>
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
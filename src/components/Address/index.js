import clsx from "clsx";
import styles from './Address.module.css';

const infors = [{
    id: 1,
    left: "Monday-Thursday",
    right: "11:00-21:00"
},
{
    id: 2,
    left: "Friday-Saturday",
    right: "11:00-21:00",
},
{
    id: 3,
    left: "Sunday",
    right: "Closed"
}]
const adds = [{
    id: 1,
    add: "Postal Address:",
    name: "Mánatún 35 105 Reykjavík"
}, {
    id: 2,
    add: "Restaurant:",
    name: "Grafarvogur 69, ON K2P 0G1, Reykjavík"
}, {
    id: 3,
    add: "Business Phone:",
    name: "+1 844 295 0715"
}]
function Address() {
    return <div className={clsx(styles.wrapper, 'd-flex')} id="Contacts">
        <div className={clsx(styles.contentLeft)}>
            <div className={clsx(styles.title)}>
                <p>How to Find</p>
                <p>& Contact Us</p>
            </div>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.top)}>
                    {infors.map(infor => (
                        <div className={clsx(styles.item, 'd-flex')} key={infor.id}>
                            <p>{infor.left}</p>
                            <p>{infor.right}</p>
                        </div>
                    ))}
                </div>
                <div className={clsx(styles.bot)}>
                    {adds.map(add => (
                        <div className={clsx(styles.item, 'd-flex', 'flex-wrap')} key={add.id}>
                            <p>{add.add}</p>
                            <p>{add.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className={clsx(styles.contentRight)}>
            <iframe src="https://my.atlistmaps.com/map/6fadddb5-c2da-4ff6-9c6c-bc7d0e17ad82?share=true" allow="geolocation" ></iframe>
        </div>
    </div>;
}

export default Address;
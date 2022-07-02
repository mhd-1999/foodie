import clsx from "clsx";
import styles from "./OurTeam.module.css"
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
                    <img src={team.img} alt="" />
                    <h3>{team.name}</h3>
                    <h1>{team.lvl}</h1>
                    <p>{team.dis}</p>
                </div>
            ))}
        </div>
    </div>;
}

export default OurTeam;
import clsx from "clsx";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
const lists = [
  {
    id: 1,
    name: "Home",
    position: "1000"
  },
  {
    id: 2,
    name: "About us",
    position: "1200"
  },
  {
    id: 3,
    name: "Menu",
    position: "1300"
  },
  {
    id: 4,
    name: "Reservation",
    position: "1400"
  },
  {
    id: 5,
    name: "Contacts",
    position: "1500"
  },
];
function Header() {
  const [isShrunk, setShrunk] = useState(false);
  const [isButton, setButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }
        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return isShrunk;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setButton((isButton) => {
      if (!isButton) {
        return true;
      }
      if (isButton) {
        return false;
      }
    });
  };
  // const handleClickPage = () => {
  //   window.scrollTo({
  //     top: 1000,
  //     behavior: "smooth"
  //   })
  // }
  return (
    <header>
      <div className={clsx(styles.header, "d-flex", { activeH: isShrunk })}>
        <div className={clsx(styles.logo, { d: isShrunk })}>
          <img
            src="//jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png"
            alt=""
          />
        </div>
        <div className={clsx(styles.logo, { d: !isShrunk })}>
          <img src="//jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/C-_Users_Kolberga_Desktop_logo_dark.png"></img>
        </div>

        <div className={clsx(styles.nav)}>
          <ul className="d-flex">
            {lists.map((list) => (
              <li key={list.id} className={clsx(`${list.name}`)} >
                <a href={`#${list.name}`}>{list.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={clsx(styles.navM)}>
          <div className={clsx(styles.btn)}>
            <input onClick={handleClick} type="checkbox" id="active" />
            <label
              htmlFor="active"
              className={clsx(styles.menuBtn, { activeBtn: isShrunk })}
            >
              <span></span>
            </label>
          </div>
          <div className={clsx(styles.menu, { activeW: isButton }, { activeH: isShrunk })}>
            <ul>
              {lists.map((list) => (
                <li key={list.id} className={clsx(`${list.name}`)}>
                  <a href={`#${list.name}`}>{list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;

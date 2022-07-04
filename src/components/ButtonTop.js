import { useEffect, useState } from "react";
const buttonStyle = {
    position: "fixed",
    width: "50px",
    height: "50px",
    right: "20px",
    bottom: "20px",
    borderRadius: "50%",
    zIndex: 99,
    background: "white",
    boxShadow: "0px 3px 13px 1px rgb(0 0 0 / 12%)",
    transition: ".5 all ease",
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer"
}
const iconStyle = {
    lineHeight: "50px",
    color: "#e6e6e6"
}
function ButtonTop() {
    const [showButtonTop, setShowButtonTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowButtonTop(window.scrollY >= window.innerHeight)
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return <div>
        {showButtonTop && (
            <div style={buttonStyle}
                onClick={handleScrollTop}
            ><i style={iconStyle} class="fas fa-angle-up"></i></div>
        )}
    </div>;
}

export default ButtonTop;
import {FC} from "react";
// @ts-ignore
import style from "./Header.module.css"
import {useNavigate} from "react-router-dom";
// @ts-ignore
import home from "../../img/home.png"

const Header: FC = () => {

    const navigate = useNavigate()

    const homeButtonHandler = () => {
        navigate("/")
    }

    return (
        <div className={style.header_wrapper}>

            <span onClick={homeButtonHandler}>
                <img src={home} alt={"home"} className={style.button_home}/>
            </span>

            <span className={style.title}>
                Title
            </span>
        </div>
    )
}

export default Header
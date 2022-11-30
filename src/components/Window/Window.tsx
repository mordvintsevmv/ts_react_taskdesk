import React, {FC, PropsWithChildren} from "react";
// @ts-ignore
import style from "./Window.module.css"

// @ts-ignore
import close_button from "../../img/close.png"

interface WindowProps {
    setWindow: React.Dispatch<React.SetStateAction<boolean>>,
}

const Window: FC<PropsWithChildren<WindowProps>> = ({setWindow, children}) => {

    const closeClickHandler = () => {
        setWindow(false)
    }

    return (
        <>

            <div className={style.addwindow_blur} onClick={closeClickHandler}>

            </div>

            <div className={style.window}>

                <div className={style.button_close} onClick={closeClickHandler}>
                    <img src={close_button} alt={"close"}/>
                </div>

                <div className={style.content}>
                    {children}
                </div>


            </div>
        </>

    )
}

export default Window
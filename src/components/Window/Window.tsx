import React, {FC, PropsWithChildren} from "react";
// @ts-ignore
import style from "./Window.module.css"

interface WindowProps {
    setWindow: React.Dispatch<React.SetStateAction<boolean>>,
}

const Window: FC<PropsWithChildren<WindowProps>> = ({setWindow, children}) => {

    const closeClickHandler = () => {
        setWindow(false)
    }

    return (
        <>
            <div className={style.addwindow_wrapper} onClick={closeClickHandler}>

            </div>

            <div className={style.window}>

                <div className={style.button_close} onClick={closeClickHandler}>
                    x
                </div>

                {children}

            </div>
        </>

    )
}

export default Window
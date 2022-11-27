import {FC} from "react";
// @ts-ignore
import style from "./AddWindow.module.css"
import AddForm from "./AddForm";

interface AddWindowProps {
    setAddMode: any
}

const AddWindow: FC<AddWindowProps> = ({setAddMode}) => {

    const closeClickHandler = () => {
        setAddMode(false)
    }

    return (
        <>
            <div className={style.addwindow_wrapper} onClick={closeClickHandler}>

            </div>

            <div className={style.window}>

                <div className={style.button_close} onClick={closeClickHandler}>
                    x
                </div>

                <AddForm />

            </div>
        </>

    )
}

export default AddWindow
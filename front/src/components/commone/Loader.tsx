import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import style from "./loader.module.css"

const  CircularUnderLoad = () => {

    return  (
        <div className={style.loader}>
            <div>
                <CircularProgress disableShrink={false}/>
            </div>

        </div>

    )


}

export default CircularUnderLoad;
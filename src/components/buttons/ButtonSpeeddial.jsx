import React, {useRef, useState} from 'react';
import {Toast} from "primereact/toast";
import {SpeedDial} from "primereact/speeddial";
import {Speeddial} from "../styled/ButtonsStyled.js";

const ButtonSpeeddial = ({itemsSpeed}) => {
    const toast = useRef(null);

    return (
        <div className="card relative">
            <Speeddial>
                <Toast ref={toast} />
                <div className="absolute bottom-0 right-0">
                    <SpeedDial model={itemsSpeed} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                </div>
            </Speeddial>
        </div>
    )
};

export default ButtonSpeeddial;
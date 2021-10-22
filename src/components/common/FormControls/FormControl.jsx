import React from "react";
import s from "./FormControl.module.css";

export const LoginFormControl = Element => ({ input, meta, ...props }) => {
    return (
        <div className={s.content}>
            <div className={s.formControl + " " + ((meta.touched && meta.error) ? s.Error : "")}>
                <Element {...input} placeholder={props.label} type={props.type} />
            </div>
            <div>
                {meta.touched && (!meta.valid && <span>{meta.error}</span>)}
            </div>
        </div>
    );
}

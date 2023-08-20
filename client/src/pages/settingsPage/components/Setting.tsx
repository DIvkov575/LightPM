import React, {useEffect, useState} from "react";

interface SettingProp {
    settingName: string,
    value: string,
}
export const Setting: React.FC<SettingProp> = (props) => {
    const [checkState, setCheckState] = useState(false);
    const toggleState = () => { setCheckState((prevState) => !prevState); };
    useEffect(() => { console.log('checkState updated:', checkState); }, [checkState]);

    return (
        <div style={{ display: 'flex' }}>
            <input type="checkbox" checked={checkState} onChange={toggleState} />
            <h3> {props.settingName}:  </h3>
            <div style={{width:"200px", overflow:"hidden", border: "solid"}}><h3>{checkState ? props.value : "****"}</h3></div>
        </div>
    );
};

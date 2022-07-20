function Mode({mode, changeMode}) {
    let changeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"
    
    const buttonHandler = () => {
        const newValue = mode.current === "day" ? "night" : "day"
        changeMode({current: newValue})
    }

    return <button onClick={buttonHandler}>{ changeModeText }</button>
}


export default Mode;

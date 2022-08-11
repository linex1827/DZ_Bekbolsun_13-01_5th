import React from 'react'

export default function Mode({mode,changeMode}) {
    let changeModetext = mode.current === "day" ? 'ночной режим' : 'дневной режим'
    
    const buttonHandler = () => {
        const newValue = mode.current === "day" ? "night" : "day"
        changeMode({current: newValue})
    }

    return (
    <div>
      <button onClick={buttonHandler}>{changeModetext}</button>
    </div>
  )
}

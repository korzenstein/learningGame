import racoonTalk from '../textData/racoonTalk'
import {useState} from 'react'

const RacoonText = () => {

    const [loadRacoon, setLoadRacoon] = useState(true)
    return (
        // <div className="inner racoonText">
        <div className="racoonBubble ">
            {
                loadRacoon ?
                <p>{racoonTalk.main.intro}</p>
                :null
            }
        </div>
        // </div>
    )
}

export default RacoonText 
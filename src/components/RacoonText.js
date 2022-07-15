import racoonTalk from '../textData/racoonTalk'
import {useState} from 'react'

const RacoonText = () => {

    const [loadRacoon, setLoadRacoon] = useState(true)
    return (
        <div className="racoonTextContainer inner">
        <div className="racoonText">
            {
                loadRacoon ?
                <p>{racoonTalk.main.intro}</p>
                :null
            }
        </div>
     </div>
    )
}

export default RacoonText 
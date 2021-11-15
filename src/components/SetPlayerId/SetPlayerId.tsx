import { useState } from "react";
import "./SetPlayerId.css";
import { useDispatch } from 'react-redux'
import { teamActionCreators } from "../../store/reducers/team/teamActions";

const SetPlayerId = () => {
    const [playerID, setPlayerId] = useState('')
    
    const dispatch = useDispatch()


    const submitHandler = (event: any) => {
        event.preventDefault()
        console.log(Number(playerID))
        dispatch(teamActionCreators.getTeamByTeamId(Number(playerID)))
        setPlayerId('')
    }

    const onChangeHandler = (event: any) => {
        const value = event.target.value
        setPlayerId(value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="ChooseTeam-div">
                <span className='ChooseTeam-label'>PLAYER ID </span>
                <input 
                        className='ChooseTeam-input' 
                        type="text" 
                        onChange={onChangeHandler}
                        value={playerID}
                />
                <button 
                    className="ChooseTeam-submitBtn" 
                    type='submit'
                >
                    CHOOSE
                </button>  
            </div>
            
        </form>
    )
}

// const  mapDispatchToProps  = {
//     chooseTeam
// }
  
export default SetPlayerId
// export default connect(null, mapDispatchToProps)(SetTeamId)
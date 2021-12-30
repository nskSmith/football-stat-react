import { useState } from "react";
import "./SetTeamId.css";
import { useDispatch } from 'react-redux'
import { teamActionCreators } from "../../store/reducers/team/teamActions";

const SetTeamId = () => {
    const [teamID, setTeamId] = useState('')
    
    const dispatch = useDispatch()


    const submitHandler = (event: any) => {
        event.preventDefault()
        console.log(Number(teamID))
        dispatch(teamActionCreators.getTeamByTeamId(Number(teamID)))
        setTeamId('')
    }

    const onChangeHandler = (event: any) => {
        const value = event.target.value
        setTeamId(value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="ChooseTeam-div">
                <span className='ChooseTeam-label'>TEAM ID </span>
                <input 
                        className='ChooseTeam-input' 
                        type="text" 
                        onChange={onChangeHandler}
                        value={teamID}
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
  
export default SetTeamId
// export default connect(null, mapDispatchToProps)(SetTeamId)
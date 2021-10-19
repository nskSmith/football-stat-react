import { throws } from "assert";
import React, { useEffect, useState } from "react";
import "./ChooseTeam.css";
import { connect } from 'react-redux'
import { chooseTeam } from "../../store/actions/actions";

const ChooseTeam = ({chooseTeam} : any) => {
    const [teamID, setTeamId] = useState('')
    
    const submitHandler = (event: any) => {
        event.preventDefault()
        chooseTeam(Number(teamID))
        setTeamId('')
    }

    const onChangeHandler = (event: any) => {
        const value = event.target.value
        setTeamId(value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="ChooseTeam-div">
                <label className='ChooseTeam-label'>TEAM ID 
                    <input 
                        className='ChooseTeam-input' 
                        type="text" 
                        onChange={onChangeHandler}
                        value={teamID}
                    />
                </label>
                
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

const  mapDispatchToProps  = {
    chooseTeam
}
  
export default connect(null, mapDispatchToProps)(ChooseTeam)
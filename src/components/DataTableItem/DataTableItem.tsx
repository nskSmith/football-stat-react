import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { playerStatsActionCreators } from "../../store/reducers/playerStats/playerStatsActions";
import { POSITION } from "../../types/types";
import "./DataTableItem.css";

function positionIs(num: number): String {
  return POSITION[num - 1];
}

const DataTableItem = (props: {item: {position_id: number, number: number, player: any, player_id: number}}) => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  
  const onClickHandler = (event:any, player_id: number) => {
    event.preventDefault()
    dispatch(playerStatsActionCreators.getPlayerStatsByPlayerId(Number(player_id)))
    navigate('/player-stats');
  }

  return (
    <div className="DataTableItem-player" onClick={(event) => onClickHandler(event,props.item.player_id)}>
      <p className='DataTableItem-position'>{positionIs(props.item.position_id)}</p>
      <p className='DataTableItem-number'><strong>{props.item.number}</strong></p>
      <p className='DataTableItem-name'>{props.item.player.data.fullname}</p>
      <p className='DataTableItem-player-id'>{props.item.player_id}</p>
    </div>
  )            
}

export default DataTableItem

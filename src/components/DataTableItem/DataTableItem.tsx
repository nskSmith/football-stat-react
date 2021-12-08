import { POSITION } from "../../types/types";
import "./DataTableItem.css";

function positionIs(num: number): String {
    return POSITION[num - 1];
  }

const DataTableItem = (props: {item: {position_id: number, number: number, player: any, player_id: number}}) => {
    return (
      <div className="DataTableItem-player">
        <p className='DataTableItem-position'>{positionIs(props.item.position_id)}</p>
        <p className='DataTableItem-number'><strong>{props.item.number}</strong></p>
        <p className='DataTableItem-name'>{props.item.player.data.fullname}</p>
        <p className='DataTableItem-player-id'>{props.item.player_id}</p>
      </div>
  )            
}

export default DataTableItem

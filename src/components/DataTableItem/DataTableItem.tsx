import { POSITION } from "../../types/types";
import "./DataTableItem.css";

function positionIs(num: number): String {
    return POSITION[num - 1];
  }

const DataTableItem = (props: {item: {position_id: number, number: number, player: any}}) => {
    return (
      <p className="DataTableItem-player">
        <p className='DataTableItem-position'>{positionIs(props.item.position_id)}</p>
        <p className='DataTableItem-number'><strong>{props.item.number}</strong></p>
        <p className='DataTableItem-name'>{props.item.player.data.fullname}</p>
      </p>
  )            
}

export default DataTableItem

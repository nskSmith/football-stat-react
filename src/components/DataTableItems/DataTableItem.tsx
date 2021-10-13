import { throws } from "assert";
import React from "react";
import "./DataTableItem.css";

export enum POSITION {
  "GK",
  "DF",
  "MF",
  "FD",
}

function positionIs(num: number): String {
    return POSITION[num - 1];
  }

export function DataTableItem(props: {item: {position_id: number, number: number, player: any}}) {
  console.log(props.item);
    return (
        <p className="DataTableItem-player">
            <p className='DataTableItem-position'>{positionIs(props.item.position_id)}</p>
            <p className='DataTableItem-number'><strong>{props.item.number}</strong></p>
            <p className='DataTableItem-name'>{props.item.player.data.fullname}</p>
        </p>
  )            
}

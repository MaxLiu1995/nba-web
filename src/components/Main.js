import React from 'react';
import {ShotChart} from "./ShotChart";

export class Main extends React.Component{
    render(){
        return(
            <div>
                <ShotChart playerId={203500} />
            </div>

        );
    }
}
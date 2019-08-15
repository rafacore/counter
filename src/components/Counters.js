import React, {Component} from 'react';
import { catchClause } from '@babel/types';
import Counter from './Counter';

class Counters extends Component {
 

    render(){
        // destructoring
        const{onReset, counters, onDelete, onIncrement} = this.props;
        return(
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter =>( 
            <Counter 
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                counter={counter}
                // value={counter.value}
                // id={counter.id}
                
             />
             ))}
        </div>
        );
    }
}
export default Counters;
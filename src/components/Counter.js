import React, { useState, Component } from 'react';

// const Counter = () => {

//   let [count, setCount] = useState(0)
//   const tag = [
//     'tag1',
//     'tag2',
//     'tag3',
//     'tag4'
//   ]

//   const handleIncrement = () => {
//     setCount(count + 1)
//   }

//   const handleDecrement = () => {
//     setCount(count - 1)
//   }

//   const getBadgeClasses = () => {
//     return count === 0 ? "warning" : "primary";
//   }

//   return (
//     <>
//       <span className={`badge m-2 badge-${getBadgeClasses}`}>{count > 0 ? count : 'Zero'}</span>
//         <button onClick={handleIncrement} className=" btn btn-secondary btn-sm">Increment</button>
//         <button onClick={handleDecrement} className=" btn btn-secondary btn-sm">Decrement</button> 
//         <ul>{tag.map( tag => <li key={tag}>{tag}</li>)}</ul>
//     </>
//   )

// }

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  // // count: 0,
  //   //tags:['ta1','ta2','ta3','ta4']
    
  // };
//  handleIncrement = (product) => {
//    console.log("increment clicked", product, this.state.value);
//    this.setState({ value: this.state.value + 1});

//  };
//  doHandleIncrement = () => {
//    console.log();
//    this.handleIncrement({id: 1});

//  };
//  handleDecrement = () =>{
//    console.log("decrement clicked", this);
//    this.setState({ count: this.state.count -1 })
//  };
 
  render() { 
    
    return ( 
    <div>
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button
                 onClick={() => this.props.onIncrement(this.props.counter)}
                 className=" btn btn-secondary btn-sm">Increment</button> 
                {/* <button onClick={this.handleDecrement({id: this.state.count})} classNam="btn btn-secondary btn-sm ">Decrement</button> */}
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2" >Delete</button>
                {/* <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul> */}
           </div>
                 );
  }
  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {value} = this.props.counter;
    
    return value >=0 ? value : "Zero";
  }

}


 


// function Counter() {
//   return (
//     <div className="App">
//     rafa
//     </div>
//   );
// }

export default Counter;

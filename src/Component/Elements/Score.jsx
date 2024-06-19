import React from "react";

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    };
    render(){
          return(
            <div className="flex items-center">
                <h1 >{this.state.count}</h1>
                <button className="flex bg-black text-white p-3" 
                onClick={() => this.setState({ count: this.state.count - 1})}
                    >
                    -
                    </button>
            </div>
           
        )
    } 
};

export default Score;
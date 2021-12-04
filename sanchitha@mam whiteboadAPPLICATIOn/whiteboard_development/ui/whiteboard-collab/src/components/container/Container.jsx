import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <div className="container">
                <h3 className="name-midile">Development of a Distributed whiteboard Application</h3>
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp;
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)} />
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp;
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 2</option>
                            <option> 4 </option>
                            <option>  6</option>
                            <option> 8 </option>
                            <option>  10</option>
                            <option> 12 </option>
                            <option> 14 </option>
                            <option> 16 </option>
                            <option>  18</option>
                            <option>  20</option>
                            <option>  22</option>
                            <option>  24</option>
                            <option> 26</option>
                            <option>  28</option>
                            <option>  30</option>
                            <option>  32</option>
                            <option>  34</option>
                            <option>  36</option>
                            <option> 38</option>
                            <option>  40</option>
                            <option>  42</option>
                            <option>  44</option>
                            <option> 48</option>
                            <option>  48</option>
                        </select>
                    </div>



                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>

            </div>

        )
    }
}


export default Container
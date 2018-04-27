import React, { Component } from 'react';

class Theme extends Component {
    render(){
        return (
            <div>
                <h1>Themer</h1>
                <div style={ padded }>
                Primary color
                <select>
                    <option value="black">Black</option>
                    <option value="gray">Gray</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                </select>
                </div>
                <div style={ padded }>
                    Secondary color
                    <select>
                        <option value="black">Black</option>
                        <option value="gray">Gray</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                    </select>
                </div>
            </div>
        );
    }
}

const padded = {
    padding: '4px'
};

export default Theme
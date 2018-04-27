import React, { Component } from 'react';

import ThemeContext from '../ThemeContext';

class Theme extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ primaryColor, secondaryColor, changePrimaryColor, changeSecondaryColor }) => (
                    <div>
                        <h1 style={{ color: primaryColor }}>Themer</h1>
                        <div style={{ padding: '4px', color: secondaryColor }}>
                            Primary color
                            <select defaultValue={primaryColor} onChange={changePrimaryColor}>
                                <option value="black">Black</option>
                                <option value="gray">Gray</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="purple">Purple</option>
                            </select>
                        </div>
                        <div style={{ padding: '4px', color: secondaryColor }}>
                            Secondary color
                            <select defaultValue={secondaryColor} onChange={changeSecondaryColor}>
                                <option value="black">Black</option>
                                <option value="gray">Gray</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="purple">Purple</option>
                            </select>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Theme
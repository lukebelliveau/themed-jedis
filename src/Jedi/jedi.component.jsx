import React, { Component } from 'react';
import { Link } from 'react-router';

import ThemeContext from '../ThemeContext';

class Jedi extends Component {
    render() {
        const jedis = this.props.route.data;
        const jediNode = jedis.map((jedi) => {
            return (
                <Link
                    to={"/jedis/"+jedi.id}
                    className="list-group-item"
                    key={jedi.id}>
                    {jedi.name}
                </Link>
            )
        });

        return (
            <ThemeContext.Consumer>
                {({ primaryColor, secondaryColor }) => (
                    <div>
                        <h1 style={{ color: primaryColor }}>Jedis</h1>
                        <div className="list-group" style={{ color: secondaryColor }}>
                            {jediNode}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )

    }
}

export default Jedi

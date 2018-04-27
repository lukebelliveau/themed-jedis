import React, {Component} from 'react';
import { Link } from 'react-router';

import ThemeContext from '../ThemeContext';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryColor: 'red',
            secondaryColor: 'gray',
        };

        this.changePrimaryColor = this.changePrimaryColor.bind(this)
        this.changeSecondaryColor = this.changeSecondaryColor.bind(this)
    }

    changePrimaryColor(event) {
        const color = event.target.value;

        this.setState(state => ({
            primaryColor: color
        }))
    }

    changeSecondaryColor(event) {
        const color = event.target.value;

        this.setState(state => ({
            secondaryColor: color
        }))
    }

    render(){
        return(
            <ThemeContext.Provider value={{
                primaryColor: this.state.primaryColor,
                secondaryColor: this.state.secondaryColor,
                changePrimaryColor: this.changePrimaryColor,
                changeSecondaryColor: this.changeSecondaryColor,
            }}>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">STAR WARS</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/" activeStyle={ activeLinkStyle }>Home</Link></li>
                                    <li><Link to="/jedis" activeStyle={ activeLinkStyle }>Jedis</Link></li>
                                    <li><Link to="/theme" activeStyle={ activeLinkStyle }>Theme</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </ThemeContext.Provider>
        );
    }
}

const activeLinkStyle = {
    color: 'black',
    textDecoration: 'underline'
};

export default Main
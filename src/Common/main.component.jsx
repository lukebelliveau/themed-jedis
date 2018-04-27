import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render(){
        return(
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
        );
    }
}

const activeLinkStyle = {
    color: 'black',
    textDecoration: 'underline'
};

export default Main
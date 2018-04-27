import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ThemeContext from '../ThemeContext';

class JediDetail extends Component {
    handleRedirect(){
        browserHistory.push('/jedis');
    }
    render(){
        const jedis = this.props.route.data;
        const id = this.props.params.id;
        const jedi = jedis.filter(jedi => {
            if(jedi.id == id) {
                return jedi;
            }
        });

        return (
            <ThemeContext.Consumer>
                {({ primaryColor, secondaryColor }) => (
                    <div>
                        <h1 style={{ color: primaryColor }}>{jedi[0].name}</h1>
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <img src={jedi[0].media} alt={jedi[0].name} />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4" style={{ color: secondaryColor }}>
                                <ul>
                                    <li><strong>Title</strong>: {jedi[0].title}</li>
                                    <li><strong>Birthplace</strong>: {jedi[0].birthplace}</li>
                                    <li><strong>Fate</strong>: {jedi[0].fate}</li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Jedis</button>
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>

        );
    }
}

export default JediDetail
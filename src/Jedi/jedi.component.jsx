import React, { Component } from 'react';
import { Link } from 'react-router';

class Jedi extends Component {
    render(){
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
            <div>
                <h1>Jedis</h1>
                <div className="list-group">
                    {jediNode}
                </div>
            </div>
        );
    }
}

export default Jedi

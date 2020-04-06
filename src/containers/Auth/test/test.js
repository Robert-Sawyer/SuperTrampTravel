import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }

    getUsersData() {
        axios
            .get(`http://http://020280b7.ngrok.io/users/checkAll`, {})
            .then(response => {
                const data = response.data;
                console.log(data);
                const users = response.map(u =>
                    <div>
                        <p>{u.data.username}</p>
                        <p>{u.data.email}</p>
                    </div>
                );
                console.log(users);
                this.setState({Users: users})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount(){
        this.getUsersData()
    }

    render() {

        return (
          <div>
              {this.state.users}
              <p>gdfgdfg</p>
          </div>
        );
    }
}

export default Test;
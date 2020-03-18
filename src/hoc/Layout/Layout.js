import React, {Component} from 'react';
import Aux from '../AuxComponent/AuxComponent';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
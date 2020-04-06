import React from 'react';
import {ListGroup} from 'react-bootstrap';

const headerMenu = (props) => (

    <ListGroup horizontal>
        <ListGroup.Item variant="info" action href='/'>STRONA GŁÓWNA</ListGroup.Item>
        <ListGroup.Item action href='/forum'>FORUM</ListGroup.Item>
        <ListGroup.Item action href='/countries'>KRAJE</ListGroup.Item>
        <ListGroup.Item action href='/contact'>KONTAKT</ListGroup.Item>
    </ListGroup>

);

export default headerMenu;
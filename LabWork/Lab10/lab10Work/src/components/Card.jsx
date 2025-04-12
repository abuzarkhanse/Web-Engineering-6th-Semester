import { Card } from 'react-bootstrap';

function Infocard () {
    return (
        <Card style ={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>React Bootstrap</Card.Title>
                <Card.Text>
                    React-Bootstrap makes it easy to use Bootstrap componenets in
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Infocard;
import Card from 'react-bootstrap/Card';
import mea from '../static/mea.jpeg'
import './Card.css'

function ImgOverlayExample() {
    return (
        <Card className="text-black study">
            <Card.Img className='mea' src={mea} alt="Card image" />
        </Card>
    );
}

export default ImgOverlayExample;
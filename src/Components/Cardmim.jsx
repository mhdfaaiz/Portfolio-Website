import Card from 'react-bootstrap/Card';
import mim from '../static/mim.jpeg'
import './Card.css'

function ImgOverlayExample() {
    return (
        <Card className="text-black study">
            <Card.Img className='mea' src={mim} alt="Card image" />
        </Card>
    );
}

export default ImgOverlayExample;
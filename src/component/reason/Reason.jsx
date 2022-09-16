import'./Reason.css';
import image1 from '../../pic/image1.png';
import image2 from '../../pic/image2.png';
import image3 from '../../pic/image3.png';
import image4 from '../../pic/image4.png';
import nb from '../../pic/nb.png';
import addidas from '../../pic/adidas.png';
import Nike from '../../pic/nike.png';
import tick from '../../pic/tick.png';

const Reason=()=>{

    return(
        <div className="Reason" id="reason">
            <div className="left-reason">
                <img src={image1}alt="image-1" />
                <img src={image2} alt="image-2" />
                <img src={image3} alt="image-3" />
                <img src={image4} alt="image-4" />
            </div>
            <div className="right-reason"><h1>Right side</h1></div>
        </div>
    )
}

export default Reason;
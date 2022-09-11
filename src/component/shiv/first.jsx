import './first.css';

const First=()=>{

    let time=new Date();

    return(
        <div className="first">
            {time.toDateString()}<br />
            {time.getDate()}
        </div>
    );
}
export default First;
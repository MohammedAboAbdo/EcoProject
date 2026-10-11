import watch from '../../assets/landingPage/watch.svg'
import './Deal.css'

function Deal() {
    return (
        <div className='Deal-section'>
            <div>
                <p>Best Deal Online on smart watches</p>
                <h1>SMART WEARABLE.</h1>
                <p>UP to <span>80%</span> OFF </p>
            </div>
            <div><img src={watch} alt="" /></div>
        </div>
    )
}

export default Deal

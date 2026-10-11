import './Smartphones.css'
import phonePhoto from '../../assets/landingPage/GalaPhone.svg'


const Smartphonescategories = [
    { type: 'Phones', name: 'Galaxy S22 Ultra', price: '32999', priceBefor: '74999', photo: { phonePhoto }, id: 2 },
    { type: 'Phones', name: 'Galaxy S22 Ultra', price: '32999', priceBefor: '74999', photo: { phonePhoto }, id: 3 },
    { type: 'Phones', name: 'Galaxy S22 Ultra', price: '32999', priceBefor: '74999', photo: { phonePhoto }, id: 1 },
    { type: 'Phones', name: 'Galaxy S22 Ultra', price: '32999', priceBefor: '74999', photo: { phonePhoto }, id: 4 },
    { type: 'Phones', name: 'Galaxy S22 Ultra', price: '32999', priceBefor: '74999', photo: { phonePhoto }, id: 5 },
];
function Smartphones() {
    return (
        <div>
            <div><p>Grab the best deal on <a href="">Smartphones</a></p></div>

            <div className='Smartphones-cards' >

                {Smartphonescategories.map((Smartphonescategorie) => {
                    return (
                        <div className='Smartphones-card'>
                            <div className='phone-Photo' style={{ backgroundImage: `url(${Smartphonescategorie.photo.phonePhoto})` }}>
                                <span>50% off</span>
                            </div>
                            <div>
                                <p className='phone-Name'>{Smartphonescategorie.name}</p>
                                <p className='price'>{Smartphonescategorie.price}</p>
                            </div>
                            <p className='H-Line'></p>
                            <p className='money-save'>Save - {Smartphonescategorie.priceBefor - Smartphonescategorie.price}</p>

                        </div>

                    )
                })}

            </div>


        </div>
    )
}

export default Smartphones
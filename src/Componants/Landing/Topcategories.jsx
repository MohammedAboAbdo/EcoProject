import './Topcategories.css'
import phonePhoto from '../../assets/landingPage/GalaPhone.svg'


const topcategories = [
    { name: 'Mobile', photo: { phonePhoto }, id: 1 },
    { name: 'Cosmetics', photo: { phonePhoto }, photo: { phonePhoto }, id: 2 },
    { name: 'Electronics', photo: { phonePhoto }, id: 3 },
    { name: 'Furniture', photo: { phonePhoto }, id: 4 },
    { name: 'Watches', photo: { phonePhoto }, id: 5 },
    { name: 'Decor', photo: { phonePhoto }, id: 6 },
    { name: 'Accessories', photo: { phonePhoto }, id: 7 },
];

function Topcategories() {
    return (
        <div>
            <div><p>Shop From Top Categories<a href="">View All</a></p></div>

            <div className='Topcategories-cards' >

                {topcategories.map((topcategorie) => {
                    return (
                        <div className='topcategorie-card'>
                            <div className='topcategorie-Photo'>
                                <img src={topcategorie.photo.phonePhoto} alt="" />
                            </div>
                            <div>
                                <p className='topcategorie-Name'>{topcategorie.name}</p>
                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    )
}
export default Topcategories
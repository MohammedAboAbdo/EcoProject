import './DailyEssentials.css'
import froutis from '../../assets/landingPage/froutis.svg'


const DailyEssentialsLists = [
    { name: 'Daily Essential', photo: { froutis }, id: 1 },
    { name: 'Vegitable', photo: { froutis }, photo: { froutis }, id: 2 },
    { name: 'Fruits', photo: { froutis }, id: 3 },
    { name: 'Strowberry', photo: { froutis }, id: 4 },
    { name: 'Mango', photo: { froutis }, id: 5 },
    { name: 'Cherry', photo: { froutis }, id: 6 },
];

function DailyEssentials() {
    return (
        <div>
            <div><p>Shop From Top Categories<a href="">View All</a></p></div>

            <div className='DailyEssentialsLists-cards' >

                {DailyEssentialsLists.map((DailyEssential) => {
                    return (
                        <div className='DailyEssential-card'>
                            <div className='DailyEssential-Photo'>
                                <img src={DailyEssential.photo.froutis} alt="" />
                            </div>
                            <div>
                                <p className='DailyEssential-Name'>{DailyEssential.name}</p>
                                <p className='DailyEssential-Name'>UP to <span>50%</span> OFF</p>
                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    )
}
export default DailyEssentials
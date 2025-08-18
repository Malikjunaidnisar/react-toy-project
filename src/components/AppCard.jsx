
import AppCardData from '../AppData/AppCardData.js'
import {Link} from 'react-router'
const AppCard =()=>{
	return(
		<>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{AppCardData.map((AppCard)=>(
				<>
				<Link to={AppCard.appLink}>
				<div className='border bg-gray-200  h-50 mt-2 '>
						<div>
							<img className='w-full' src={AppCard.img} alt={AppCard.name} />
							<h1 className="text-2xl ml-3 mt-6 mb-3">{AppCard.name}</h1>
							<div className="border text-center text-blue-700 ml-3 mb-5 p-1 rounded-lg w-16 bg-blue-300">React</div>
							<p className="text-lg ml-3 mb-3">{AppCard.p}</p>
						</div>
						<div>
							<Link className="text-blue-700 ml-3 mr-2" to={AppCard.link}>View Code</Link>
						</div>
				</div>
				
				
				</Link>
				</>
				))}
				
				
		
			</div>
		</>
	)
}

export default AppCard

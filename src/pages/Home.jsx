import AppCard from '../components/AppCardData.jsx'
import{Link} from 'react-router'

const  Home =()=>{
	return(
		<>
			<div className='bg-white-50'>
			<h1 className='ml-3 text-xl mt-3'>Hello I am Malik Junaid Nisar.</h1>
			<h3 className='ml-3 mt-3'>Full-stack web developer specializing in building and designing exceptional digital experiences.</h3>
			<Link to='/contact'>
			<button className='text-white m-3 bg-blue-600 p-2 rounded-lg'>Contact me
			</button>
			</Link>
			</div>
			<div className='flex justify-center items-center bg-gray-200 text-gray-200' style={{height:'400px',width:'400px'}} >
			<div className='flex justify-center  items-center rounded-full' style={{backgroundColor:'white',width:'350px',height:'350px'}}>
			<div className='bg-gray-500 rounded-full' style={{width:'300px',height:'300px'}}>
			</div>
			</div>
			</div>
			
			<img src={AppCard.img} style={{width:'300px',height:'300px'}} alt='Profile Picture' />
			<AppCard />
		</>
	)
}
export default Home
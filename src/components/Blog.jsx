
import {useState,useEffect} from 'react'

const Blog =()=>{
	const [blog,setBlog]=useState([])
	useEffect(()=>{
	       fetch('https://jsonplaceholder.typicode.com/users')
	        .then((response)=>response.json())
	       .then((data)=>setBlog(data))
	
	    },[])
	return (
		<>
		
		
		<div className="mt-2">
			<div className="mb-3">
		
				<h1 className="text-2xl text-bold">Latest Articles</h1>
				<h3 className="text-gray-500">Diverse Range of articles related to html,css and javascript</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
				{blog.map((data)=>(
				<div className="bg-gray-200 mx-w-24 mx-h-24 mb-2">
					<div className="flex gap-3 align-center">
						<img className="" src="gsjbsnss" alt="img" />
						<div>
							<h1 className="text-xl wrap">{data.name}</h1>
							<p className="text-gray-500 text-lg">{data.email}</p>
							<p className="text-sm">{data.id}</p>
						</div>
					</div>
					
				</div>
				))}
				
				
			</div>
		</div>
		
		</>
	)
	
}
export default Blog

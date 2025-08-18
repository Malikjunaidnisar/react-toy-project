import {useState,useEffect} from 'react'


const BlogData =()=>{
const [blog,setBlog] =useState([])
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>response.json())
		.then((data)=>setBlog(data))
	
	},[])
	return(
		{blog}
	)
}
export default BlogData
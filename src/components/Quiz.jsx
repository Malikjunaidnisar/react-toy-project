
import {useState} from 'react'
const quizData =[
	{
		question:'what is your name',
		img:'https://images.unsplash.com/photo-1753735880239-d2213c79d1e4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
		options:["malik",'muhammad','junaid','nisar'],
		answer:'malik'
	},
	{
	    question:'what is your f.name',
	    img:'https://images.unsplash.com/photo-1753735880239-d2213c79d1e4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
		//img:'https://ik.imagekit.io/Saya1train/Screenshot_20250812_235438~2.jpg?updatedAt=1755025091654&tr=n-ik_ml_thumbnail',
	    options:["malik",'muhammad','ghulam','nisar'],
	    answer:'nisar'
	},
]
const Quiz =()=>{
	const [index,setIndex]=useState(0)
	const [finish,setFinish]=useState(false)
	const [submit,setSubmit]=useState(false)
	const [finishQuiz,setFinishQuiz]=useState(false)
	const [ans , setAns] = useState([])
	const [select,setSelect] =useState(null)
	const [result,setResult]=useState(false)
	const [score,setScore]=useState(0)
	
	/*const handleAnswer=(e)=>{
	setIndex(2)
	
	//document.write(e.target.value)
	
	}*/
	const handleQuestion=(e)=>{
		
		e.preventDefault()
		if(!select){
			alert('Choose a Option First')
			return
		}
		if(select === quizData[index].answer){
			setScore(score+1)
			
		}
		if(index+1 !== quizData.length){
		setIndex(index+1)
		setAns([...ans,select])
		setSelect(null)
		
			
			
			
			return
		}
		setFinish(true)
		setAns([...ans,select])
		//setSelect(null)
	
		
		
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		setSubmit(true)
		setFinishQuiz(true)
		
		
	}
	const handleChange =(e)=>{
	
		setSelect(e.target.value)
		//document.write(e.target.value)
	}
	const handleShowResult =()=>{
		setFinishQuiz(false)
		setResult(true)
		//setFinish(false)
	}
	const handleAnswer=(opt,ques,ind)=>{
	
	if(opt == ques.answer){
		 return "bg-green-500 w-full rounded-md p-1"
		
		
	}
	if(opt == ans[ind]){
		return 'bg-red-500 w-full rounded-md p-1'
	}

		
	}

	return (
		<>
		<div className='w-full bg-gray-200'>
		{!submit &&
			
		<div className='border mt-3'>
			<form onSubmit={finish?handleSubmit: handleQuestion}>
			
			<div>
				
				{quizData[index].img && <img className="border w-full  h-48" src={quizData[index].img} alt="hete"/>}
				
				<p className='text-xl ml-3 mb-3 mt-3 '>Question {index+1}:{quizData[index].question}</p>
				
				{quizData[index].options.map((opt,i)=>(
				<div className="">	
				<label className='text-md ml-3 ' htmlFor={i}>
				<input  className="mr-1 mb-3" id={i} type="radio" name='option'  value={opt} onChange={handleChange} checked={select === opt}/>{opt}
				</label>
				</div>
				))}
				<button type="submit" className="ml-60 mb-3 border cursor-pointer rounded-lg bg-blue-500 text-blue-700 w-20 text-center inline-block">{finish?'Submit':'next'}</button>
				{/*<input type="radio" name='name' />Muhammad
				<input type="radio" name='name' />Nisar
				<input type="radio" name='name' />Asad*/}

			</div>
			
			</form>
		</div>
		
		}
		{finishQuiz && <div className='h-full'>
			
			<h1 className=' text-xl text-bold text-center  p-3'>Quiz is Finished</h1>
			<div className="flex justify-center">
			<img  className="mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvC3F9_2K5vCBxWMe1E5w0b_UvlgWxTLKkw&s" />
			</div>
			<p className="text-center text-lg ">You have successfully submit thre Quiz</p>
			<button className="mt-2 mb-2 border border-blue-500 rounded-full w-full text-blue-700  cursor-pointer" onClick={handleShowResult}>Check Result</button>
			
		</div>
		}
		{result && 
		<div className="">
			<h2 className="ml-2 text-xl">Your score is {score}/{quizData.length}</h2>
			{quizData.map((ques,ind)=>(
				<div className='mb-3'>
				{ques.img && <img className="border w-full  h-48" src={ques.img} />}
				<p className='text-xl ml-3 mb-3 mt-3 '>Question{ind+1}:{ques.question}</p>
				<ul className="mx-2">
					{ques.options.map((opt,i)=>(
						<>
						
						<li className={handleAnswer(opt,ques,ind)}>{opt}</li>
						{/*}<li className={opt == ans[ind]? "bg-red-500" &&:''}>{opt}</li>*/}
						</>
						
						
					))}
					
				
				</ul>
				
			
				</div>
			))}
		</div>
		}
		</div>
		</>
	)
}

export default Quiz

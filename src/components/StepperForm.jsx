
const formData =[
	{
		label:"what is your name",
		placeholder:'enter your name',
		typefor:'text'
	},
	{
	   	label:"what is your Email",
	   	typefor:'email',
	    placeholder:'enter your email'
	},
	{
	   	label:"what is your reason for contact",
	   	typefor:'text',
	    placeholder:'enter your contact reason'
	},
]
const formSteps =[1,2,3,4]
import {useState} from 'react'
const StepperForm = ()=>{
	const [step,setStep]=useState(0)
	const [inf,setInf]=useState({
		name:'',
		email:'',
		contact:''
	})
	//const [stepCount,setStepCount]=useState(0)

	const handleStep =(e)=>{
	e.preventDefault()
	
		if(!e.target.name.value){
			
		alert("Pls Fill This Feild")
			return
		}
		
		
		setStep(step+1)
		//setStepCount(stepCount+1)
	}
	const highlightStep ="py-1 imagemargin border border-green-500  text-center text-green-500 w-9 h-9 rounded-3xl  inline-block"
	const unHighlightStep ="py-1 border border-green-500 text-center text-green-500 w-9 h-9  rounded-3xl inline-block"

	const handleInfo =(e)=>{
		
		setInf((prevData)=>({
			...prevData,[e.target.name]:e.target.value
		}))
		
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		alert([inf.name,inf.email,inf.contact])
	}
	
	return(
		<>
		<div className="mt-5 flex items-center justify-center">
		{formSteps.map((s,i)=>(
			<>
		
		<div className={step >= s ? highlightStep:unHighlightStep} >{step >=s ?s:s}</div>
		{i<formSteps.length-1 && <div className="border border-green-500    w-16 h-0"></div>}
		
		
			</>
		))}
		</div>

		{/*}{step < formData.length &&
		<>
		
	
		<div className={step == formSteps[step]-1? highlightStep:unHighlightStep}>2</div>
	
		<div className="border inline-block w-5"></div>
		<div className={step == formSteps[step]-1?highlightStep:unHighlightStep}>3</div>
		<div className="border inline-block w-5"></div>
		<div className={step == formSteps[step]-1?highlightStep:unHighlightStep}>4</div>*/}
		
		{step < formData.length &&
		<div className="mt-10">
			<form onSubmit={handleStep}>
				<div className='flex gap-2 items-center justify-between'>
				<label htmlFor="">{formData[step].label}</label>
				<input type={formData[step].typefor} placeholder={formData[step].placeholder} onChange={handleInfo} name={Object.keys(inf)[step]} value={Object.values(inf)[step]}/>
				</div>
				
				<div className="flex justify-end">
				<button className="mt-5 bg-green-400 w-32 border cursor-pointer" type='submit' disabled={step === formData.length}>Next</button>
				</div>
			</form>
		</div>
		}
		
		{step === formData.length&&
		<>
		<h1>Review</h1>
		<form onSubmit={handleSubmit}>
			<label htmlFor='name'>Your Name</label>
			<input type='text ' name='name' value={inf.name} onChange={handleInfo}/>
			<label htmlFor='email' >Your email</label>
			<input type='email' name='email' value={inf.email} onChange={handleInfo}/>
			<label htmlFor='contact'>Your Reason for Contact</label>
			<input type='text' name='contact' onChange={handleInfo} value={inf.contact}/>
			<button className="border cursor-pointer" type='submit' >Submit</button>
		
		</form >
		</>
		}
		
		
		</>
	)
}

export default StepperForm

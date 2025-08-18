
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
	const highlightStep ="bg-red-500 border text-center w-6 rounded-3xl inline-block"
	const unHighlightStep ="border text-center w-6 rounded-3xl inline-block"

	const handleInfo =(e)=>{
		{/*setInf((prevData)=>({...prevData,[e.target.name]:e.target.value})*/}
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
		
		{formSteps.map((s,i)=>(
			<>
		{step > s-1 && <img className="rounded-3xl w-9 inline-block " src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp-hHHMFwY2Hy190ImkaVakDvPDWrvyA0-6KbOUQwFlx1CwEcdl8qkCUK&s=10" />}
		
		{step <= s-1&& <div className={step == s-1 ? highlightStep:unHighlightStep}>{s}</div>}
		{i<formSteps.length-1 && <div className="border inline-block w-5"></div>}
			</>
		))}

		{/*}{step < formData.length &&
		<>
		<div className={step == formSteps[step]-1 ? highlightStep:unHighlightStep}>1</div>
		<div className="border inline-block w-5"></div>
	
		<div className={step == formSteps[step]-1? highlightStep:unHighlightStep}>2</div>
	
		<div className="border inline-block w-5"></div>
		<div className={step == formSteps[step]-1?highlightStep:unHighlightStep}>3</div>
		<div className="border inline-block w-5"></div>
		<div className={step == formSteps[step]-1?highlightStep:unHighlightStep}>4</div>*/}
		{step < formData.length &&
		<div>
			<form onSubmit={handleStep}>
				<label htmlFor='formData'>{formData[step].label}</label>
				<input onChange={handleInfo} id='formData' type={formData[step].typefor} name={Object.keys(inf)[step]} value={Object.values(inf)[step]} placeholder={formData[step].placeholder} />
				<button className="border cursor-pointer" type='submit' disabled={step === formData.length}>Next</button>
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

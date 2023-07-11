import React, {useState,useEffect} from 'react'
import './Style.css'

const ProgressPopup = () => {
    const [filled, setFilled] = useState(0);
	// const [isRunning, setIsRunning] = useState(false);
    const progressfun=()=>{
        if(filled < 100) {
		return setTimeout(() => setFilled(prev => prev += 2), 50);
		}
    }
	useEffect(() => {
		progressfun();
	},[filled])

	return (
		<div className='progressbar_popup text-center py-5'>
			<div className='progressbar'>
				<div style={{
					height:"100%",
					width:`${filled}%`,
					backgroundColor: 'red',
					transition:"width 0.5s"
				}}></div>
				<span className='progressPercent'>{filled}%</span>
			</div>
			{/* <button className='btn btn-primary' onClick={() => setIsRunning(true)}>Start</button> */}
		</div>
	)
}

export default ProgressPopup
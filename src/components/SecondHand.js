import React from 'react'

const SecondHand = props => {
        
    const getDegBySeconds = () => (props.currentTime.getSeconds()/60)*360 - 90
    const getSecondHandWidth = () => parseInt(props.secondHandLength,10)/100 * parseInt(props.clockSize, 10)/2
    const getSecondHandHeight = () => props.secondHandWidth
        
	const styles = {
        position: 'absolute',
        top: parseInt(props.clockSize,10)/2 - parseInt(props.secondHandWidth,10)/2,
        left: parseInt(props.clockSize,10)/2,
        width: getSecondHandWidth(),
        height: getSecondHandHeight(),
        transform: `rotate(${getDegBySeconds(props.num)}deg)`,
        transformOrigin: '0% 50%',
        backgroundColor: 'red',
        zIndex: 10
	}
	
    if (props.showSecondHand) 
        return <div className="second-hand" style={ styles }></div>
    else return false
}

export { SecondHand };
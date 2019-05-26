import React from 'react'

const SecondHand = props => {
        
    const getDegBySeconds = () => (props.currentTime.getSeconds()/60)*360 - 90
    
    const getSecondHandWidth = () => parseInt(props.secondsProps.handLength,10)/100 * parseInt(props.clockSize, 10)/2
        
	const styles = {
        position: 'absolute',
        top: parseInt(props.clockSize,10)/2 - parseInt(props.secondsProps.handWidth,10)/2,
        left: parseInt(props.clockSize,10)/2,
        width: getSecondHandWidth(),
        height: props.secondsProps.handWidth,
        transform: `rotate(${getDegBySeconds(props.num)}deg)`,
        transformOrigin: '0% 50%',
        backgroundColor: 'red',
        zIndex: 10
	}
	
    if (props.secondsProps.showHand) 
        return <div className="second-hand" style={ styles }></div>
    else return false
}

export { SecondHand };
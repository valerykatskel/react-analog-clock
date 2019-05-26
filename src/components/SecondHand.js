import React, { Component } from 'react'

const SecondHand = props => {
        
    const getDegBySeconds = () => (props.currentTime.getSeconds()/60)*360 - 90
    
    const getSecondHandWidth = () => parseInt(props.secondsProps.handWidth,10)/100 * parseInt(props.clockSize, 10)/2
        
	const styles = {
        position: 'absolute',
        top: parseInt(props.clockSize, 10)/2,
        left: parseInt(props.clockSize, 10)/2,
        border: '1px solid red',
        width: getSecondHandWidth(),
        height: 1,
        transform: `rotate(${getDegBySeconds()}deg)`,
        transformOrigin: '0% 50%',
        backgroundColor: 'red',
        zIndex: 10
	}
	
	return <div className="second-hand" style={ styles }></div>
}

export { SecondHand };
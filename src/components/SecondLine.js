import React, { Component } from 'react'

const SecondLine = props => {

    const getDegByNumber = (number) => {
		if (isNaN(number) ||  typeof number === 'undefined') {
			number = this.state.currentTime.getSeconds()
		}
	
		return (number/60)*360 - 90
	}
    
    const getMinuteHandWidth = () => parseInt(props.secondsLineWidth,10)/100 * parseInt(props.clockSize, 10)/2

    const style = {
        position: 'absolute',
        top: parseInt(props.clockSize, 10)/2,
        left: parseInt(props.clockSize, 10)/2,
        width: '50%',
        height: props.secondsLineWidth,
        transform: `rotate(${getDegByNumber(1)}deg)`,
        transformOrigin: '0% 0%',
        backgroundColor: '#c7cad2',
        background: `linear-gradient(to right,  #fff 0%,#fff ${props.smallNumbersLineSize}%,#54a3ee ${props.smallNumbersLineSize}%,#1e69de 100%)`
    }
    
    return <div style={ style.number1tick }></div>
}

export { SecondLine };

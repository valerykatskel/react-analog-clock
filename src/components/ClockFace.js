import React, { Component } from 'react'

const ClockFace = props => {

	const getDegByHours = (hours) => {
		if (isNaN(hours) ||  typeof hours === 'undefined') {
			hours = this.state.currentTime.getHours()
		}
	
		return (hours/12)*360 - 90
	}

	const getTopLeftCoordsSmall = () => (parseInt(props.clockSize, 10) - parseInt(props.clockInnerSmallCircleSize, 10)) / 2

	const styles = {
		centralCircleSmall: {
			display: 'inline-block',
			position: 'absolute',
			top: getTopLeftCoordsSmall(),
			left: getTopLeftCoordsSmall(),
			width: props.clockInnerSmallCircleSize,
			height: props.clockInnerSmallCircleSize,
			borderRadius: '50%',
			background: '#6d5f53',
			zIndex: 12
		},
		centralCircle: {
			display: 'inline-block',
			position: 'absolute',
			top: (parseInt(props.clockSize, 10) - parseInt(props.clockInnerBigCircleSize, 10)) / 2,
			left: (parseInt(props.clockSize, 10) - parseInt(props.clockInnerBigCircleSize, 10)) / 2,
			width: props.clockInnerBigCircleSize,
			height: props.clockInnerBigCircleSize,
			borderRadius: '50%',
			background: 'rgba(154, 152, 162, 0.15)',
			zIndex: 11
		},
		number1tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(1)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number2tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(2)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number3tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: props.bigNumbersLineWidth,
			marginTop: -1 * parseInt(props.bigNumbersLineWidth,10)/2,
			transform: `rotate(${getDegByHours(3)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: `linear-gradient(to right,  #fff 0%,#fff ${props.bigNumbersLineSize}%,#54a3ee ${props.bigNumbersLineSize}%,#1e69de 100%)`
		},
		number4tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(4)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number5tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(5)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number6tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: props.bigNumbersLineWidth,
			marginLeft: parseInt(props.bigNumbersLineWidth)/2,
			transform: `rotate(${getDegByHours(6)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: `linear-gradient(to right,  #fff 0%,#fff ${props.bigNumbersLineSize}%,#54a3ee ${props.bigNumbersLineSize}%,#1e69de 100%)`
		},
		number7tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(7)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number8tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(8)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number9tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: props.bigNumbersLineWidth,
			marginTop: parseInt(props.bigNumbersLineWidth,10)/2,
			transform: `rotate(${getDegByHours(9)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: `linear-gradient(to right,  #fff 0%,#fff ${props.bigNumbersLineSize}%,#54a3ee ${props.bigNumbersLineSize}%,#1e69de 100%)`
		},
		number10tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(10)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number11tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: '1px',
			transform: `rotate(${getDegByHours(11)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: 'linear-gradient(to right,  #fff 0%,#fff 95%,#54a3ee 95%,#1e69de 100%)'
		},
		number12tick: {
			position: 'absolute',
			top: parseInt(props.clockSize, 10)/2,
			left: parseInt(props.clockSize, 10)/2,
			width: '50%',
			height: props.bigNumbersLineWidth,
			marginLeft: -1 * parseInt(props.bigNumbersLineWidth)/2,
			transform: `rotate(${getDegByHours(12)}deg)`,
			transformOrigin: '0% 0%',
			backgroundColor: '#c7cad2',
			background: `linear-gradient(to right,  #fff 0%,#fff ${props.bigNumbersLineSize}%,#54a3ee ${props.bigNumbersLineSize}%,#1e69de 100%)`
		}
	}
	
	return (
		<div className="clock-face">
			<div className="number-1-tick" style={ styles.number1tick }></div>
			<div className="number-2-tick" style={ styles.number2tick }></div>
			<div className="number-3-tick" style={ styles.number3tick }></div>
			<div className="number-4-tick" style={ styles.number4tick }></div>
			<div className="number-5-tick" style={ styles.number5tick }></div>
			<div className="number-6-tick" style={ styles.number6tick }></div>
			<div className="number-7-tick" style={ styles.number7tick }></div>
			<div className="number-8-tick" style={ styles.number8tick }></div>
			<div className="number-9-tick" style={ styles.number9tick }></div>
			<div className="number-10-tick" style={ styles.number10tick }></div>
			<div className="number-11-tick" style={ styles.number11tick }></div>
			<div className="number-12-tick" style={ styles.number12tick }></div>
			<div className="central-circle" style={ styles.centralCircle }></div>
			<div className="central-circle-small" style={ styles.centralCircleSmall }></div>
		</div>
    )
}

export { ClockFace };

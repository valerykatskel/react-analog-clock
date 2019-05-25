import React, { Component } from 'react'
import { SecondHand, MinuteHand, HourHand, ClockFace } from './index'

class AnalogClock extends Component {
	
	state = {
		currentTime: new Date()
	}
	
	launchClock = (() => {
		setInterval(()=>{
			this.setState({
				currentTime: new Date()
			})	
		}, 1000)
	})()

	clockStyles = {
		clock: {
			display: 'inline-block',
			position: 'relative',
			width: this.props.size,
			height: this.props.size,
			borderRadius: '50%',
			border: '2px solid #000'
		}
	}
	
	render() {

		const props = {
			secondHand: {
				currentTime: this.state.currentTime,
				clockSize: this.props.size,
				secondHandWidth: this.props.secondHandWidth
			},
			minuteHand: {
				currentTime: this.state.currentTime,
				clockSize: this.props.size,
				minuteHandWidth: this.props.minuteHandWidth
			},
			hourHand: {
				currentTime: this.state.currentTime,
				clockSize: this.props.size,
				hourHandWidth: this.props.hourHandWidth
			},
			clockFace: {
				clockSize: this.props.size,
				clockInnerBigCircleSize: this.props.clockInnerBigCircleSize,
				clockInnerSmallCircleSize: this.props.clockInnerSmallCircleSize,
				bigNumbersLineSize: 100 - this.props.bigNumbersLineSize,
				bigNumbersLineWidth: this.props.bigNumbersLineWidth
			}
		}

		return (
			<div id="clock" style={ this.clockStyles.clock } >
				< SecondHand { ...props.secondHand } />
				< MinuteHand { ...props.minuteHand } />
				< HourHand { ...props.hourHand } />
				< ClockFace { ...props.clockFace } />
			</div>
		)
	}
}

export { AnalogClock };

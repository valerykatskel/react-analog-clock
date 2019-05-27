import React, { Component } from 'react'
import { SecondHand, MinuteHand, HourHand, ClockFace } from './index'

class AnalogClock extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			currentTime: new Date(),
			size: this.props.size
		}
	}

	componentDidMount = () => {
		setInterval(()=>{
			this.setState({
				currentTime: new Date()
			})	
		}, 1000)
	}

	render() {
		let settings = {
			clockStyles: {
				display: 'inline-block',
				position: 'relative'
				
			},
			secondsSettings: {
				currentTime: this.state.currentTime,
				clockSize: this.props.size,
				secondsProps: this.props.seconds,
				showSecondHand: this.props.showSecondHand
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
				clockInnerBigCircleSize: this.props.clockInnerBigCircleSize/100*this.props.size,
				clockInnerSmallCircleSize: this.props.clockInnerSmallCircleSize/100*this.props.size,
				showBigNumberLines: this.props.showBigNumberLines,
				bigNumberLineLength: this.props.bigNumberLineLength,
				bigNumberLineWidth: this.props.bigNumberLineWidth,
				smallNumberLineLength: this.props.smallNumberLineLength,
				smallNumberLineWidth: this.props.smallNumberLineWidth,
				allNumbersLineLength: this.props.seconds.lineLength,
				allNumbersLineWidth: this.props.seconds.lineWidth,
				showSecondsLines: this.props.showClockLines,
				showSmallNumberLines: this.props.showSmallNumberLines,
				secondsProps: this.props.seconds
			}
		}

		return (
			<div id="clock" style={ settings.clockStyles } >
				< SecondHand { ...settings.secondsSettings } />
				< MinuteHand { ...settings.minuteHand } />
				< HourHand { ...settings.hourHand } />
				< ClockFace { ...settings.clockFace } />
			</div>
		)
	}
}

export { AnalogClock }

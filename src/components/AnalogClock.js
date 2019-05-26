import React, { Component } from 'react'
import { SecondHand, MinuteHand, HourHand, ClockFace } from './index'

class AnalogClock extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			currentTime: new Date()
		}
	}

	componentDidMount = () => {
		setInterval(()=>{
			this.setState({
				currentTime: new Date()
			})	
		}, 1000)
	}

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

		const settings = {
			secondsSettings: {
				currentTime: this.state.currentTime,
				clockSize: this.props.size,
				secondsProps: this.props.seconds
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
				showBigNumberLines: this.props.showBigNumberLines,
				bigNumberLineLength: this.props.bigNumberLineLength,
				bigNumberLineWidth: this.props.bigNumberLineWidth,
				smallNumberLineLength: this.props.smallNumberLineLength,
				smallNumberLineWidth: this.props.smallNumberLineWidth,
				allNumbersLineLength: this.props.seconds.lineLength,
				allNumbersLineWidth: this.props.seconds.lineWidth,
				showSecondsLines: this.props.seconds.showLines,
				showSmallNumberLines: this.props.showSmallNumberLines,
				secondsProps: this.props.seconds
			}
		}

		return (
			<div id="clock" style={ this.clockStyles.clock } >
				< SecondHand { ...settings.secondsSettings } />
				< MinuteHand { ...settings.minuteHand } />
				< HourHand { ...settings.hourHand } />
				< ClockFace { ...settings.clockFace } />
			</div>
		)
	}
}

export { AnalogClock };

import React from 'react'
import { SecondLine, BigNumberLine, SmallNumberLine } from './index'

const ClockFace = props => {
	
	const secondLinesArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
	const secondLines = props.showSecondsLines ? secondLinesArr.map((number) => < SecondLine key={ number } {...props} number={number} />) : ''

	const bigNumberLinesArr = [15,30,45,60]
	const bigNumberLines = props.showBigNumberLines ? bigNumberLinesArr.map((number) => < BigNumberLine key={ number } {...props} number={number} />) : ''

	const smallNumberLinesArr = [5,10,15,20,25,30,35,40,45,50,55,60]
	const smallNumberLines = props.showSmallNumberLines ? smallNumberLinesArr.map((number) => < SmallNumberLine key={ number } {...props} number={number} />) : ''
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
		}
	}
	
	return (
		<div className="clock-face">
			{secondLines}
			{bigNumberLines}
			{smallNumberLines}
			<div className="central-circle" style={ styles.centralCircle }></div>
			<div className="central-circle-small" style={ styles.centralCircleSmall }></div>
		</div>
    )
}

export { ClockFace };

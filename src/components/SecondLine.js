import React from 'react'

const SecondLine = props => {

    const getDegByNumber = (number) => {
		if (isNaN(number) ||  typeof number === 'undefined') {
			number = this.state.currentTime.getSeconds()
		}
	
		return (number/60)*360 - 90
	}
    
    const uniqId = `secondLine-${props.number}`

    const style = {
        lineHolder: {
            position: 'absolute',
            top: parseInt(props.clockSize, 10)/2 - parseInt(props.secondsProps.lineWidth,10)/2,
            left: parseInt(props.clockSize, 10)/2,
            width: parseInt(props.clockSize, 10)/2,
            height: 0,
            border: `${parseInt(props.secondsProps.lineWidth,10)/2}px solid transparent`,
            borderLeft: 'none',
            borderRight: 'none',
            transform: `rotate(${getDegByNumber(props.number)}deg)`,
            transformOrigin: '0% 50%'
        },
        lineInner: {
            position: 'absolute',
            left: 'auto',
            right: 0,
            top: -1 * parseInt(props.allNumbersLineWidth,10)/2,
            bottom: 0,
            display: 'inline-block',
            width: parseInt(props.allNumbersLineLength,10),
            height: parseInt(props.allNumbersLineWidth,10),
            backgroundColor: '#1e69de'
        }
    }
    
    if (props.showSecondsLines) {
        return <div id={ uniqId } className={props.number} style={ style.lineHolder }><div style={ style.lineInner }></div></div>
    } else return false
}

export { SecondLine };

import React from 'react'

const SmallNumberLine = props => {

    const getDegByNumber = (number) => {
		if (isNaN(number) ||  typeof number === 'undefined') {
			number = this.state.currentTime.getSeconds()
		}
	
		return (number/60)*360 - 90
	}
    const uniqId = `smallNumberLine-${props.number}`

    const style = {
        lineHolder: {
            position: 'absolute',
            top: parseInt(props.clockSize, 10)/2 - parseInt(props.smallNumberLineWidth,10)/2,
            left: parseInt(props.clockSize, 10)/2,
            width: parseInt(props.clockSize, 10)/2,
            height: 0,
            border: `${parseInt(props.smallNumberLineWidth,10)/2}px solid transparent`,
            borderLeft: 'none',
            borderRight: 'none',
            transform: `rotate(${getDegByNumber(props.number)}deg)`,
            transformOrigin: '0% 50%'
        },
        lineInner: {
            position: 'absolute',
            left: 'auto',
            right: 0,
            top: -1 * parseInt(props.smallNumberLineWidth,10)/2,
            bottom: 0,
            display: 'inline-block',
            width: parseInt(props.smallNumberLineLength,10),
            height: parseInt(props.smallNumberLineWidth,10),
            backgroundColor: '#1e69de'
        }
    }
    
    if (props.showSmallNumberLines) {
        return <div id={ uniqId } style={ style.lineHolder }><div style={ style.lineInner }></div></div>
    } else return false
}

export { SmallNumberLine };

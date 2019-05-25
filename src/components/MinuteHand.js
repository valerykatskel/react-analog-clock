import React, { Component } from 'react'

const MinuteHand = props => {

        const getDegByMinutes = () => (props.currentTime.getMinutes()/60)*360 - 90
        
        const getMinuteHandWidth = () => parseInt(props.minuteHandWidth,10)/100 * parseInt(props.clockSize, 10)/2

	const styles = {
                position: 'absolute',
                top: parseInt(props.clockSize, 10)/2,
                left: parseInt(props.clockSize, 10)/2,
                border: '1px solid red',
                width: getMinuteHandWidth(),
                height: 4,
                transform: `rotate(${getDegByMinutes()}deg)`,
                transformOrigin: '0% 50%',
                backgroundColor: '#d6d6d6',
                zIndex: 10
	}
	return <div className="minute-hand" style={ styles }></div>
}

export { MinuteHand };

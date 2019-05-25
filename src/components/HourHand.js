import React, { Component } from 'react'

const HourHand = props => {
    const getDegByHours = () => (props.currentTime.getHours()/12)*360 - 90

    const getHourHandWidth = () => parseInt(props.hourHandWidth,10)/100 * parseInt(props.clockSize, 10)/2

    const styles = {
        position: 'absolute',
        top: parseInt(props.clockSize, 10)/2,
        left: parseInt(props.clockSize, 10)/2,
        border: '1px solid red',
        width: getHourHandWidth(),
        height: 6,
        transform: `rotate(${getDegByHours()}deg)`,
        transformOrigin: '0% 50%',
        backgroundColor: '#d6d6d6',
        zIndex: 10
	}
	return <div className="hour-hand" style={ styles }></div>
}

export { HourHand };

import React from 'react'
import { AnalogClock } from "./components/index";

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            size: 250,                          // size of clock in px (diameter)
            clockInnerBigCircleSize: 80,        // size of inner clock face area in from clock size
            clockInnerSmallCircleSize: 7,      // size of start point of all hands in % from clock size
            showBigNumberLines: true,           // show lines for big numbers such as 3,6,9,12
            bigNumberLineWidth: 8,             // width of lines near by big numbers (12, 3, 6, 9) in px
            bigNumberLineLength: 20,            // length of lines near by big numbers (12, 3, 6, 9) in px
            showSmallNumberLines: true,         // show lines for small numbers such as 1,2,4,5,7,8,10,11    
            smallNumberLineWidth: 3,            // width of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in px
            smallNumberLineLength: 8,           // length of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in px
            hourHandWidth: 55,                  // size of hour hand in %
            minuteHandWidth: 75,                // size of minute hand in %
            showSecondHand: true,               // show second hand or not
            showClockLines: true,               // show seconds lines or not on the clock face
            seconds: {                             
                handLength: 95,                 // length of second hand in % from radius of clock face
                handWidth: 2,                   // width of second hand in px
                lineLength: 4,                  // lenght of lines for seconds (0...59) in %
                lineWidth: 1                    // width of lines for seconds (0...59) in %
            }
        }
    }

    handleSizeOfClockChange(event) {
        this.setState({
            size: event.target.value
        })
    }

    handleShowBigNumberLines(event) {
        this.setState({
            showBigNumberLines: event.target.checked
        })
    }

    handleBigNumberLinesWidthChange(event) {
        this.setState({
            bigNumberLineWidth: event.target.value
        })
    }

    handleShowSecondHandChange(event) {
        this.setState({
            showSecondHand: event.target.checked
        })
    }

    handleShowClockLinesChange(event) {
        this.setState({
            showClockLines: event.target.checked
        })
    }

    render() {
        let clockWrapperStyles = {
            textAlign: 'center'
        }  
        
        return <div style={ clockWrapperStyles }>
            <div className="my-5">
                <div  style={ {width: '100%', textAlign: 'left'} }>
                    <label htmlFor="customRange1" style={ {verticalAlign: 'middle'} }>Size of clock: </label>
                    <input type="range" style={ {verticalAlign: 'middle'} } min="150" value={ this.state.size } max="400" className="custom-range" id="customRange1" onChange={ this.handleSizeOfClockChange.bind(this) } />
                </div>
                <div  style={ {width: '100%', textAlign: 'left'} }>
                    <label htmlFor="cbShow1" style={ {verticalAlign: 'middle'} }>Show big number lines: </label>
                    <input type="checkbox" style={ {verticalAlign: 'middle'} }className="custom-cb" id="cbShow1" checked={ this.state.showBigNumberLines } onChange={ this.handleShowBigNumberLines.bind(this) } />
                </div>
                <div  style={ {width: '100%', textAlign: 'left'} }>
                    <label htmlFor="customRange2" style={ {verticalAlign: 'middle'} }>Big number lines width: </label>
                    <input type="range" style={ {verticalAlign: 'middle'} } min="1" value={ this.state.bigNumberLineWidth } max="8" className="custom-range" id="customRange2" onChange={ this.handleBigNumberLinesWidthChange.bind(this) } />
                </div>
                <div  style={ {width: '100%', textAlign: 'left'} }>
                    <label htmlFor="cbShow2" style={ {verticalAlign: 'middle'} }>Show second hand: </label>
                    <input type="checkbox" style={ {verticalAlign: 'middle'} }className="custom-cb" id="cbShow2" checked={ this.state.showSecondHand } onChange={ this.handleShowSecondHandChange.bind(this) } />
                </div>
                <div  style={ {width: '100%', textAlign: 'left'} }>
                    <label htmlFor="cbShow3" style={ {verticalAlign: 'middle'} }>Show clock lines: </label>
                    <input type="checkbox" style={ {verticalAlign: 'middle'} }className="custom-cb" id="cbShow3" checked={ this.state.showClockLines } onChange={ this.handleShowClockLinesChange.bind(this) } />
                </div>
            </div>
			< AnalogClock { ...this.state } />
		</div>
	}
}

export default App;

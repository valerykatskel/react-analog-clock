import React from 'react'
import { AnalogClock } from "./components/AnalogClock";

class App extends React.Component {
    
    render() {
        let clockWrapperStyles = {
            textAlign: 'center'
        }  
        
        const clockParams = {
            size: 400,                          // size of clock in px
            clockInnerBigCircleSize: 360,       // size of inner clock face area in px
            clockInnerSmallCircleSize: 30,      // size of start point of all hands in px
            bigNumbersLineSize: 12,             // size of lines near by big numbers (12, 3, 6, 9) in %
            bigNumbersLineWidth: 12,            // width of lines near by big numbers (12, 3, 6, 9) in %
            smallNumbersLineSize: 5,            // size of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in %
            smallNumbersLineWidth: 5,           // width of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in %
            hourHandWidth: 55,                  // size of hour hand in %
            minuteHandWidth: 75,                // size of minute hand in %
            seconds: {
                showHand: false,                // show second hand or not             
                handWidth: 95,                  // size of second hand in %
                showLines: false,               // show seconds lines or not on the clock face
                lineSize: 2,                    // size of lines for seconds (0...59) in %
                lineWidth: 1                    // width of lines for seconds (0...59) in %
            }
        }
    
        return <div style={ clockWrapperStyles }>
			< AnalogClock { ...clockParams } />
		    </div>
	}
}

export default App;

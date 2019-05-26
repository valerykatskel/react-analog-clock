import React from 'react'
import { AnalogClock, NumberSlider } from "./components/index";

class App extends React.Component {
    
    render() {
        let clockWrapperStyles = {
            textAlign: 'center'
        }  
        
        const settings = {
            size: 500,                          // size of clock in px (diameter)
            clockInnerBigCircleSize: 360,       // size of inner clock face area in px
            clockInnerSmallCircleSize: 30,      // size of start point of all hands in px
            showBigNumberLines: true,           // show lines for big numbers such as 3,6,9,12
            bigNumberLineWidth: 15,              // width of lines near by big numbers (12, 3, 6, 9) in px
            bigNumberLineLength: 20,            // length of lines near by big numbers (12, 3, 6, 9) in px
            showSmallNumberLines: true,         // show lines for small numbers such as 1,2,4,5,7,8,10,11    
            smallNumberLineWidth: 3,            // width of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in px
            smallNumberLineLength: 8,          // length of lines near by small numbers (1, 2, 4, 5, 7, 8, 10, 11) in px
            hourHandWidth: 55,                  // size of hour hand in %
            minuteHandWidth: 75,                // size of minute hand in %
            seconds: {
                showHand: true,                 // show second hand or not             
                handLength: 95,                 // length of second hand in % from radius of clock face
                handWidth: 2,                   // width of second hand in px
                showLines: true,                // show seconds lines or not on the clock face
                lineLength: 4,                  // lenght of lines for seconds (0...59) in %
                lineWidth: 1                    // width of lines for seconds (0...59) in %
            }
        }
    
        return <div style={ clockWrapperStyles }>
			< AnalogClock { ...settings } />
            < NumberSlider />
		    </div>
	}
}

export default App;

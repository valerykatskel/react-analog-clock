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
      bigNumbersLineWidth: 12,             // width of lines near by big numbers (12, 3, 6, 9) in %
      hourHandWidth: 55,                  // size of hour hand in %
      minuteHandWidth: 75,                // size of minute hand in %
      secondHandWidth: 95                 // size of second hand in %
    }
    
    return <div style={ clockWrapperStyles }>
			< AnalogClock { ...clockParams } />
		</div>
	}
}

export default App;

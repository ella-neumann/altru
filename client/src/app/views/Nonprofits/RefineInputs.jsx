import React from "react";
import { SimpleCard } from "matx";
import SwitchButton from "./SwitchButton"

class RefineInputs extends React.Component {
    
    render() {
      return (
        <SimpleCard title="Refine"> 
            <p>&nbsp;Donate 
              &emsp;&emsp;&ensp; Volunteer 
              &emsp;&emsp; Local  
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Zip Code
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Time Commitment
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Tags
            </p>
            <SwitchButton></SwitchButton>
            <SwitchButton></SwitchButton>
            <SwitchButton></SwitchButton>
            <input type="text" placeholder="Zip Code" name="zipCode"
            style = {{marginRight: '30px'}}/>
            <input type="text" placeholder = "Time Commitment" name ="timeComm"
            style = {{marginRight: '30px'}}/>
            <input type="text" placeholder = "Tags" name ="tags"
            style = {{marginRight: '30px'}}/>
        </SimpleCard>
      );
    }
  }

export default RefineInputs;
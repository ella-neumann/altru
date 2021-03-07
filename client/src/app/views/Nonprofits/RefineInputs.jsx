import React from "react";
import { SimpleCard } from "matx";

class RefineInputs extends React.Component {
    
    render() {
      return (
        <SimpleCard title="Refine"> 
            <input type="text" placeholder="Zip Code" name="search"/>
        </SimpleCard>
      );
    }
  }

export default RefineInputs;
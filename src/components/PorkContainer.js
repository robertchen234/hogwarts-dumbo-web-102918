import React from 'react'
import PorkCard from './PorkCard'

const PorkContainer = props => {

    const hogsList = props.hogsList.map(hog => (
      <PorkCard 
      key={hog.name}
      hog={hog}
      />
    ))

    return (  
      <div className="ui grid container">
        {hogsList}
      </div>)
    
  
   }

export default PorkContainer;
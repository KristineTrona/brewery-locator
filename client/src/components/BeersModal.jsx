import React from 'react'

export const BeersModal = (props) =>{
  return (

  // Modal with the list of beers:

    <div className="modal" id="beersModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Beer List:</h5>
            <button className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">

            {/* If the database contains information about beers at this brewery show a list of beers: */}
            
            {props.selectedBrewery && props.selectedBrewery.beers.length > 0 &&
              <ul> {props.selectedBrewery.beers.map(beer => 
                <li key={beer.id}>{beer.name} -  {beer.alcohol}%, {beer.style}</li>)}
              </ul>
            }
            
            {/* If there are no beers connected to this brewery, show the following: */}

            {props.selectedBrewery && props.selectedBrewery.beers.length === 0 &&
              <div>
                Sorry, we do not have any information about the beers at this brewery
              </div>
            }
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

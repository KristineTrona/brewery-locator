import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_BREWERIES = 'LOAD_BREWERIES'


const loadBreweries = (breweries) => ({
  type: LOAD_BREWERIES,
  payload: breweries.breweries
})

export const getBreweries = () => (dispatch) => {
  request
    .get(`${baseUrl}/breweries`)
    .then(result => dispatch(loadBreweries(result.body)))
    .catch(err => console.error(err))
}
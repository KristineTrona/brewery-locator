import {LOAD_BREWERIES} from '../actions/breweries'

export default function (state = [], action={}){
  switch (action.type){
    case LOAD_BREWERIES:
      return [...state = action.payload]
    default:
      return state
  }
}
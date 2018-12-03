import {Controller, Get} from 'routing-controllers'
import Brewery from './entity';


@Controller()
export default class BreweryController {
    
  @Get('/breweries')
  async getBreweries() {
    const breweries = await Brewery.find()
    return { breweries}
  }

}

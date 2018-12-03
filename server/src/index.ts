import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import BreweryController from './breweries/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    BreweryController,
   ]
})

setupDb()
.then(_ =>
app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))

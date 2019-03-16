import * as LocationController from '../controller';
import {
  returnJsonErrors,
  validateContact,
  validateLocation
} from '../middleware';

const myLocation = new LocationController.default();

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the population API');
  });
  app.post('/api/v1/locations', validateContact, returnJsonErrors, validateLocation, myLocation.newLocation);
  app.put('/api/v1/locations/:locationId', myLocation.updateLocation);
  app.get('/api/v1/locations', myLocation.getAllLocation);
  app.delete('/api/v1/locations/:locationId', myLocation.deleteLocation);
};

export default routes;

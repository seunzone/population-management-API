import Location from '../model';

/**
 * @class locationController
 *
 * @export
 *
 */
export default class locationController {
  /**
     * @description - Adds a new location
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof locationController
     *
     * @returns {object} Class instance
     */
  async newLocation(req, res) {
    try {
      const { totalMale, totalFemale } = req.body;

      const newLocation = new Location(req.body);
      // Assign total residents
      newLocation.totalPopulation = parseInt(totalMale, 10) + parseInt(totalFemale, 10);

      // Save new location
      const location = await newLocation.save();

      return res.status(201).json(location);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  /**
     * @description - updates location
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof locationController
     *
     * @returns {object} Class instance
     */
  async updateLocation(req, res) {
    try {
      // Get locatiom id from params
      const { locationId } = req.params;
      await Location.findByIdAndUpdate(locationId, { $set: req.body });

      const location = await Location.findById(locationId);

      // Assign total residents
      location.totalPopulation = parseInt(location.totalMale, 10) + parseInt(location.totalFemale, 10);

      // save update
      await location.save();

      return res.status(200).json(location);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  /**
     * @description - get all location
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof locationController
     *
     * @returns {object} Class instance
     */
  async getAllLocation(req, res) {
    try {
      const locations = await Location.find();

      return res.status(201).json(locations);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  /**
     * @description - delete location
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof locationController
     *
     * @returns {object} Class instance
     */
  async deleteLocation(req, res) {
    try {
      const { locationId } = req.params;
      const location = await Location.findByIdAndRemove(locationId);

      // Check if contact exist
      if (!location) {
        return res.status(404).send({ message: 'Location does not exist' });
      }
      return res.status(200).send({ message: 'Location successfully deleted' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

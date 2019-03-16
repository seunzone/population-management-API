import Location from '../model';

/**
 * @class locationController
 *
 * @export
 *
 */
export default class locationController {
  /**
     * @description - Adds a new contact
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
}

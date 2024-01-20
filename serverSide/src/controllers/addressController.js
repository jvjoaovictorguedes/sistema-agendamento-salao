const Address = require('../models/address');

const InsertAddress = async (req, res) => {
  try{
    const { id_people, address_type, public_place, number_address, complement, neighborhood, city, zip_code, state } = req.body

    
    const address = await Address.create({id_people, address_type, public_place, number_address, complement, neighborhood, city, zip_code, state});
    res.json({ address });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
}

const PullAddress = async (req, res) => {
  try {
    const { id_people } = req.params;
    // const existingPeople = await People.findByPk(id_people);
    // if (!existingPeople) {
    //   return res.status(404).json({ error: true, message: 'People not found.' });
    // }
    const addresses = await Address.findAll({
      where: {
        id_people: id_people,
      },
    });
    res.json({ addresses });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}


module.exports = {
  InsertAddress,
  PullAddress
}
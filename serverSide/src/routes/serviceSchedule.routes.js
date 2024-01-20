const express = require("express");
const router = express.Router();
const Scheduling = require("../models/scheduling");
const People = require("../models/people");
const ServiceSchedule = require("../models/serviceSchedule");
const Service = require("../models/service");

router.post("/", async (req, res) => {
  try {
    const { id_service, id_scheduling } = req.body;
    // const existingProcedure = await Procedure.findByPk(id_procedure)
    // const existingScheduling = await Scheduling.findByPk(id_scheduling)
    // if (!existingProcedure || !existingScheduling) {
    //   return res.status(404).json({ error: true, message: 'Procedure not found.' });
    // }
    // console.log(id_procedure, id_scheduling)
    const serviceSchedule = await ServiceSchedule.create({
      id_service,
      id_scheduling,
    });
    res.json({ serviceSchedule });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get("/:id_client", async (req, res) => {
  try {
    const { id_client } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_client: id_client,
      },
    });
    const find_name_client = async () => {
      const { id_people_client } = scheduling[0];
      const people_client = await People.findAll({
        where: {
          id_people: id_people_client,
        },
      });
      const { name } = people_client[0];
      return name;
    };

    const find_name_professional = async () => {
      const { id_people_professional } = scheduling[0];
      const people_professional = await People.findAll({
        where: {
          id_people: id_people_professional,
        },
      });
      const { name } = people_professional[0];
      return name;
    };

    const find_service = async () => {
      const { id_scheduling } = scheduling[0];
      console.log(scheduling);
      const serviceSchedule = await ServiceSchedule.findAll({
        where: {
          id_scheduling,
        },
      });
      const { id_service } = serviceSchedule[0];
      const service = await Service.findAll({
        where: {
          id_service,
        },
      });
      const { service_name } = service[0];
      return service_name;
    };

    const { date, time } = scheduling[0];

    const name_client = await find_name_client();
    const name_professional = await find_name_professional();
    const name_service = await find_service();
    const date_pro = new Date(date);
    const day = date_pro.getDate();
    const month = date_pro.getMonth() + 1;
    const year = date_pro.getFullYear();
    const formatted_date = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;
    const [hours, minutes] = time.split(":").map(Number);
    const formatted_time = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`

    res.json({
      name_client,
      name_professional,
      name_service,
      date: formatted_date,
      time: formatted_time,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;

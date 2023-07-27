const { ActualWorkHour } = require('../models');
const { Op } = require('sequelize');
// const axios = require('axios');

exports.getOneEngineerWorksInDay = async (req, res, next) => {
    const { date, employee_id } = req.body;
    try {
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        const workHours = await ActualWorkHour.findAll({
            where: {
                date: {
                    [Op.gte]: startDate,
                    [Op.lt]: endDate
                },
                engineer_id: employee_id
            }
        });
        return res.status(200).json(workHours);
    } catch (error) {
        return res.status(500).json(error);
    }
}
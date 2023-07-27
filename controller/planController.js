const { Plan, Database1 } = require('../models');

exports.getAllPlans = async (req, res, next) => {
    try {
        const plans = await Plan.findAll({
            where: {
                parent_id: 0,
            }
        });
        return res.status(200).json(plans);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOnePlan = async (req, res, next) => {
    const { id } = req.params;
    try {
        const plans = await Plan.findAll({
            attributes: ['id', 'name', 'parent_id'],
            where: {
                p_id: id,
            }
        });
        return res.status(200).json(plans);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storePlan = async (req, res, next) => {
    try {
        const [result, metaData] = await Database1.query('INSERT INTO plans (id, name, parent_id) VALUES :plans', {
            replacements: { 
                plans: req.body.stages,
            },
        });
        const lastRecord = await Plan.findOne({
            attributes: ['p_id'],
            order: [
                ['plan_id', 'DESC'], 
            ]
        });
        await Database1.query('ALTER TABLE plans CHANGE p_id p_id INT(11) NOT NULL DEFAULT :p_id', {
            replacements: { 
                p_id: lastRecord.p_id + 1,
            },
        });
        return res.status(200).json({massage: `plan added sucessfully`, plan_id: lastRecord.p_id});
    } catch (error) {
        return res.status(500).json(error);
    }
};






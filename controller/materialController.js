const { Material } = require('../models');

// todo return the rate of material
exports.getAllMarerials = async (req, res, next) => {
    try {
        const materials = await Material.findAll({
            include: 'contractor'
        });
        return res.status(200).json(materials);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// todo return the rate of material
exports.getOneMarerial = async (req, res, next) => {
    let { id } = req.params;
    try {
        const material = await Material.findByPk(id);
        return res.status(200).json(material);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// todo return the rate of material
exports.getCategoryMarerials = async (req, res, next) => {
    let { category_id } = req.params;
    try {
        const materials = await Material.findAll({
            where: {
                category_id: category_id
            }
        });
        return res.status(200).json(materials);
    } catch (error) {
        return res.status(500).json(error);
    }
};

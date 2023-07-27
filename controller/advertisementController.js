const { Advertisement } = require('../models');

exports.getAllAdvertisements = async (req, res, next) => {
    try {
        const advertisements = await Advertisement.findAll({
            where: {
                status: true,
            }
        });
        return res.status(200).json(advertisements);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const { OrderDocument } = require('../models');

exports.storeOrderDocument = async (req, res, next) => {
    let { engineer_order_id, comment } = req.body;
    try {
            const document = await OrderDocument.create({
                document: req.file.path,
                comment: comment,
                engineer_order_id: engineer_order_id
            });
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json(error);
    }
};
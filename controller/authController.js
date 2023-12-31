const { Manager, Engineer } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login =  (req, res, next) => {
    const { email, password, type } = req.body;
    try {
        if (type === "manager") {
            managerLogin(email, password, res);
        } else if (type === "engineer") {
            enginnerLogin(email, password, res);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.engineerlogout = async (req, res, next) => {
    let { id } = req.params;
    try {
        const engineer = await Engineer.findByPk(id);
        engineer.online = false;
        engineer.save();
        return res.status(200).json({ engineer_online: engineer.online });
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.managerlogout = async (req, res, next) => {
    let { id } = req.params;
    try {
        const manager = await Manager.findByPk(id);
        manager.online = false;
        manager.save();
        return res.status(200).json({ manager_online: manager.online });
    } catch (error) {
        return res.status(500).json(error);
    }
};



async function managerLogin(email, password, res) {
    const manager = await Manager.findOne({
        where: {
            email: email
        }
    });
    if (!manager) {
        return res.status(401).json({massage: "email not exists"});
    } else {
        if (manager.password === password) {
            manager.online = true;
            manager.save();
            const token = jwt.sign({ id: manager.manager_id.toString(), email: manager.email, password: manager.password }, process.env.SECRET_KEY, {
            expiresIn: "10h",
            });
            return res.status(200).json({token: token, user: manager});
        }
        return res.status(401).json({massage: "password is not valid"});
    }
};

async function enginnerLogin(email, password, res) {
    const engineer = await Engineer.findOne({
        where: {
            email: email
        }
    });
    if (!engineer) {
        return res.status(401).json({massage: "email not exists"});
    } else {
        if (engineer.password === password) {
            engineer.online = true;
            engineer.save();
            const token = jwt.sign({ id: engineer.engineer_id.toString(), email: engineer.email, password: engineer.password }, process.env.SECRET_KEY, {
            expiresIn: "10h",
            });
            return res.status(200).json({token: token, user: engineer});
        }
        return res.status(401).json({massage: "password is not valid"});
    }
};
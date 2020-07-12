const Appointment = require('../models/appointment');

exports.create = function (req, res) {

    const newAppointment = {
        name: req.body.name,
        carModel: req.body.carModel,
        date: req.body.date,
        time: req.body.time
    };
    const saveAppointment = new Appointment(newAppointment);
    saveAppointment.save(function (err, appointment) {
        if (err) {
            res.json({success: false, result: [], messages: [err.message]});
        } else {
            res.json({success: true, result: appointment, messages: []});
        }
    });
};

exports.update = function (req, res) {
    const updatedAppointment = {
        name: req.body.name,
        carModel: req.body.carModel,
        date: req.body.date,
        time: req.body.time
    };

    Appointment.update({"_id": req.body._id}, {$set: updatedAppointment},
        function (err, appointment) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: appointment, messages: []});
            }
        }
    )
};

exports.delete = function (req, res) {
    Appointment.remove({"_id": req.params.id},
        function (err, appointment) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: appointment, messages: []});
            }
        }
    )
};

exports.read = function (req, res) {

    Appointment.find({},
        function (err, appointment) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: appointment, messages: []});
            }
        }
    )
};

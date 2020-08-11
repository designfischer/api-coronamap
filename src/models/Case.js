const mongoose = require('mongoose')
const PointSchema = require('./Utils/PointSchema')

const Schema = new mongoose.Schema({
    fever: {
        type: Boolean,
        required: true,
    },
    cough: {
        type: Boolean,
        required: true,
    },
    smell: {
        type: Boolean,
        required: true,
    },
    fatigue: {
        type: Boolean,
        required: true,
    },
    coryza: {
        type: Boolean,
        required: true,
    },
    anorexia: {
        type: Boolean,
        required: true,
    },
    chestPain: {
        type: Boolean,
        required: true,
    },
    breathe: {
        type: Boolean,
        required: true,
    },
    pain: {
        type: Boolean,
        required: true,
    },
    nause: {
        type: Boolean,
        required: true,
    },
    confirmation: {
        type: Boolean,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date, 
    },
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('Case', Schema)
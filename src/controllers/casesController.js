const Case = require('../models/Case')

module.exports = {

    async create(req, res) {

        const {
            fever,
            cough,
            smell,
            fatigue,
            coryza,
            anorexia,
            chestPain,
            breathe,
            pain,
            nause,
            confirmation,
            city,            
            latitude,
            longitude
        } = req.body

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        try {
            const createdCase = await Case.create({
                fever,
                cough,
                smell,
                fatigue,
                coryza,
                anorexia,
                chestPain,
                breathe,
                pain,
                nause,
                confirmation,
                city,  
                created_at: Date.now(),              
                location
            })

            return res.status(201).send(createdCase)

        } catch(err) {
            return res.status(400).send(err)
        }
    },

    async indexAll(req, res) {

        const { longitude, latitude, distance } = req.query

        const maxDistance = distance*1000

        try {

            const allCases = await Case.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: maxDistance
                    }
                }
            })

            return res.status(200).send(allCases)

        } catch(err) {
            return res.status(400).send(err)
        }
    }

}
const { required } = require('joi')
const Joi=require('joi')

const addPostSchema = Joi.object({
    title: Joi.string().alphanum().min(3).max(30).required(),
    content: Joi.string().alphanum().min(3).max(200).required(),
})

module.exports = {addPostSchema}
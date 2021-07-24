const joi = require('joi');

export function validateContactUs(form) {
    const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        message: joi.string().required()
    });
    const validation = schema.validate(form);
    return validation;
}
'use strict';

/**
 * actus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::actus.actus');

const Property = require('./Property');

module.exports = Property.extend({

  defaults: Object.assign({}, Property.prototype.defaults, {
    // Array of units, eg. ['px', '%']
    units: [],

    // Selected unit, eg. 'px'
    unit: '',

    // Integer value steps
    step: 1,

    // Minimum value
    min: '',

    // Maximum value
    max: '',
  }),

  getFullValue() {
    let value = this.get('value') + this.get('unit');
    return Property.prototype.getFullValue.apply(this, [value]);
  },

});

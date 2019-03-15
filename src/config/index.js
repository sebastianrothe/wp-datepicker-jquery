// TODO: inject this object with locale support
const tourHTMLEntities = {
  disabled: {
    title: 'Fully booked',
    tooltip: 'The tour is fully booked on this date.',
    style: 'full'
  },

  noRegularTour: {
    title: 'Not available',
    tooltip: 'The tour is not available on this date.',
    style: 'not-available'
  }
}

export default {
  locale: 'de',
  timeFormatString: '',
  classNameForInjection: '',
  allowOnlyWeekends: false,
  development: true,
  dataApi:
    '//hauntedleipzig.de/wordpress/wp-content/themes/hauntedleipzig/js/data.txt',
  dataApiDev: 'data/data.txt',
  tourHTMLEntities: tourHTMLEntities,
  queryElement: '#contact-form-66 input.text'
}

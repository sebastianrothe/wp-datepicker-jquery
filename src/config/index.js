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
  testing: true,
  allowOnlyWeekends: false,
  dataApi:
    'hauntedleipzig.de/wordpress/wp-content/themes/hauntedleipzig/js/data.txt',
  tourHTMLEntities: tourHTMLEntities
}

import config from '../../config'
import { extend, addClass } from '../../helper/polyfills'
import DataProvider from '../../services/DataProvider'
import DateChecker from '../../services/DateChecker'
import { toGermanTimeString } from '../../locale/de-DE'
import i18n from '../../i18n'

import './style.css'

export default class App {
  init() {
    console.log(config.testing)

    let dateChecker = new DateChecker()
    const dataProvider = new DataProvider()

    const finishedLoadingDates = dates => {
      dateChecker = new DateChecker(disabledDates)
    }
    const disabledDates = dataProvider.fetch(finishedLoadingDates)

    // get the 1st inputfield
    const [datepickerInjectionPoint] = document.querySelectorAll(
      config.queryElement
    )

    if (!datepickerInjectionPoint) {
      console.warn('Could not find injection point for the datepicker.')
      return
    }

    // inject the datepicker
    datepickerInjectionPoint.datepicker({
      // minDate: today
      minDate: 0,
      // is this day already fully booked ?
      beforeShowDay: dateChecker.isAvailable
    })

    // set datepicker input field to readonly
    addClass(datepickerInjectionPoint, 'readonly')
    datepickerInjectionPoint.prop('readonly', true)
  }

  // augment the jQuery Datepicker with a footer
  renderFooterOnDatepicker() {
    const htmlEntities = config.tourHTMLEntities

    extend(jQuery.datepicker, {
      _generateHTMLOriginal: jQuery.datepicker._generateHTML,

      generateFooter: legendOptions => {
        const lastRefreshedTime = toGermanTimeString(new Date())

        let html = '<div class="ui-datepicker-footer">'
        const items = []

        // validate argument
        legendOptions = legendOptions || []

        // go through legendOptions and map properties to html code
        const length = legendOptions.length
        if (length) {
          for (let i = 0; i < length; i++) {
            // use direct assignment in this case because we're micro-optimizing.
            const legend = legendOptions[i]

            // class=color will always be assigned
            const item = `<li><div class="color ${legend.style}" /><div>${
              legend.title
            }
            </div></li>`
            items.push(item)
          }

          html += `<ul class="legend">${items.join(
            ''
          )}</ul><hr class="clear" />`
        }

        html += `<div class="lastRefreshDate">${
          i18n.strings.TEXT_LAST_REFRESHED
        } ${lastRefreshedTime}</div></div>`
        return html
      },

      _generateHTML: inst => {
        const legendOptions = []
        legendOptions.push(htmlEntities.disabled)

        const footerHTML = this.generateFooter(legendOptions)
        return this._generateHTMLOriginal(inst) + footerHTML
      }
    })
  }
}

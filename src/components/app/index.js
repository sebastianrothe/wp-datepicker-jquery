/* import Util from '../services/util'
import Provider from '../services/dataprovider'
import Availability from '../services/availability' */

import config from '../../config'
import { extend } from '../../helper/polyfills'
import DataProvider from '../../services/DataProvider'
import DateChecker from '../../services/DateChecker'

import './style.css'
export default class App {
  init() {
    console.log(config.testing)

    const dataProvider = new DataProvider()
    const disabledDates = dataProvider.fetch()
    const dateChecker = DateChecker(disabledDates)

    // get the 1st inputfield
    const $datepickerInjectionPoint = jQuery('#contact-form-66 input.text').eq(
      0
    )
    if (!$datepickerInjectionPoint.length) {
      console.warn('Could not find injection point for the datepicker.')
      return
    }

    // inject the datepicker
    $datepickerInjectionPoint.datepicker({
      // minDate: today
      minDate: 0,
      // is this day already fully booked ?
      beforeShowDay: dateChecker.isAvailable
    })

    // set datepicker input field to readonly
    const setReadonlyFlag = (function(element) {
      element.addClass('readonly')
      element.prop('readonly', true)
    })($datepickerInjectionPoint)
  }

  // augment the jQuery Datepicker with a footer
  renderFooterOnDatepicker() {
    const htmlEntities = tourHTMLEntities()

    extend(jQuery.datepicker, {
      _generateHTMLOriginal: jQuery.datepicker._generateHTML,

      generateFooter: function(legendOptions) {
        // TODO: refactor to support locale
        const TEXT_LAST_REFRESHED = 'Updated: Today, at'
        const lastRefreshedTime = util.toLocalTimeString(new Date())

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

        html += `<div class="lastRefreshDate">${TEXT_LAST_REFRESHED} ${lastRefreshedTime}</div></div>`
        return html
      },

      _generateHTML: function(inst) {
        const legendOptions = []
        legendOptions.push(htmlEntities.disabled)

        const footerHTML = this.generateFooter(legendOptions)
        return this._generateHTMLOriginal(inst) + footerHTML
      }
    })
  }
}

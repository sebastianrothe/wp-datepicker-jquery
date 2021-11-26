import config from "../../config"
import { addClass } from "../../helper/polyfills"
import { toGermanTimeString } from "../../locale/de-DE"
import i18n from "../../i18n"
import tourEntities from "../tour/entities"

const setRegionToGerman = () => {
  // from https://raw.githubusercontent.com/jquery/jquery-ui/main/ui/i18n/datepicker-de.js
  jQuery.datepicker.regional.de = {
    closeText: "Schließen",
    prevText: "&#x3C;Zurück",
    nextText: "Vor&#x3E;",
    currentText: "Heute",
    monthNames: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    weekHeader: "KW",
    dateFormat: config.timeFormatString,
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  }
  jQuery.datepicker.setDefaults(jQuery.datepicker.regional.de)
}

const enableDatepicker = (element, dateChecker, handleOpen) => {
  const $element = jQuery(element)
  if (!$element) {
    console.warn("Could not get jQuery object from element")
    return
  }

  // inject the datepicker
  $element.datepicker({
    // minDate: today
    minDate: 0,
    beforeShow: handleOpen,
    // is this day already fully booked ?
    beforeShowDay: dateChecker.isAvailable,
  })
}

const setReadonly = (element) => {
  addClass(element, "readonly")
  element.setAttribute("readonly", true)
}

const enableFooter = () => {
  Object.assign(jQuery.datepicker, {
    _generateHTMLOriginal: jQuery.datepicker._generateHTML,

    generateFooter: (legendOptions) => {
      const lastRefreshedTime = toGermanTimeString(new Date())
      const items = []
      let html = '<div class="ui-datepicker-footer">'

      // validate argument
      legendOptions = legendOptions || []

      // go through legendOptions and map properties to html code
      const length = legendOptions.length
      if (length) {
        for (let i = 0; i < length; i++) {
          // use direct assignment in this case because we're micro-optimizing.
          const legend = legendOptions[i]

          // class=color will always be assigned
          const item = `<li>
              <div class="color ${legend.style}"></div>
              <span>${legend.title}</span>
            </li>`
          items.push(item)
        }

        html += `<ul class="legend">${items.join("")}</ul>`
      }

      html += `<div class="last-refresh-date">${i18n.strings.TEXT_LAST_REFRESHED} ${lastRefreshedTime}</div></div>`
      return html
    },

    _generateHTML: function (inst) {
      const legendOptions = []
      legendOptions.push(tourEntities.disabled)

      const footerHTML = this.generateFooter(legendOptions)
      return this._generateHTMLOriginal(inst) + footerHTML
    },
  })
}

export default function datepicker(input, dateChecker, handleOpen) {
  setRegionToGerman()
  enableFooter()
  enableDatepicker(input, dateChecker, handleOpen)
  setReadonly(input)
}

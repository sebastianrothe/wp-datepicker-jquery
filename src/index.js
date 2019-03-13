import App from './components/app'
import config from './config'
import { ready } from './helper/polyfills'

ready(function() {
  const app = new App(config)
  app.init()
  app.renderFooterOnDatepicker()
})

jQuery.datepicker.regional['de'] = {
  closeText: 'Schließen',
  prevText: '&#x3C;Zurück',
  nextText: 'Vor&#x3E;',
  currentText: 'Heute',
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'
  ],
  dayNames: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
  ],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  weekHeader: 'KW',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
}
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['de'])
jQuery(document).ready(function() {
  var $datumseingabe = jQuery('div#contact-form-18 div input.text').filter(
    ':first'
  )
  $datumseingabe.datepicker({
    minDate: 0,
    beforeShowDay: isAvailableTourDate
  })
  $datumseingabe.addClass('ui-datepicker-readonly')
  $datumseingabe.prop('readonly', true)
})

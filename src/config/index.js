// eslint-reason otherwise SNOWPACK_ENV doesn't work. See https://github.com/FredKSchott/snowpack/issues/3621
// eslint-disable-next-line no-unused-expressions
import.meta.hot

export default {
  locale: "de",
  timeFormatString: "dd.mm.yy",
  allowOnlyWeekends: false,
  dataApi: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_DATA_URL,
  queryElement:
    ".wpforms-container .wpforms-field-container .wpforms-field.datepicker input",
}

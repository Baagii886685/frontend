import moment from 'moment';

const DateFormattingPlugin = {
  install(Vue) {
    Vue.prototype.$formatDate = function (date, format = 'MMMM Do YYYY, h:mm:ss a') {
      return moment(date).format(format);
    };
  },
};

export default DateFormattingPlugin;

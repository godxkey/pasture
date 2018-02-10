const fn = {
  //日期字符串转日期
  formatStringToDate(value) {
    try {
      if (value == "") {
        return "";
      }
      var date = new Date(value);
      return date.Format("yyyy-MM-dd");
    } catch (ex) {
      return "";
    }
  },
  //日期字符串转时间
  formatStringToDateTime(value) {
    try {
      if (value == "") {
        return "";
      }
      var date = new Date(value);
      return date.Format("hh:mm");
    } catch (ex) {
      return "";
    }
  },
  //时间戳数字转日期字符串
  formatNumToDate(value) {
    try {
      var date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
      return date.Format("yyyy-MM-dd");
    } catch (ex) {
      return "";
    }
  },
  //时间戳数字转时间字符串
  formatNumToDateTime(value) {
    try {
      var date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
      return date.Format("hh:mm");
    } catch (ex) {
      return "";
    }
  }
};
Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
};
module.exports = {
  fn: fn
};

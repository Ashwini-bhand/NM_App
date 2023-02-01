export default class Helper {
  static Scale() {
    const winwidth = window.innerWidth;
    if (winwidth > 1366) {
      return 8;
    } else if (winwidth < 1366 && winwidth > 768) {
      return 7;
    } else if (winwidth < 768 && winwidth > 481) {
      return 6;
    } else return 4;
  }
  static TimeinMin(data) {
    var timearr = data.split(":");
    var time = +timearr[0] * 60 + +timearr[1];
    return time;
  }
  static Date(data) {
    let datearr = data.slice(0, 10).split("-");
    let date = datearr[2];
    let month = datearr[1];
    return date;
  }
}

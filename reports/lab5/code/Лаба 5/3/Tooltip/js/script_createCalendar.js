var getYearNow = new Date().getFullYear().toString();
var getMonthNow = new Date().getMonth().toString();
var getDayNow = new Date().getDate().toString();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var open = false;

document.getElementById("button_close").onclick = function () {
  if(open == true){
  document.getElementById("year").innerHTML = '';
  document.getElementById("month").innerHTML = '';
  document.getElementById("days").innerHTML = '';
  document.getElementById("choose_date").innerHTML = '';
  open = false;}

  document.getElementById("calendar").value = '';
  document.getElementById("calendar").placeholder = 'Choose date';
  getYearNow = new Date().getFullYear().toString();
  getMonthNow = new Date().getMonth().toString();
  getDayNow = new Date().getDate().toString();
}

document.getElementById("calendar").onclick = function () {
  open = true;

  if(new Date().daysInMonth()<parseInt(getDayNow))
    document.getElementById("1").onclick();

  if(getDayNow.length <2)
    getDayNow = "0" + getDayNow;
  getMonthNow = (parseInt(getMonthNow) + 1).toString();
  if(getMonthNow.length <2)
    getMonthNow = "0" + getMonthNow;

  document.getElementById("calendar").value = getDayNow + "." + getMonthNow + "." + getYearNow;
  getMonthNow = (parseInt(getMonthNow) - 1).toString();

  document.getElementById("year").innerHTML = createYear();
  document.getElementById("month").innerHTML = createMonth();
  document.getElementById("days").innerHTML = createDays(getYearNow, getMonthNow);

  getDayNow = parseInt(getDayNow).toString();
  document.getElementById(getDayNow).style.background = '#FF8C00';

  document.getElementById("choose_date").innerHTML = '<br><input type="button" value="Choose" id = "button_choose_date"></input><br>';

  document.getElementById("left_year").onclick = function () {
    getYearNow = (parseInt(getYearNow) - 1).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("right_year").onclick = function () {
    getYearNow = (parseInt(getYearNow) + 1).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("left_month").onclick = function () {
    getMonthNow = (parseInt(getMonthNow) - 1).toString();
    if(parseInt(getMonthNow) == -1){
      getMonthNow = (11).toString();
      getYearNow = (parseInt(getYearNow) - 1).toString();
    }
    document.getElementById("calendar").onclick();
  }

  document.getElementById("right_month").onclick = function () {
    getMonthNow = (parseInt(getMonthNow) + 1).toString();
    if(parseInt(getMonthNow) == 12){
      getMonthNow = (0).toString();
      getYearNow = (parseInt(getYearNow) + 1).toString();
    }
    document.getElementById("calendar").onclick();
  }

  document.getElementById("1").onclick = function () {
    getDayNow = (1).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("2").onclick = function () {
    getDayNow = (2).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("3").onclick = function () {
    getDayNow = (3).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("4").onclick = function () {
    getDayNow = (4).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("5").onclick = function () {
    getDayNow = (5).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("6").onclick = function () {
    getDayNow = (6).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("7").onclick = function () {
    getDayNow = (7).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("8").onclick = function () {
    getDayNow = (8).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("9").onclick = function () {
    getDayNow = (9).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("10").onclick = function () {
    getDayNow = (10).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("11").onclick = function () {
    getDayNow = (11).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("12").onclick = function () {
    getDayNow = (12).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("13").onclick = function () {
    getDayNow = (13).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("14").onclick = function () {
    getDayNow = (14).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("15").onclick = function () {
    getDayNow = (15).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("16").onclick = function () {
    getDayNow = (16).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("17").onclick = function () {
    getDayNow = (17).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("18").onclick = function () {
    getDayNow = (18).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("19").onclick = function () {
    getDayNow = (19).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("20").onclick = function () {
    getDayNow = (20).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("21").onclick = function () {
    getDayNow = (21).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("22").onclick = function () {
    getDayNow = (22).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("23").onclick = function () {
    getDayNow = (23).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("24").onclick = function () {
    getDayNow = (24).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("25").onclick = function () {
    getDayNow = (25).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("26").onclick = function () {
    getDayNow = (26).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("27").onclick = function () {
    getDayNow = (27).toString();
    document.getElementById("calendar").onclick();
  }

  document.getElementById("28").onclick = function () {
    getDayNow = (28).toString();
    document.getElementById("calendar").onclick();
  }

  if(new Date().daysInMonth()==29){
    document.getElementById("29").onclick = function () {
    getDayNow = (29).toString();
    document.getElementById("calendar").onclick();
  }
  }

  if(new Date().daysInMonth()==30){
    document.getElementById("29").onclick = function () {
    getDayNow = (29).toString();
    document.getElementById("calendar").onclick();
  }
    document.getElementById("30").onclick = function () {
    getDayNow = (30).toString();
    document.getElementById("calendar").onclick();
  }
  }

  if(new Date().daysInMonth()==31){
    document.getElementById("29").onclick = function () {
    getDayNow = (29).toString();
    document.getElementById("calendar").onclick();
  }
    document.getElementById("30").onclick = function () {
    getDayNow = (30).toString();
    document.getElementById("calendar").onclick();
  }
    document.getElementById("31").onclick = function () {
    getDayNow = (31).toString();
    document.getElementById("calendar").onclick();
  }
  }

  document.getElementById("button_choose_date").onclick = function () {
    document.getElementById("year").innerHTML = '';
    document.getElementById("month").innerHTML = '';
    document.getElementById("days").innerHTML = '';
    document.getElementById("choose_date").innerHTML = '';
    open = false;
  }
}

function createYear(){
    let year;
    year = '<input type="button" value="<--" id = "left_year"></input>';
    year += getYearNow;
    year += '<input type="button" value="-->" id = "right_year"></input><br><br>';
    return year;
}

function createMonth(){
  let month;
  month = '<input type="button" value="<--" id = "left_month"></input>';
  month += months[parseInt(getMonthNow)];
  month += '<input type="button" value="-->" id = "right_month"></input><br><br>';
  return month;
}

function createDays(year, month) {

      let mon = month;
      let d = new Date(year, mon);
      let table;
      table = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';

      //пробіли до першого дня місяця
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td><input type="button" value="'+ d.getDate() + '" id="' + d.getDate() + '"></input></td>';
        if (getDay(d) % 7 == 6)
          table += '</tr><tr>';

        d.setDate(d.getDate() + 1);
      }

      //пробіли після останнього дня місяця
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++)
          table += '<td></td>';
      }

      //завершити таблицю
      table += '</tr></table>';

      return table;
}

function getDay(date){
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

Date.prototype.daysInMonth = function() {
		return 32 - new Date(parseInt(getYearNow), parseInt(getMonthNow), 32).getDate();
};

/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  //let input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  let input = $(this).parents('.dropdown').find('input').val(),
  msg = '<span class="msg">';
  console.log(input);
  if(input=='Snow Tubing'){
    $('.msg').html(msg + input + '<br>Adult: $49.99<br>Kids > 5 years: $39.99</span>');
  }
  else if(input=='Nordic Skiing'){
    $('.msg').html(msg + input + '<br>Adult: $59.99<br>Kids > 6 years: $39.99</span>');
  }
  else if(input=='Snow Shoeing'){
    $('.msg').html(msg + input + '<br>Adult: $32.99<br>Kids > 6 years: $26.99</span>');
  }
  else if(input=='Sleigh Row'){
    $('.msg').html(msg + input + '<br>Adult: $29.99<br>Kids > 3 years: $19.99</span>');
  }
  else if(input=='Lift'){
    $('.msg').html(msg + input + '<br>Adult: $29.99<br>Kids > 3 years: $19.99</span>');
  }
}); 

//check the console for date click event
//Fixed day highlight
//Added previous month and next month view

function CalendarControl() {
  const calendar = new Date();
  const calendarControl = {
    localDate: new Date(),
    prevMonthLastDate: null,
    calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calMonthName: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar.getFullYear(),
        calendar.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar.setMonth(calendar.getMonth() - 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar.setMonth(calendar.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentMonth = calendarControl.localDate.getMonth();
      let currentYear = calendarControl.localDate.getFullYear();
      calendar.setMonth(currentMonth);
      calendar.setYear(currentYear);
      calendarControl.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar .calendar-year-label");
      yearLabel.innerHTML = calendar.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
    },
    selectDate: function (e) {
      console.log(e.target.textContent%4);
      if(e.target.textContent%4 ==0 ){

      calendarmsg = '<span class="calendarmsg">';
      $('.calendarmsg').html(calendarmsg + `${e.target.textContent} ${
        calendarControl.calMonthName[calendar.getMonth()]
      } ${calendar.getFullYear()}` + ': Sorry there are no availabilities!</span>');
       }
      else if(e.target.textContent%4 ==1 ){

        calendarmsg = '<span class="calendarmsg">';
        $('.calendarmsg').html(calendarmsg + `${e.target.textContent} ${
          calendarControl.calMonthName[calendar.getMonth()]
        } ${calendar.getFullYear()}` + ': Call (987)654-3210 to book:<br>Private Lessons<br>General Admission</span>');
         }
         else if(e.target.textContent%4 ==2 ){

          calendarmsg = '<span class="calendarmsg">';
          $('.calendarmsg').html(calendarmsg + `${e.target.textContent} ${
            calendarControl.calMonthName[calendar.getMonth()]
          } ${calendar.getFullYear()}` + ': Call (987)654-3210 to book:<br>Happy hour events<br>General Admission</span>');
           }
           else if(e.target.textContent%4 ==3 ){

            calendarmsg = '<span class="calendarmsg">';
            $('.calendarmsg').html(calendarmsg + `${e.target.textContent} ${
              calendarControl.calMonthName[calendar.getMonth()]
            } ${calendar.getFullYear()}` + ': Call (987)654-3210 to book:<br>Private sleigh tours<br>Family friendly events</span>');
             }
      
    },
    plotSelectors: function () {
      document.querySelector(
        ".calendar"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
        <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
        <div class="calendar-year-month">
        <div class="calendar-month-label"></div>
        <div>-</div>
        <div class="calendar-year-label"></div>
        </div>
        <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
        </div>
        <div class="calendar-today-date">Today:  
          ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]} 
          ${calendarControl.localDate.getDate()}, 
          ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
          ${calendarControl.localDate.getFullYear()}
        </div>
        <div class="calendar-body"></div></div>`;
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar .calendar-prev a");
      let nextBtn = document.querySelector(".calendar .calendar-next a");
      let todayDate = document.querySelector(".calendar .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
      );
      for (let i = 0; i < dateNumber.length; i++) {
          dateNumber[i].addEventListener(
            "click",
            calendarControl.selectDate,
            false
          );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function(dates){
      dates.reverse();
      for(let i=0;i<dates.length;i++) {
          if(document.querySelectorAll(".prev-dates")) {
              document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
          }
      }
    },
    plotNextMonthDates: function(){
     let childElemCount = document.querySelector('.calendar-body').childElementCount;
     //7 lines
     if(childElemCount > 42 ) {
         let diff = 49 - childElemCount;
         calendarControl.loopThroughNextDays(diff);
     }

     //6 lines
     if(childElemCount > 35 && childElemCount <= 42 ) {
      let diff = 42 - childElemCount;
      calendarControl.loopThroughNextDays(42 - childElemCount);
     }

    },
    loopThroughNextDays: function(count) {
      if(count > 0) {
          for(let i=1;i<=count;i++) {
              document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
          }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl.plotDates();
      calendarControl.attachEvents();
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
    }
  };
  calendarControl.init();
}

const calendarControl = new CalendarControl();


let minusBtn1 = document.getElementById("minus-btn1");
let count1 = document.getElementById("count1");
let plusBtn1= document.getElementById("plus-btn1");

let countNum1 = 0;
count1.innerHTML = countNum1;

minusBtn1.addEventListener("click", () => {
	if(countNum1>0){
		countNum1-= 1;
	}
	count1.innerHTML = countNum1;
});

plusBtn1.addEventListener("click", () => {
	countNum1 += 1;
	count1.innerHTML = countNum1;
});

let minusBtn2 = document.getElementById("minus-btn2");
let count2 = document.getElementById("count2");
let plusBtn2 = document.getElementById("plus-btn2");

let countNum2 = 0;
count2.innerHTML = countNum2;

minusBtn2.addEventListener("click", () => {
	if(countNum2>0){
		countNum2 -= 1;
	}
	count2.innerHTML = countNum2;
});

plusBtn2.addEventListener("click", () => {
	countNum2 += 1;
	count2.innerHTML = countNum2;
});
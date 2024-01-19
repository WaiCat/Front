// 현재 날짜 정보 가져오기
let today = new Date();
let thisDay = today.getDate();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDay();

// 월의 첫날의 인덱스를 얻는 함수
function getFirstDayIndex() {
  let firstDayIndex = new Date(`${year}-${month}-01`).getDay();
  return firstDayIndex;
}

// 현재 월의 첫날 인덱스 가져오기
let firstDayIndex = getFirstDayIndex();
let index = 1;

// 각 월의 날 수를 저장한 사전
const calDic = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

// 간단한 요일의 배열과 전체 요일의 배열
const weekDic = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const weekDic2 = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

// 각 요일의 컨테이너를 만들어주는 부분
weekDic.map((dic) => {
  let container = document.getElementById('weekDic');
  let newElement = document.createElement('div');
  newElement.id = dic;
  newElement.className = 'dic';
  newElement.innerHTML = dic;
  container.appendChild(newElement);
});

var day = 1;

// 첫 주를 생성하는 함수
function makeFirstWeek() {
  day = 1;
  let firstWeek = [];
  i = 0;
  firstDayIndex = getFirstDayIndex();
  while (i < 7) {
    if (i < firstDayIndex) {
      firstWeek.unshift('.');
    } else {
      firstWeek.push(day);
      day += 1;
    }
    i += 1;
  }
  return firstWeek;
}

// 날짜를 클릭했을 때 실행되는 함수
function day_click(clickedElement) {
  let click_day = document.getElementById('click_day_day');
  let myDiv = document.getElementById('todoList');
  myDiv.style.display = 'block';
  click_day.innerHTML = clickedElement.innerHTML;
}

// 캘린더를 생성하는 함수
function makeCalendar() {
  let calenda = [];
  let container = document.getElementById('calenda');
  container.innerHTML = '';
  calenda.push(makeFirstWeek());
  let m = calDic[month * 1];
  let week = [];
  let nDay = 1;
  while (day <= m) {
    week.push(day);
    day += 1;
    if (week.length === 7) {
      calenda.push(week);
      week = [];
    }
  }
  calenda.push(week);
  calenda.map((week) => {
    week.map((day) => {
      let newElement = document.createElement('div');
      newElement.className =
        day === today.getDate() && month === today.getMonth() + 1
          ? 'day today'
          : 'day';
      newElement.innerHTML = day;
      newElement.onclick = function () {
        day_click(this);
      };
      container.appendChild(newElement);
    });
  });
  console.log(calenda);
  return calenda;
}

// 초기 캘린더 생성
let calenda = makeCalendar();

// 한 주를 처리하는 함수
function handleWeek(opt) {
  document.getElementById(index).className = 'imgview';
  if (opt > 0) {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
    index += 1;
    index = index > 13 ? 1 : index;
  } else {
    month -= 1;
    if (month < 1) {
      month = 12;
      year -= 1;
    }
    index -= 1;
    index = index < 1 ? 13 : index;
  }
  console.log(year, month);
  console.log(index);
  makeCalendar();
  document.getElementById('year').innerHTML = '';
  document.getElementById('month').innerHTML = '';
  document.getElementById('year').innerHTML = year + ' / ';
  document.getElementById('month').innerHTML = month;
  document.getElementById(index).className = 'imgview opaque';
}

let this_day = document.getElementById('this-day');
let date_id = document.getElementById('date');

// 초기 날짜 정보 설정
document.getElementById('year').innerHTML = year + ' / ';
document.getElementById('month').innerHTML = month;
this_day.innerHTML = thisDay;
date_id.innerHTML = weekDic2[date];

// 페이지 새로고침 함수
function reloadPage() {
  location.reload();
}

// 더블클릭 이벤트 핸들러 등록
this_day.addEventListener('dblclick', reloadPage);
date_id.addEventListener('dblclick', reloadPage);

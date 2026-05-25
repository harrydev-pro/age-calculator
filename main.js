
const dayEl =document.getElementById("day");
const monthEl =document.getElementById("month");
const yearEl =document.getElementById("year");
const daylabelEl =document.getElementById("day-label");
const monthlabelEl = document.getElementById("month-label");
const yearlabelEl = document.getElementById("year-label");
const errordayEL = document.getElementById("error-day");
const errormonthEL = document.getElementById("error-month");
const erroryearEL = document.getElementById("error-year");
const resultyearEl = document.getElementById("result-year");
const resultmonthEl = document.getElementById("result-month");
const resultdayEl = document.getElementById("result-day");













function calculateAge(){
let isValid=true;

const day = parseInt(dayEl.value.trim(), 10);
  const month = parseInt(monthEl.value.trim(), 10) ; // JS months are 0-11
  const year = parseInt(yearEl.value.trim(), 10);

if (!dayEl.value.trim()){
daylabelEl.style.color="red";
errordayEL.textContent="this field is required"
dayEl.style.borderColor="red";
isValid=false;
}
   else if(isNaN(day) || day < 1 || day > 31){
errordayEL.textContent="must be a valid day";
dayEl.style.borderColor="red";
daylabelEl.style.color="red";
isValid=false;
}  else{
    errordayEL.textContent="";
    daylabelEl.style.color="black";
    dayEl.style.borderColor="black";
}



if (!monthEl.value.trim()){
monthlabelEl.style.color="red";
errormonthEL.textContent="this field is required";
monthEl.style.borderColor="red";
isValid=false;
}
   else if(isNaN(month) || month < 1 || month  > 12) {
errormonthEL.textContent="must be a valid month";
monthEl.style.borderColor="red";
monthlabelEl.style.color="red";
isValid=false;
}  else{
    errormonthEL.textContent="";
monthEl.style.borderColor="black";
monthlabelEl.style.color="black";
}



if (!yearEl.value.trim()){
yearlabelEl.style.color="red";
erroryearEL.textContent="this field is required";
yearEl.style.borderColor="red";
isValid=false;
}
   else if(isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
erroryearEL.textContent="must be in past";
yearEl.style.borderColor="red";
yearlabelEl.style.color="red";
}  else{
    erroryearEL.textContent="";
yearEl.style.borderColor="black";
yearlabelEl.style.color="black";
}

if (isValid && !checkIfValidDay(day, month  , year)) {
    errordayEL.textContent="must be a valid date";
    dayEl.style.borderColor="red";
    daylabelEl.style.color="red";
    resetResults();
    return;
  }

if (isValid) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);


    if (birthDate > today) {
      erroryearEL.textContent = "must be a valid year";
      yearEl.style.borderColor = "red";
      yearlabelEl.style.color = "red";
      resetResults();
      return;
    }
    
let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Update the UI
    resultyearEl.textContent = years;
    resultmonthEl.textContent = months;
    resultdayEl.textContent = days;}
      else {
    resetResults();
    
  }
  function resetResults(){
resultyearEl.textContent = "--";
    resultmonthEl.textContent = "--";
    resultdayEl.textContent = "--";
  }
  
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function checkIfValidDay(day, month, year) {
    const monthsWith31 = [1, 3, 5, 7, 8, 10, 12];
    const monthsWith30 = [4, 6, 9, 11];
    
    if (monthsWith31.includes(month)) {
        return day >= 1 && day <= 31;
    } else if (monthsWith30.includes(month)) {
        return day >= 1 && day <= 30;
    } else {  // February (month 2)
        const maxDays = isLeapYear(year) ? 29 : 28;
        return day > 1 && day <= maxDays;
    }
}
}   
  





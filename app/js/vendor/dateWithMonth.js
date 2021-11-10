// window.addEventListener('DOMContentLoaded', () => {
//   const namesMonth = {
//     'en': ["January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ],
//     'pt': ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
//   }
//   const day = document.querySelector('.content-date__day')
//   const month = document.querySelector('.content-date__month');
//   const year = document.querySelector('.content-date__year');

//   currentDateWithMonth(day, month, year, 'pt');


//   function currentDateWithMonth(day, mont, year, lang){
//     let currentDay = new Date().getDate() - 2;
//     let currentMonth = new Date().getMonth();
//     let currentYear = new Date().getFullYear();
//     console.log(currentDay);
//     if(currentDay <= 0){
      
//       currentDay = new Date(currentYear, currentMonth, 0).getDate() - 2;
//       mont.textContent = namesMonth[lang][currentMonth - 1];
//       if(namesMonth[lang][currentMonth - 1] == undefined){
//         mont.textContent = namesMonth[lang][11];
//     }
//     } else{
//       mont.textContent = namesMonth[lang][currentMonth];
//     }
   
//     day.textContent = currentDay < 10 ? "0" + currentDay: currentDay;
//     year.textContent = currentYear < 10 ? "0" + currentYear: currentYear;
//   }
// })
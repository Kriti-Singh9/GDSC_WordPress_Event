// document.addEventListener('load', ()=>{
//     calculateDifferrence()
// })

document.addEventListener('DOMContentLoaded', ()=>{
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')

    // let dayDifference = targetedDay-currentDay
    // let differenceHours = targetehours-currenthours
    // let differenceMinutes = targetedMinutes-currentMinutes
    // let differenceSeconds = targetedseconds-currentseconds

    const timer=  setInterval(() => {
        calculateDifferrence()
      }, 1000);

    function calculateDifferrence(){
        let targetedDate = new Date('Sep 18 2023, 13:00:00')
        let currentDate = new Date()
        console.log(targetedDate.getDay(), targetedDate.getHours(), targetedDate.getMinutes(), targetedDate.getSeconds())
        console.log(currentDate.getDay(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
        let diff = targetedDate.getTime() - currentDate.getTime()
         let dayDifference = Math.floor(diff / (1000 * 60 * 60 * 24));
         let differenceHours =  Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         let differenceMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         let differenceSeconds = Math.floor((diff % (1000 * 60)) / 1000) ;

         if(diff>0){
            days.innerHTML =  dayDifference<10 ? `0${dayDifference}`: dayDifference
            hours.innerHTML = differenceHours<10? `0${differenceHours}`:differenceHours
            minutes.innerHTML = differenceMinutes<10 ? `0${differenceMinutes}`: differenceMinutes
            seconds.innerHTML =  differenceSeconds<10 ? `0${differenceSeconds}`:differenceSeconds
         }
         else{
                  days.innerHTML = 'Timer Expired'
                  hours.style.display = 'none'
                  minutes.style.display = 'none'
                  seconds.style.display = 'none'
                  clearInterval(timer)
         }

         
    }

    calculateDifferrence()

})
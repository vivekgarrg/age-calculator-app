let age = ()=>{
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    let date = new Date();
    let today = date.getDate()
    let todayMonth = date.getMonth() + 1
    let todayYear = date.getFullYear()
    let age = todayYear - year;
    let ageMonth = 0
    let ageDay = 0;
   let result = document.getElementById('result')

    if(year > todayYear){
      result.innerHTML = "Please enter a valid year";
    }else if(month > todayMonth && year == todayYear )
    {
        result.innerHTML = "Please enter a valid DOB";
    }else if(day>31){
        result.innerHTML = "Please enter a valid day";
    }else if(month>12){
        result.innerHTML = "Please enter a valid month";
    }
    else{
         let totalresult =""
        if(day == today && month == todayMonth){
            totalresult += "Today is your day !!!! Happy Birthday 🍰 <br>  "
        }
    
        if(todayMonth < month){
            age = todayYear - year - 1
        }else{
            age = todayYear- year
        }
    
        if(month <= todayMonth ){
            ageMonth = todayMonth - month
        }else{
            ageMonth = 12 - Math.abs(todayMonth - month)
        }

        if(day <= today){
            ageDay = today - day
           }
        else{
               ageMonth = ageMonth - 1;
               ageDay = 31 - (day-today)
        }

       totalresult += age+" Years"+"  "+ageMonth+" Months"+"  "+ageDay+" Days"
       result.innerHTML = totalresult
    }
    
}
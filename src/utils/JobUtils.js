module.exports = {
  remainingDays(job){
    //calculo de tempo restante
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()
  
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDay() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)  
    
    const timeDiffInMs = dueDateInMs - Date.now()
    //transformar milisec em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.floor(timeDiffInMs/dayInMs)
  
    return dayDiff
  },
  calculateBudget(job, valueHour) {
    return valueHour * job["total-hours"]
  }
}
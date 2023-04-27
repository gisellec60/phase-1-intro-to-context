const employee = ['Gray', 'Worm', 'Security', 1]
function createEmployeeRecord(employee) {
   const employeeRecord = 
        {
            firstName: "",
            familyName:"",
            title: "",
            payPerHour: "",
            timeInEvents: [],
            timeOutEvents:[]
        }       
   employeeRecord.firstName = employee[0]
   employeeRecord.familyName = employee[1]
   employeeRecord.title = employee[2]
   employeeRecord.payPerHour = employee[3]
   employeeRecord.timeInEvents = []
   employeeRecord.timeOutEvents =[]
   return employeeRecord
}

function createEmployeeRecords(employee) {
   return employee.map(createEmployeeRecord)
}

function createTimeInEvent(employee, date) {
    let timeIn = date.split(" ")
    let len = employee.timeInEvents.length
    employee.timeInEvents[len] =
        {
            type: "TimeIn",
            hour: parseInt(timeIn[1]),
            date: timeIn[0]
        }
    
    return employee 
}

function createTimeOutEvent(employee, date) {
    let timeOut = date.split(" ")
    let len = employee.timeOutEvents.length
    employee.timeOutEvents[len] = 
        {
            type: "TimeOut",
            hour: parseInt(timeOut[1]),
            date: timeOut[0]
        }
   
    return employee 
}

function hoursWorkedOnDate(employeeData,date) {
  let hoursWorked=0
  for (let i=0; i < employeeData.timeInEvents.length; i++){
      if(employeeData.timeInEvents[i].date === date){
         hoursWorked = (employeeData.timeOutEvents[i].hour - employeeData.timeInEvents[i].hour) * .01
       break  
      }  
  }
  return hoursWorked
}

function wagesEarnedOnDate (emplData,date){
    let pay = 0
    let hoursWorked=0
    hoursWorked=hoursWorkedOnDate(emplData,date)
    pay = pay + hoursWorked * emplData.payPerHour
    return pay 
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        // Earns 324
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
               
  
function allWagesFor(cRecord) {
   let totalPay=0
   let pay=0
   let date
   for(let i=0; i < cRecord.timeInEvents.length; i++){
       date=cRecord.timeInEvents[i].date
       pay = wagesEarnedOnDate(cRecord,date)
       totalPay= totalPay + pay
    }     
   return totalPay 
 }
console.log(allWagesFor(cRecord))

function calculatePayroll(employeeRecords) {
    console.log(employeeRecords)
    let pay=0
    for (let i = 0; i < employeeRecords.length; i++) {
        pay = pay + allWagesFor(employeeRecords[i])
        console.log(pay)
    }   
    return pay
}
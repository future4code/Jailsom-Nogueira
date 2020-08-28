import moment from "moment"
moment.locale("pt-br")

const date: moment.Moment = moment();

// const date1 = new Date("2010-05-16")
// const date2 = new Date()
// const diff = date2.getTime() - date1.getTime()


// if(diff > 568036800){
//   console.log(date1)
//   console.log(date2)
//   console.log(diff)
// }else{
//   console.log("De menor")
// }

const moment1 = moment("16/05/2003","DD/MM/YYYY")
const moment2 = moment()
const diffInSeconds = moment2.diff(moment1,"seconds")

if(diffInSeconds > 568036800){
  console.log(moment1)
  console.log(moment2)
  console.log(diffInSeconds)
}else{
  console.log("De menor")
}
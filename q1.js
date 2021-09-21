// A junior developer structure student name, skills and score in array of arrays 
// which may not easy to read. Destruction the following array name to name, 
// skills array to skills, scores array to scores,
//  JavaScript score to jsScore and React score to reactScore variable.

// Write a function called convertArrayToObject which can convert the array to
//  a structured object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
let name1=[]
let scores =[]

let skills = []
let ext =[]
const DestructionOfArray = (arr)=>{


 const destruction1=[arr.flat(1)]
//  des.push(des1)
destruction1.map((val)=>{
    console.log(val)
   
    val.map(value=>{
        if(typeof(value)=='string'){
            name1.push(value)
            
        }
   else{
       ext.push(value)
       let newsc= ext.flat()
       newsc.map(values => typeof(values)=='number'?scores.push(values):skills.push(values))
   }
//    value.map(values => typeof(values)=='number'?scores.push(values): skills.push(values))
    })
    
})
console.log(name1,"name")
console.log(scores,"score")  
console.log(skills,"skill")  
}
DestructionOfArray(students)
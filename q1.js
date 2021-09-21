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

const arrayToObject =(nameset,scoresset,skillset) =>{
    let obj = {
        names: nameset,
        score: scoresset,
        skill: skillset
    }
    console.log(obj)
}
arrayToObject(name1,scores,skills)



const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 }
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js']
    }
}


const cloud = [
    { skill: 'AWS', level: 7 },
    { skill: 'Jenkin', level: 7 },
    { skill: 'Git', level: 8 }
]
const copiedStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
        backEnd: [...student.skills.backEnd, { skill: 'Express', level: 8 }],
        dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
        dataScience: [...student.skills.dataScience, 'SQL'],
        cloud: [...cloud]
    }
}
console.log(copiedStudent)


// Use the student object to solve the following questions:

//a
const lengthOfKeys = Object.keys(student).length
console.log(lengthOfKeys)

//b
const lengthOfValues = Object.values(student).length
console.log(lengthOfValues)

//c
const lengthOfSkills = Object.keys(student.skills).length
console.log(lengthOfSkills)

//d
const keys = Object.keys(student)
keys == 'graphicDesign' ? (
    console.log('student has the graphic design property')
) : (
    console.log('student doesnt have the graphic design property')
)

// e
const allKeys = Object.keys(student)
console.log(allKeys)
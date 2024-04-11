
// const sleep = (ms) => new Promise( resolve => setTimeout( resolve, ms ) )

const { rejects } = require("assert")

// const syncroneFunction = () => {
//   console.log("start")
//   sleep(3000).then(() => {
//     console.log("hello")
//   })
//   console.log("end")
// }
// const asyncFunction = async () => {
//   console.log("start")
//   await sleep(3000)
//   console.log("end")
// }
// asyncFunction()


// const asyncFunction = () => {
//   return new Promise( (resolve, reject) => {
//     setTimeout( () => {
//       const random = Math.random()

//       if (random > 0.5){
//         resolve(random)
//       } else {
//         reject( new Error("Erreur dans la promesse"))
//       }
//     }, 1000)
//   })
// }


// const execFunc = () => {
//   asyncFunction().then( (value) => {
//     console.log(value)
//   } ).catch( (err) => {
//     console.log(err)
//   })
// }


// const tryCatchExample = async () => {
//   try {
//     const randomNumber = await asyncFunction()
//     console.log(randomNumber)
//   } catch (err) {
//     console.log(err)
//   }
// }

// tryCatchExample()


const op1 = async () => new Promise(resolve => setTimeout( () => resolve("r1") , 500))
const op2 = async () => new Promise(resolve => setTimeout( () => resolve("r2"), 1500))
const op3 = async () => new Promise(resolve => setTimeout( () => resolve("r3"), 2000))


const promiseAllExample = async () => {
  try {
    const r1 = await op1()
    const r2 = await op2()
    const r3 = await op3()

    // [r1, r2, r3] = await Promise.all([
    //   op1(),
    //   op2(),
    //   op3()
    // ])

    console.log("opérations fini", r1, r2, r3)

  } catch (err) {
    console.log(err)
  }
}

promiseAllExample()
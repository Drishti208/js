const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is a shortcut for ${myObject[key]}`);
    
    
    
}

//const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);//OUTPUT WILL BE KEY VALUES OF ARRAY IE 0,1,2,3...
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);//NOW THE OUTPUT WILL BE VALUES OF ARRAY
}

//IT WONT GIVE OUTPUT FOR MAPS 
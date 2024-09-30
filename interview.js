//problem 1
var s ="abbacddac";
// function repeat(s){
// let first=[s[0]] ;
// let character;
// for(let i=0;i<s.length;i++){
//     console.log("s[i]",first)
//     if(i>0){
//     first.push(s[i]);
    
//     if(!first.includes(s[i])){
//        character=s[i]
//        return character
//     }
// }
// }

// }
//  console.log("Non repeat 18",repeat(s))
1.
var charRepeats = function(str) {
    for(var i = 0; i <= str.length; i++) {
        console.log("Str[i]",str[i])
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i]) {
                return str[j];
            }
            else{
                return -1
            }
        }
    }
    return true;
}
2.
var charNonRepeats = function(str) {
    let found=true;
    for(var i = 0; i <= str.length; i++) {
        console.log("Str[i]",str[i])
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i] && i!==j) {
                // return str[j];
                found=false
                break
            }
            // else{
            //     return -1
            // }
        }
        if(found){
            return i
        }

    }
    return -1;

}
console.log("Char first non",charNonRepeats("cabb"))
var text = "test".split("");
 console.log("test",text.some(function(v,i,a){
  return a.lastIndexOf(v)!=i;
}));
// console.log(repeat(s))
// console.log(repeat("xyzzoy"))

// 2.
// 1.
// var charNonRepeats = function(str) {
//     let init=[]
//     for(var i = 0; i <= str.length; i++) {
//         init.push(str[i])
//         console.log("Str[i]",str[i])
//         for(var j = i+1; j <= str.length; j++) {
//             if(!init.includes(str[i])) {
//                 return str[j];
//             }
//             else{
//                 return -1
//             }
//         }
//     }
//     return true;
// }
// console.log("Char non ",charNonRepeats("xyzzoy"))

3.
// SELECT MAX(DISTINCT("*")) FROM "myNumber";

SELECT  MAX(DISTINCT(NUM))
    CASE 
        WHEN NUM THEN NUM
        ELSE NULL
    END
FROM "myNumber";
  

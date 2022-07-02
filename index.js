const process = require("process");
const Builtin = require("./src/builtin")

const PROGRAM = 
      `print("{}, {}","Hello There!","hi again!\\n");`

const BUILT_IN = [
    "println",
    "print"
]

let substr = "";
let test_str = "";

// const print = Builtin.stdout.write();
// const println = Builtin.stdout.write();

function findChar(str, char, start = 0, fromEnd=false,
                  escape=false, charsToEscape = "\""){
    const cte = charsToEscape.split("");
    let is_str = false;
    if (char.length != 1) return println("Bro, {} isnt a char", char);
    if (!fromEnd) {
        for (start in str){
            if (str[start] == char && !escape) return parseInt(start);
            if (cte.includes(str[start])) is_str = !is_str;
            if (str[start] == char && !is_str) return parseInt(start);
        }
    } else {
        for (start = str.length; start > 0; start--){
            if (str[start] == char && !escape) return parseInt(start);
            if (cte.includes(str[start])) is_str = !is_str;
            if (str[start] == char && !is_str) return parseInt(start);
        }
    }
    return -1;
}

function runFunction(fn, args){
    let str = fn+"(";
    for(i in args){
        str += (str == fn + "(") ? `"${args[i]}"`: `,"${args[i]}"` 
    }
    eval(str + ");")
}

function parseFunction(func){
    let body = func.substring(
        (findChar(func,"(", 0, false, true)),
        findChar(func, ")", 0, false, true)
                             );
    let args = []
    let pos = 1;
    while (pos != 0){
        body = body.substring(pos);
        pos = findChar(body, ",", pos, false, true) + 1;
        args.push(body.substring(0, pos == 0 ? body.length : pos));
    }
    for (let a in args){
        let start = findChar(args[a], "\"") + 1
        let end = findChar(args[a], "\"", a.length, true)

        args[a] = args[a].substring(start, end);
    }

    runFunction(func.substring(0, findChar(func,"(", 0, false, true)), args)
}

function main(){
    // iterate the program
    let is_str = false;

    for (let i = 0; i < PROGRAM.length; i++){
        if (PROGRAM[i] == "\"") is_str = !is_str
        substr = PROGRAM.substring(i, PROGRAM.length)

        // test if start of substr is a built in function
        for (let x = 0; x < BUILT_IN.length; x++){
            if(substr.startsWith(BUILT_IN[x])){
                //println(substr.substring(i, BUILT_IN[x].length));

                for (let y = 0; y < substr.length; y++){
                    if (substr[y] == "\"" ) is_str = !is_str;

                    if (!is_str && substr[y] == ";"){
                        parseFunction(PROGRAM.substring(i, y))
                        
                        break;
                    }
                }
                
            }
        }
    }

}

Builtin.stdout.test()
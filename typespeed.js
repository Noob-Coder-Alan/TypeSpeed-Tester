    const readline = require('readline-sync')
    function timeCheck(){
        let timeNow = new Date()
        let min = timeNow.getMinutes(), sec = timeNow.getSeconds()
        let totalSeconds = min*60 + sec
        return totalSeconds
    }
    function timer(after, before){
        let subtractVal = after - before
        let time = 60 - subtractVal
        return time
    }
    let paragraph = readline.question("Copy and paste paragaph here (Once you enter it TypeSpeed will commence): ")
    let wordsArray = paragraph.split(' ')

    // string variables
    let userInput = "", userTyped = ""
    // score variables
    let errorScore = 0, wordScore = 0, wordIndex = 0, accuracyScore = 0
    // time variable
    timeBefore = timeCheck()
    // Bool variables
    wordLoop = true

    for(let i = 0; 3 > i; i++){
        wordsArray.push(' ')
    }

    // main loop
    while(timer(timeCheck(), timeBefore) >= 0){
        userTyped = ""
        for(let char of wordsArray[wordIndex]){
            wordLoop = true
            accuracyScore++
            while(wordLoop == true){
            
                //GUI stuff
                console.clear(); console.log(`[${wordsArray[wordIndex]}] ${wordsArray[wordIndex+1]} ${wordsArray[wordIndex+2]} ${wordsArray[wordIndex+3]}`) 
                console.log(`Typed: ${userTyped} \nError(s): ${errorScore}`)
                //^^

                //Fixes -time bug
                if(timer(timeCheck(), timeBefore)>=0){
                    console.log(`Time Remaining: ${timer(timeCheck(), timeBefore)}`)
                }
                else{
                    console.log("Time: 0 (Wrap it up already!)")
                }
                //^^

                userInput = readline.keyIn("")

                    if(char == userInput){
                        userTyped += char; wordLoop = false
                    }
                    else{
                        errorScore++
                    }
            }
        }
        wordScore++
        wordIndex++
    }
   console.clear();console.log(`Time is up! You can type ${wordScore} words per minute! with ${100 - (errorScore/accuracyScore)*100}% accuracy`)

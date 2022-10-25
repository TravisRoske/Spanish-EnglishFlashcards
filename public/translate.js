"use strict"

let baseUrl = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/'
let key = '99dd502d-ea97-4ed6-9c12-1cb92fabe10e'


async function translate(wordEnglish){
    let url = baseUrl + wordEnglish + "?key=" + key
    // console.log(url)

    let word = ''

    await fetch(url,
        {method: "get",
        redirect: "follow"})
    .then(response => {
        return response.json()
    })
    .then(body => {
        // console.log(body)
        let arr = body[0].def[0].sseq
        let text = arr[0][0][1].dt[0][1]
        console.log(text)
        let words = text.split(" ")
        // console.log(words)

        for(let x = 0; x < words.length; x++){

            //get rid of non-words
            if(words[x].indexOf(")") !== -1
                || words[x].length === 0 
                || words[x] === ' ' ){
                words.splice(x, 1);
                x--;
                continue;
            }
            //either right after a | and before a }
            //or after a }
            let start = words[x].indexOf("|");
            let end;
            if(start === -1){
                start = words[x].lastIndexOf("}")
                end = words[x].length
            } else {
                end = words[x].lastIndexOf("}");
            }
            words[x] = words[x].substring( start + 1, end );

        }
        
        console.log("final", words)

        word = words
    })

    return word;
}

export default translate;
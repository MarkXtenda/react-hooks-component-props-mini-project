import React from "react";

function minutesProcessing(min) {
    let emojis
    if (min < 10) {
        while (min < 1) {
            emojis += 1  
            min = min/5
        }
    }
    else {
        while (min < 1) {
            emojis += 1 
            min = min/10
        }
    }
    console.log(emojis)
    return emojis
}

function Article({title, date = "January 1, 1970", preview, minutes}) {
    let emojis = minutesProcessing({minutes})
    return(
    <article>
        <h3>{title}</h3>
        <small>{date} {emojis} {minutes} min read</small>
        <p>{preview}</p>
    </article>)
}

export default Article
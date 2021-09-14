import React from 'react'

export class APIService  {
    static InsertWord(word) {
        fetch('http://127.0.0.1:5000/api/v1/word/get', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(word)
        }).then((resp) => resp.json())
        .then(resp => console.log(resp))
        .catch(errors => console.log(errors))
    }
}

export default APIService

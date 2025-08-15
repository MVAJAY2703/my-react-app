import { useState } from 'react'
export default function Inputform(prop) {
    const [text, setText] = useState("")
    const toupper = (event) => {
        setText(text.toUpperCase())
        if(text){
        prop.showAlert("Converted to upperCase","Success")
        }
    }
    const tolower = (event) => {
        setText(text.toLowerCase())
        if(text){
        prop.showAlert("Converted to lowerCase","Success")
        }
    }
    const clearText = (event) => {
        if(text!==''){
        const conf=confirm("are you sure you want to clear text?")
        if(conf){
            setText('')
            prop.showAlert("Text is cleared","Success")
        }
    }
    }
    const writeText = (event) => {
        setText(event.target.value)
        // event.target.style.color=prop.mode==="dark"?"white":"dark";
    }
    const wordCount = () => {
        return text === "" ? 0 : text.trim().split(/\s+/).length
    }
    const reverse = () => {
        setText(text.split('').reverse().join(''))
        if(text){
        prop.showAlert("Reversed the text","Success")
        }
    }
    // const palindriome=()=>{
    //     let reversed = text.split('').reverse().join('');
    //     if(reversed===text){
    //         setText("Palindrome")
    //     }
    //     else{
    //         setText("not a palindrome")
    //     }

    // }
    const spaces=()=>{
        return text.trim().split(/\s+/).length-1
    }
    const longText=()=>{
        let arr=text.trim().split(/\s+/);
        let maxLen=0;
        for(let i of arr){
            maxLen=Math.max(maxLen,i.length)
        }
        return maxLen
        

    }
    const HandleSpaces=()=>{
        setText(text.trim().split(/\s+/).join(" "))
        if(text){
        prop.showAlert("Handled spaces","Success")
        }
        // let removedSpaces=text.trim().split(/\s+/);
        // return setText(removedSpaces);
    

    }
    return (
        <>
            <div className='container mb-3' >
                <h1 style={{color:(prop.mode==="dark" || prop.mode==="green")?"white":"black"}}>{prop.heading}</h1>
                <div className="mb-3">
                    <textarea  className="form-control" value={text}  onChange={writeText} id="exampleFormControlTextarea1" rows="14" style={{backgroundColor:(prop.mode==="dark" || prop.mode==="green")?"grey":"white",cursor:'pointer',color:(prop.mode==="dark" || prop.mode==="green")?"white":"black"}}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={toupper}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={tolower}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clearText}>Clear the Text</button>
                <button className='btn btn-primary mx-2' onClick={reverse}>reverse the text</button>
                <button className='btn btn-primary mx-2' onClick={HandleSpaces}> Handle extra spaces</button>
            </div>
            <div>
                <h1 style={{color:(prop.mode==="dark" || prop.mode==="green")?"white":"black"}}>text details</h1>
                <p style={{color:(prop.mode==="dark" || prop.mode==="green")?"white":"black"}}>{wordCount()} words | {text.replace(/\s/g, '').length} letters | {spaces()} spaces | Longest wordLength {longText()}</p>
            </div>
        </>
    )
}
//U46368100
export function FancyText({title, text}) {    

    return title
    ? <h1 className="heading-title">{text}</h1> 
    : <section className="message-title">{text}</section> 

}
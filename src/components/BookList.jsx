import React from 'react'
const data = [
    {
        title:"title 1",
        details:"details 1",
        text:"this is text 1"
    },
    {
        title:"title 2",
        details:"details 2",
        text:"this is text 2"
    },
    {
        title:"title 3",
        details:"details 3",
        text:"this is text 3"
    }
]
const BookList = () => {
  return (
    <div>BookList
        <Book data={data[0]}>
            <p>hello</p>
        </Book>
        <Book data={data[1]}/>
        <Book data={data[2]}/>
    </div>
  )
}
const Book = ({data,children}) => { 
    const {title,details,text} = data
    return (
        <div>
            <p>{children}</p>
            <h3>{title}</h3>
        </div>
    )
 }
export default BookList
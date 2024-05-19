function Todo({todo, index, remove}) {
  const [count, setCount] = React.useState(0)
  const [check, setCheck] = React.useState('')
  const handle = e => {
    setCount(count+1)
    if(count % 2 === 0) setCheck(<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>)
    else {
      setCheck('')
    }
  }
  return (
    <>
    <div className="todo" id={index} onClick={handle}>{todo.text}{<div style={{color: 'green'}}>{check}</div>}</div>
    </>
  )

}
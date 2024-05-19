// user input - includes validation
function TodoForm({addTodo}) {
  const [value, setValue] = React.useState('') //create a new state variable (managed) to hold the new todo value which will be later added to the list

  const handleSubmit = e => {
    console.log(e) //debugging
    e.preventDefault() // prevents the page from reloading
    if(!value) return
    addTodo(value)
    setValue('')
  } 
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add a todo item"
        onChange={e => setValue(e.target.value)} />
        <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Add item</button>
    </form>
  )
}
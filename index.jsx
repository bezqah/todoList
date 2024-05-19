function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'memorize in the morning',
      isCompleted: true
    },
    {
      text: 'learn react',
      isCompleted: false
    },
    {
      text: 'continue khatem of Quran',
      isCompleted: false
    },
    {
      text: 'workout for 30 min',
      isCompleted: false
    },
    {
      text: 'do laundry',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted: false}] //adds the new list element to the existing items
    setTodos(newTodos)
  }
  const removeTodo = index => {
    console.log(index)
    let temp = [...todos] //stores the current items in list
    temp.splice(index, 1) //removes that 1 item from the list
    setTodos(temp)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)
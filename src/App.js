import './App.css';
import {useRef, useEffect} from 'react';
import usePersistedState from './components/usePersistedState';


todos

function App() {
  const [count, setcount] = usePersistedState('countries', []);

  
  const [todoId, setTodoId] = usePersistedState('countryId', 0);
  const inputValueRef = useRef();
  
  const handleAddTodo = () => {
    const name = inputValueRef.current.value;
    if (name === '') return;
    setCountries(prevTodos => [...prevCountries, { name: name, id: countryId }]);
    setCountryId(id => id += 1);
    inputValueRef.current.value = '';
  }

  const handleClearAll = (e) => {
    setTodos((prev) => []);
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>Darth Vader's Todo List ▼皿▼</h1>
      <p>I really must remember to...</p>
      <hr />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <hr />
      <input ref={inputValueRef} type="text" ></input><button
        onClick={handleAddTodo}>Add Todo</button><button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default App;

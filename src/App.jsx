import './App.scss';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

export const App = () => (
  <div className="App">
    <TodoList todos={todosFromServer} users={usersFromServer} />
  </div>
);

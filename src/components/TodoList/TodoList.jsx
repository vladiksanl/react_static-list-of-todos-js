import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} users={users} />
    ))}
  </section>
);

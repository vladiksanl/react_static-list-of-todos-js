import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo = {}, users = [] }) => {
  const findUser = users.find(u => todo.userId === u.id) || null;

  if (!findUser) {
    return null;
  }

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={findUser} />
    </article>
  );
};

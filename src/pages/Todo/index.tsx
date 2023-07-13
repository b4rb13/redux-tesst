import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../services/todos";
const Todo = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTodoByIdQuery(id as string);
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.userId}</p>
    </div>
  );
};

export default Todo;

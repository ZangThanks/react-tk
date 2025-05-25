import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/taskSlice";

function TaskPage() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-start items-start gap-2 p-4 w-full h-[500px]">
      <p className="text-2xl text-bold">Task Page</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6 w-full">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start gap-2 bg-gray-200 rounded-lg shadow-sm p-2"
            >
              <p className="text-xl text-bold">{task.title}</p>
              <p
                className={`${
                  task.status === "Completed"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {task.status}
              </p>
              <p>Due date: {task.dueDate}</p>
              <button className="bg-red-400 text-white h-10 mt-2">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskPage;

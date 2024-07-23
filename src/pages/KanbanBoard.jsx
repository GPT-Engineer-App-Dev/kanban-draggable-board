import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tasks }) => {
  return (
    <div className="flex space-x-4">
      <KanbanColumn id="to-do" title="To Do" tasks={tasks['to-do']} />
      <KanbanColumn id="in-progress" title="In Progress" tasks={tasks['in-progress']} />
      <KanbanColumn id="done" title="Done" tasks={tasks['done']} />
    </div>
  );
};

export default KanbanBoard;
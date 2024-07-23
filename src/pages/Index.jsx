import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import KanbanBoard from './KanbanBoard';

const initialTasks = {
  'todo': [
    { id: 'task-1', content: 'Create project plan' },
    { id: 'task-2', content: 'Design UI mockups' },
  ],
  'in-progress': [
    { id: 'task-3', content: 'Implement login functionality' },
  ],
  'done': [
    { id: 'task-4', content: 'Set up project repository' },
  ],
};

const Index = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Moving to the same list
    if (source.droppableId === destination.droppableId) {
      const list = Array.from(tasks[source.droppableId]);
      const [reorderedItem] = list.splice(source.index, 1);
      list.splice(destination.index, 0, reorderedItem);

      setTasks({
        ...tasks,
        [source.droppableId]: list,
      });
    } else {
      // Moving to a different list
      const sourceList = Array.from(tasks[source.droppableId]);
      const destList = Array.from(tasks[destination.droppableId]);
      const [movedItem] = sourceList.splice(source.index, 1);

      destList.splice(destination.index, 0, movedItem);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanBoard tasks={tasks} />
      </DragDropContext>
    </div>
  );
};

export default Index;
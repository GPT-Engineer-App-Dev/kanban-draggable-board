import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";

const KanbanTask = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={`mb-2 ${snapshot.isDragging ? 'opacity-50' : ''}`}>
            <CardContent className="p-4">
              {task.content}
            </CardContent>
          </Card>
        </li>
      )}
    </Draggable>
  );
};

export default KanbanTask;
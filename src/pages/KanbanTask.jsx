import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";

const KanbanTask = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-2 ${snapshot.isDragging ? 'opacity-50' : ''}`}
        >
          <CardContent className="p-2">
            {task.content}
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default KanbanTask;
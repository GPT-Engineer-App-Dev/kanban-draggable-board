import { Droppable } from 'react-beautiful-dnd';
import KanbanTask from './KanbanTask';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const KanbanColumn = ({ id, title, tasks }) => {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Droppable droppableId={id}>
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {tasks.map((task, index) => (
                <KanbanTask key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
};

export default KanbanColumn;
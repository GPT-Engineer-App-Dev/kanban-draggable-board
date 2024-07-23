import { Droppable } from 'react-beautiful-dnd';
import KanbanTask from './KanbanTask';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const KanbanColumn = ({ id, title, tasks }) => {
  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Droppable droppableId={id}>
        {(provided) => (
          <CardContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="min-h-[200px]"
          >
            {tasks.map((task, index) => (
              <KanbanTask key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </CardContent>
        )}
      </Droppable>
    </Card>
  );
};

export default KanbanColumn;
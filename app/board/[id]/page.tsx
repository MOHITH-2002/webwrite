import { Room } from "@/components/_created_components/room";
import Canvas from "./_components/canvas";


interface BoardIdPageProps {
  params:{
    id: string;
  }
};

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {
  
  return (
  
      
    <Room roomId={params.id} >
      <Canvas boardId={params.id} />
    </Room>

  );
};

export default BoardIdPage;
import { Room } from "@/components/_created_components/room";
import Canvas from "./_components/canvas";


interface BoardIdPageProps {
  params:{
    id: string;
  }
};

export const generateMetadata = async({params}:any)=>{

  return {
    title:`Webwrite | Board | ${params.id}`,
    description:"Webwrite facilitates collaborative brainstorming with its online whiteboard, fostering dynamic idea exchanges among team members."
  }
}

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
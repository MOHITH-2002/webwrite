import { Circle, MousePointer2, Pencil, RectangleHorizontal, Redo2, StickyNote, Triangle, TypeIcon, Undo2, } from 'lucide-react'
import React from 'react'
import ToolButton from './tool/tool-button'
import { CanvasMode, CanvasState, LayerType } from '@/types';


interface props{
    canvasState: CanvasState;
    setCanvasState:(newState: CanvasState)=>void;
    undo:()=>void;
    redo:()=>void;
    canUndo:boolean;
    canRedo:boolean;

}
const Toolbar = ({canvasState,setCanvasState,undo,redo,canUndo,canRedo}:props) => {
  return (
    <div className="fixed  w-full justify-center bottom-2 md:pt-4 flex   md:relative gap-5 ">

    <div className=" bg-white dark:bg-[#1DA1F2]/10 rounded-md px-1.5 h-12 flex items-center shadow-md gap-1">
        <ToolButton
    label="select"
    onClick={()=>setCanvasState({mode:CanvasMode.None})}
    icon={MousePointer2}
    isActive={
        canvasState.mode === CanvasMode.None || 
        canvasState.mode === CanvasMode.Translating ||
        canvasState.mode === CanvasMode.Pressing ||  
        canvasState.mode === CanvasMode.SelectionNet ||  
        canvasState.mode === CanvasMode.Resizing 
    }
        />
        <ToolButton
    label="Text"
    onClick={()=>setCanvasState({mode:CanvasMode.Inserting,layerType:LayerType.Text})}
    icon={TypeIcon}
    isActive={
        canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Text
    }
        />
        <ToolButton
    label="Pen"
    onClick={()=>setCanvasState({mode:CanvasMode.Pencil})}
    icon={Pencil}
    isActive={ canvasState.mode === CanvasMode.Pencil}
        />
        <ToolButton
    label="Sticky Note"
    onClick={()=>setCanvasState({mode:CanvasMode.Inserting,layerType:LayerType.StickyNote})}
    icon={StickyNote}
    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.StickyNote}
        />
        <ToolButton
    label="Rectangle"
    onClick={()=>setCanvasState({mode:CanvasMode.Inserting,layerType:LayerType.Rectangle})}
    icon={RectangleHorizontal}
    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Rectangle}
        />
       
        <ToolButton
    label="Ellipse"
     onClick={()=>setCanvasState({mode:CanvasMode.Inserting,layerType:LayerType.Ellipse})}
    icon={Circle}
    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Ellipse}
        />

    </div>
    <div className="bg-white dark:bg-[#1DA1F2]/10 rounded-md px-1.5 h-12 flex items-center shadow-md gap-1">
        <ToolButton
    label="Undo"
    onClick={undo}
    icon={Undo2}
    
    isDisabled={!canUndo}
        />
    <ToolButton
    label="Redo"
    onClick={redo}
    icon={Redo2}
    
    isDisabled={!canRedo}
        />
    
    
    </div>
    </div>
  )
}

export default Toolbar

import useDeleteLayers from "@/hooks/use-deleted-layers";
import useSelectionBounds from "@/hooks/use-selection-bounce";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types";
import { memo } from "react";
import { ColorPicker } from "./color-picker";
import { Hint } from "@/components/_created_components/tooltip";
import { Button } from "@/components/ui/button";
import { BringToFront, SendToBack, Trash } from "lucide-react";


type SelectionToolsProps = {
  isAnimated: boolean;
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
};

function SelectionTools(
  { isAnimated, camera, setLastUsedColor }: SelectionToolsProps
) {
  const selection = useSelf((me) => me.presence.selection);

  /**
   * Move all the selected layers to the front
   */
  const moveToFront = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get("layerIds");
      const indices: number[] = [];

      const arr = liveLayerIds.toArray();

      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = indices.length - 1; i >= 0; i--) {
        liveLayerIds.move(
          indices[i],
          arr.length - 1 - (indices.length - 1 - i)
        );
      }
    },
    [selection]
  );

  /**
   * Move all the selected layers to the back
   */
  const moveToBack = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get("layerIds");
      const indices: number[] = [];

      const arr = liveLayerIds.toArray();

      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = 0; i < indices.length; i++) {
        liveLayerIds.move(indices[i], i);
      }
    },
    [selection]
  );

  /**
   * Change the color of all the selected layers
   */
  const setFill = useMutation(
    ({ storage }, fill: Color) => {
      const liveLayers = storage.get("layers");
      setLastUsedColor(fill);
      selection.forEach((id) => {
        liveLayers.get(id)?.set("fill", fill);
      });
    },
    [selection, setLastUsedColor]
  );

  const deleteLayers = useDeleteLayers();

  const selectionBounds = useSelectionBounds();
  if (!selectionBounds) {
    return null;
  }

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
  const y = selectionBounds.y + camera.y;
  return (
    <div
      className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
      style={{
        transform: `translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`,
      }}
    >
      <ColorPicker onChange={setFill} />

      <div className="flex flex-col gap-y-0.5">
        <Hint label="Bring to front">
          <Button
            onClick={moveToFront}
            className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20"

            size="icon"
          >
            <BringToFront  className="text-black " />
          </Button>
        </Hint>
        <Hint label="Send to back" side="bottom">
          <Button
            onClick={moveToBack}
             className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20"
            size="icon"
          >
            <SendToBack className="text-black " />
          </Button>
        </Hint>
      </div>
      <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
        <Hint label="Delete">
          <Button
             className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20"
            size="icon"
            onClick={deleteLayers}
          >
            <Trash className="text-black " />
          </Button>
        </Hint>
      </div>
    </div>
  );
}

export default memo(SelectionTools);
import { Hint } from '@/components/_created_components/tooltip';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface Props {
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  icon: LucideIcon;
}

const ToolButton = ({ label, isActive, isDisabled, onClick, icon: Icon }: Props) => {
  return (
    <> {/* Ensure full-screen height */}
    
      <div className="md:hidden flex"> {/* Only for mobile */}
        <Hint label={label} side="top" sideOffset={10}>

          <Button
            disabled={isDisabled}
            onClick={onClick}
            size="icon"
            className={cn(
              isActive
                ? 'bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20'
                : 'bg-transparent hover:bg-[#1DA1F2]/20'
            )}
          >
            <Icon width={20} className="text-black dark:text-gray-300" />
          </Button>
        </Hint>
      </div>

      <div className="hidden md:flex"> {/* Only for desktop */}
        <Hint label={label} side="bottom" sideOffset={10}>
          <Button
            disabled={isDisabled}
            onClick={onClick}
            size="icon"
            className={cn(
              isActive
                ? 'bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20'
                : 'bg-transparent hover:bg-[#1DA1F2]/20'
            )}
          >
            <Icon width={20} className="text-black dark:text-gray-300" />
          </Button>
        </Hint>
      </div>
    </>
  );
};

export default ToolButton;

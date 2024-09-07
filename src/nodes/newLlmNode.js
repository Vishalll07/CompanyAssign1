// LLMNode.js

import { BaseNode } from './baseNode';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      data={data} 
      label="LLM"
      type="llm"
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100/3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200/3}%` }}
      />
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};

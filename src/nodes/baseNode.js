import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, label, type, inputProps, children }) => {
    const [currText, setCurrText] = useState(data?.[type] || '{{input}}');

    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    return (
        <div style={{width: 200, height: 80, border: '1px solid black'}}>
            <div>
                <span>{label}</span>
            </div>

            <div>
                <label>
                    {label}:
                    <input 
                        type="text" 
                        value={currText} 
                        onChange={handleTextChange} 
                        {...inputProps}
                    />
                </label>
            </div>
            {children}
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-output`}
            />
        </div>
    );
}
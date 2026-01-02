// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        {/* <DraggableNode type="testNode1" label="Test Node 1" />
        <DraggableNode type="testNode2" label="Test Node 2" />
        <DraggableNode type="testNode3" label="Test Node 3" />
        <DraggableNode type="testNode4" label="Test Node 4" />
        <DraggableNode type="testNode5" label="Test Node 5" /> */}
      </div>
    </div>
  );
};

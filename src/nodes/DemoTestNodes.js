import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

// Test Node 1
export const TestNode1 = ({ id, data }) => {
  return (
    <BaseNode
      title="Test Node 1"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>Test Node 1</span>
      </div>
    </BaseNode>
  );
};

// Test Node 2
export const TestNode2 = ({ id, data }) => {
  return (
    <BaseNode
      title="Test Node 2"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>Test Node 2</span>
      </div>
    </BaseNode>
  );
};

// Test Node 3
export const TestNode3 = ({ id, data }) => {
  return (
    <BaseNode
      title="Test Node 3"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>Test Node 3</span>
      </div>
    </BaseNode>
  );
};

// Test Node 4
export const TestNode4 = ({ id, data }) => {
  return (
    <BaseNode
      title="Test Node 4"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>Test Node 4</span>
      </div>
    </BaseNode>
  );
};

// Test Node 5
export const TestNode5 = ({ id, data }) => {
  return (
    <BaseNode
      title="Test Node 5"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>Test Node 5</span>
      </div>
    </BaseNode>
  );
};

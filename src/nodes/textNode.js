// textNode.js
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useMemo, useState, useEffect } from "react";
import { extractVariables } from "../utility";

export const TextNode = ({ id, data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [currName, setCurrName] = useState("");

  const variables = useMemo(() => extractVariables(currName), [currName]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables]);

  const variableHandles = variables.map((variable, index) => ({
    type: "target",
    position: Position.Left,
    id: `${id}-var-${variable}`,
    style: {
      top: `${30 + index * 20}%`,
    },
    label: variable,
  }));

  return (
    <BaseNode
      title="Text"
      fields={[
        {
          label: "Name",
          type: "text",
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
          placeholder: "Hello {{username}}",
        },
      ]}
      handles={[
        ...variableHandles,
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
          markerEnd: null,
        },
      ]}
    />
  );
};

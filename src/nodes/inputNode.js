// inputNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      fields={[
        {
          label: "Name",
          type: "text",
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        },
        {
          label: "Type",
          type: "select",
          value: inputType,
          onChange: (e) => setInputType(e),
          options: [
            { label: "Text", value: "Text" },
            { label: "File", value: "File" },
          ],
        },
      ]}
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
        },
      ]}
    />
  );
};

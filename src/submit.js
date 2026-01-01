// submit.js

import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";
import { useState } from "react";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      let rawData = await axios.post("http://127.0.0.1:8000/pipelines/parse", {
        pipeline: "my test pipeline",
        nodes,
        edges,
      });
      setLoading(false);
      alert(
        `No.Edges: ${rawData.data.num_edges},
No.Nodes: ${rawData.data.num_nodes},
isDag: ${rawData.data.is_dag}`
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button className="submit-btn" onClick={handleSubmit}>
        {loading ? "loading..." : "Submit"}
      </button>
    </div>
  );
};

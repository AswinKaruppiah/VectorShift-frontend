/**
 * BaseNode
 * --------
 * A reusable React Flow node component that renders:
 * - A header with title
 * - Dynamic input fields (text / select)
 * - Auto-resizing textarea
 *
 * Designed to be used inside React Flow diagrams.
 *
 * @component
 */

import { Handle } from "reactflow";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const BaseNode = ({
  title,
  width = 300,
  height = 120,
  fields = [],
  handles = [],
  children,
}) => {
  const MAX_HEIGHT = 120;

  const handleChange = (e) => {
    const el = e.target;
    el.style.height = "auto";
    if (el.scrollHeight > MAX_HEIGHT) {
      el.style.height = MAX_HEIGHT + "px";
      el.style.overflowY = "auto";
      el.scrollTop = el.scrollHeight;
    } else {
      el.style.height = el.scrollHeight + "px";
      el.style.overflowY = "hidden";
    }
  };

  return (
    <div
      style={{
        width,
        minHeight: height,
      }}
      className="basenode"
    >
      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            ...handle.style,
            background: handle.type === "source" ? "#ffffff" : "#E3E3E3",
            border: handle.type === "source" ? "#906fc8" : "#472183",
          }}
        />
      ))}

      {/* Title */}
      <div className="basenode-header">
        <h6>{title}</h6>
      </div>

      {/* Body */}
      <div className="basenode-body">
        {/* Children */}
        {children}

        {/* Fields */}
        <div>
          {fields.map((field) => (
            <label key={field.label} className="basenode-input">
              <span>{field.label}:</span>
              {field.type === "text" && (
                <textarea
                  rows={1}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange(e);
                  }}
                  placeholder="Type here..."
                  className="auto-textarea"
                />
              )}
              {field.type === "select" && (
                <div className="nodrag basenode-select">
                  <Autocomplete
                    options={field.options}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(o, v) => o.value === v.value}
                    value={
                      field.options.find((o) => o.value === field.value) || null
                    }
                    openOnFocus
                    disablePortal
                    disableClearable
                    onChange={(event, newValue) => {
                      field.onChange(newValue?.value);
                    }}
                    sx={{
                      /* INPUT ROOT */
                      "& .MuiInputBase-root": {
                        height: 40,
                        fontFamily: "inherit",
                        paddingTop: "12px",
                        paddingLeft: "3px",
                      },

                      /* ACTUAL INPUT */
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                        fontWeight: 400,
                      },

                      /* FOCUS BORDER COLOR */
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#d1d5db",
                          borderWidth: "1.5px",
                        },

                      /* HOVER BORDER */
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#3b82f6",
                          borderWidth: "1.5px",
                        },

                      "& .MuiAutocomplete-endAdornment": {
                        paddingTop: "6px",
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                        }}
                      />
                    )}
                  />
                </div>
              )}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

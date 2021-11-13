import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "./styles.css";

export default function App() {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <div>
      <JoditEditor
        value={content}
        config={{
          ...config,
          events: {
            afterInit(joditInstance) {
              editor.current = joditInstance;
            }
          }
        }}
        tabIndex={1}
        onBlur={(newContent) => {
          console.log("onBlur triggered with ", newContent);
          setContent(newContent);
        }}
        onChange={(newContent) => {
          console.log("mode = ", editor.current.getMode());
          console.log("onChanged triggered with ", newContent);
        }}
      />
    </div>
  );
}

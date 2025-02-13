import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  // State for code input and AI-generated review
  const [code, setCode] = useState(`function sum() {\n  return 1 + 2;\n}`);
  const [review, setReview] = useState("");

  // Highlight syntax on component mount
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // Function to request code review from API
  const fetchCodeReview = async () => {
    try {
      const response = await axios.post("http://localhost:4000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching code review:", error);
    }
  };

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{ fontFamily: '"Fira Code", monospace', fontSize: 16 }}
          />
        </div>
        <div onClick={fetchCodeReview} className="review">
          Review
        </div>
      </div>
      <div className="right">
        <Markdown>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;

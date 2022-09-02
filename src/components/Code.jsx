import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ code }) => {
  return (
    <div className="my-8">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;

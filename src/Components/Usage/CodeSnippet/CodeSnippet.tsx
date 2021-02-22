import codeSnippet from './../../../assets/json/usage.json';

export default function CodeSnippet() {
  return (
    <div className="CodeSnippet">
      {codeSnippet.map((line, n) => (
        <code key={`line${n}`}>
          {n}: {'__'.repeat(line.tab)}
          {line.content}
        </code>
      ))}
    </div>
  );
}

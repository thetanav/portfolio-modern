'use client';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect, useRef } from 'react';

const CodeBlock = ({ children, className }: any) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current!);
  }, []);

  return (
    <code ref={codeRef} className={`hljs ${className}`}>
      {children}
    </code>
  );
};

export default CodeBlock;

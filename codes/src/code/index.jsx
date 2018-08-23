import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/prism';

export default ({code}) => {
  return <SyntaxHighlighter language='javascript' style={dark}>{code}</SyntaxHighlighter>;
}
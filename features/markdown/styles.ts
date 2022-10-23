import { CSSRules } from "twind/css";

const markdownStyle: CSSRules = {
  h1: {
    fontSize: "2em",
    fontWeight: "bold",

    marginTop: "1.6em",
    marginBottom: "0.8em",

    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#5c93bb2b",
  },
  h2: {
    fontSize: "1.6em",
    fontWeight: "bolder",
    marginTop: "1.2em",
    marginBottom: "0.6em",
  },
  h3: {
    fontSize: "1.2em",
    fontWeight: "bolder",
    marginTop: "0.8em",
    marginBottom: "0.4em",
  },
  img: {
    margin: "2em auto",
    maxWidth: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "1em",
  },
  p: {
    marginTop: "0.3em",
  },
  em: {
    fontStyle: "italic",
  },
  a: {
    color: "#0856fd",
    wordWrap: "break-word",
  },
  ul: {
    paddingLeft: "1.8em",
    margin: "1em 0",
    listStyleType: "initial",
  },
  ol: {
    paddingLeft: "1.5em",
    margin: "1em 0",
    listStyleType: "revert",
  },
  li: {
    margin: "0.4em 0",
  },
  "li::marker": {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#556677",
  },
  "ol li": {
    paddingLeft: "0.2em",
  },
  blockquote: {
    fontStyle: "italic",
    borderLeft: "3px solid #a0aabb",
    fontSize: "0.95em",
    color: "#5f5f5f",
    paddingLeft: "0.8em",
    paddingTop: "0.5em",
    paddingBottom: "0.8em",

    margin: "1em 0",
  },

  code: {
    padding: "0.1em 0.4em",
    margin: "0 0.2em",
    background: "#5c93bb2b",
    borderRadius: "0.2em",
  },
  ".footnotes": {
    marginTop: "3em",
  },

  table: {
    margin: "1em 0",
  },
  thead: {
    background: "#e4edf3",
  },
  th: {
    padding: "0.5em",
    border: "1px solid #cccddd",
    fontWeight: "bold",
  },
  td: {
    padding: "0.5em",
    border: "1px solid #cccddd",
  },

  hr: {
    margin: "2em 0",
  },
  details: {
    margin: "1em 0",
    padding: "0.6em 0.6em 0",
    border: "1px solid #5c93bb2b",
    borderRadius: "0.6em",
    boxShadow: "0px 2px 3px -2px #00000010",
  },
  summary: {
    cursor: "pointer",
    // fontWeight: "bolder",
    padding: "0.6em",
    margin: "-0.6em -0.6em 0",
  },
  "details[open]": {
    padding: "0.6em",
  },
  "details[open] summary": {
    backgroundColor: "#bbbbbb2b",
    borderBottom: "1px solid #5c93bb2b",
    marginBottom: "0.6em",
  },
};

const syntsxHighlightStyle: CSSRules = {
  pre: {
    margin: "1em 0",
  },
  "pre code": {
    display: "block",
    backgroundColor: "#283042",
    padding: "1em 0.8em",
    margin: "auto auto",
    borderRadius: "1em",
    color: "#fff",
    fontSize: "0.9em",
    overflowX: "auto",
  },
  ".keyword": { color: "#f8baff" },
  ".string": { color: "#c5e797" },
  ".number": { color: "#c5e797" },
  ".function": { color: "#95bfff" },
  ".operator": { color: "#f6c77b" },
  ".punctuation": { color: "#aaaaaa" },
  ".comment": { color: "#aaaaaa" },
};

export const style = { ...markdownStyle, ...syntsxHighlightStyle };

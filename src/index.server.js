import ReactDOMserver from "react-dom/server";

const html = ReactDOMserver.renderToString(<div>Hello Server Rendering!</div>);

console.log(html);

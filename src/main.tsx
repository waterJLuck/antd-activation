// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";

import App from "./App";
import { AliveScope } from "react-activation";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AliveScope>
	
				<App />

	</AliveScope>
);
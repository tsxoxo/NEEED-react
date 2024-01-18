import React from "react";
import "todomvc-app-css/index.css";
import { inspect } from "@xstate/inspect";
import { Todos } from "./Todos";

import { createRoot } from "react-dom/client";
const container = document.querySelector(".todoapp");
const root = createRoot(container);

root.render(<Todos />);

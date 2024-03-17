import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot for React 18
import { act } from "react-dom/test-utils";
import { Status } from "./Status"; // Adjust the import path as necessary


let container = null;
let root = null; // Variable to store the root

beforeEach(() => {
  // Setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container); // Create a root for the container
});

afterEach(() => {
  // Cleanup on exiting
  root.unmount(); // Unmount the component from the root
  container.remove();
  container = null;
});

var phrase = "Playing: ";
const audioPhraseItem = "Route Talk";

it("renders with all Status props", () => {
  act(() => {
    // Render using the root.render method for React 18
    /*import { render, unmountComponentAtNode } from "react-dom"
    render(<Status phrase={phrase} audioTitle={audioPhraseItem}/>, container) This import and code in this multi comment is not supported by react 18. You need to import createRoot from "react-dom/client" and do root.render*/
    root.render(<Status phrase={phrase} audioTitle={audioPhraseItem} />);
  });
  
  // Expect the text content to match, including the correct spacing
  expect(container.textContent.trim()).toBe("Playing:  Route Talk"); // Adjust for the correct space
  
  phrase = "Paused: ";
  act(() => {
    // Render using the root.render method for React 18
    root.render(<Status phrase={phrase} audioTitle={audioPhraseItem} />);
  });
  
  // Expect the text content to match, including the correct spacing
  expect(container.textContent.trim()).toBe("Paused:  Route Talk");
});

# Getting Started with Create React App

In /frontend/src, you will find a folder called nodes. This folder contains JavaScript 
files for four types of nodes (inputs, outputs, LLMs, and text). Each of these nodes 
contains different text, content, and input/output connections (called “Handles”), 
but there is also a significant amount of shared code between nodes. 
Currently, you could create a new node by copying an existing node into a new file 
and making modifications, but this approach ends up rewriting significant amounts of 
code. While this approach is tractable for a small number of nodes, it becomes 
difficult to maintain as the number of nodes increases. 
Your task is to create an abstraction for these nodes that speeds up your ability to 
create new nodes and apply styles across nodes in the future. 
Once you have created your abstraction, make five new nodes of your choosing to 
demonstrate how it works. Don’t spend too long worrying about what the nodes 
actually do; you should use this as an opportunity to showcase the 
flexibility/efficiency of your node abstraction.

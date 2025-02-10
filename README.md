# JoinClassList

A simple utility to join multiple class names into a single string.

## Installation

Install from the [npm registry](https://www.npmjs.com/) with your package manager:

```bash
npm install join-class-list
```

```sh

const JoinClassList = require("join-class-list");

console.log(JoinClassList("btn", "btn-primary", false, "active"));
// Output: "btn btn-primary active"

import JoinClassList from "join-class-list";

const className = JoinClassList("btn", { "btn-primary": true, "hidden": false }, ["rounded", "p-4"]);
console.log(className);
// Output: "btn btn-primary rounded p-4"

```

## Installation

```bash
Supports strings, numbers, arrays, and objects.
Filters out falsy values like false, null, undefined.
Handles nested arrays.
```

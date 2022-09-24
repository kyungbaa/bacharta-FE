import { ActionIcon } from "@mantine/core";
// import { createStore } from "redux";

interface userSelect {
  location?: number | undefined;
  temperature?: string;
}

const select: userSelect = { location: undefined, temperature: "" };

function reducer(state = select, action: { type: number }) {}

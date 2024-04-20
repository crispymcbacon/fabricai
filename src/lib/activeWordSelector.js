import { writable } from 'svelte/store';

// The store will hold the id of the active WordSelector
export const activeWordSelector = writable(null);
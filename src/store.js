import {writable} from "svelte/store";

export const navlist = writable([
    {to: "works", title: "Works"},
    {to: "cats", title: "Cats"},
    {to: "posts", title: "Posts"},

]);

export const isMenuOpen = writable(false);
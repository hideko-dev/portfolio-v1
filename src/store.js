import {writable} from "svelte/store";
import {onMount} from "svelte";

export const navlist = writable([
    {to: "works", title: "Works"},
    {to: "cats", title: "Cats"},
    {to: "posts", title: "Posts"},

]);


export const isMenuOpen = writable(false);

// const mediaQuery = window.matchMedia('(min-width: 700px)');
// mediaQuery.addListener(updateMenuBoolean);
//
// function updateMenuBoolean(event) {
//     isMenuOpen.set(!event.matches);
// }

let mediaQuery = window.matchMedia('(min-width: 500px)');
mediaQuery.addListener(updateTheme);

function updateTheme() {
    isMenuOpen.set(false);
}
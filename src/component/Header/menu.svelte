<script>
    import ThemeSwitcher from "../../lib/theme.svelte";
    import { navlist, isMenuOpen } from "../../store.js";
    import {Link} from "svelte-routing";
    let list = $navlist;
    setInterval(test, 100);
    let barWidth = 0;
    let barOpacity = 0;
    let barPointer = "none";
    function test() {
        if($isMenuOpen === true){
            barWidth = 16;
            barOpacity = 1;
            barPointer = "all";
        } else {
            barWidth = 0;
            barOpacity = 0;
            barPointer = "none";
        }
    }
</script>
<!--style="opacity: {barOpacity}; width: {barWidth}rem; pointer-events: {barPointer};"-->
<div class="sidebar" style="opacity: 1; width: 16rem">
    <div class="list">
        {#each list as lists}
            <Link to="{lists.to}" style="text-decoration: none"><p class="href">{lists.title}</p></Link>
        {/each}
    </div>
</div>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1000;
        color: var(--text-color);
        background: var(--bg-softcolor);
        border-right: 1px solid var(--text-color);
        transition: all 0.5s;
    }
    .list {
        margin: 10rem auto;
        width: 100px;
        font-family: Inter;
        transition: all 0.5s;
    }
    .list p {
        margin-block: 20px;
        font-size: 30px;
        position: relative;
        color: white;
        transition: all 0.3s;
    }
    .list p::before {
        content: "";
        position: absolute;
        top: 2.5rem;
        left: 0;
        background: linear-gradient(to top left, #ff9900, #fa1500);
        width: 0px;
        height: 4px;
        border-radius: 10px;
        transition: all 0.2s;
    }
    .list p:hover::before {
        width: 100px;
    }
</style>
<script>
    import ThemeSwitcher from "../../lib/theme.svelte";
    import { navlist, isMenuOpen } from "../../store.js";
    import {Link} from "svelte-routing";
    import Links from "../../parts/links.svelte";
    import Icon from "../../parts/icon.svelte";
    let list = $navlist;
    setInterval(test, 100);
    let barWidth = -100;
    let barOpacity = 0;
    let barPointer = "none";
    function test() {
        if($isMenuOpen === true){
            barWidth = 0;
            barOpacity = 1;
            barPointer = "all";
        } else {
            barWidth = -100;
            barOpacity = 0;
            barPointer = "none";
        }
    }
</script>
<!--opacity: {barOpacity}; width: {barWidth}rem; pointer-events: {barPointer};-->
<div class="sidebar" style="top: {barWidth}%;">
    <div class="list">
        <Link to="/" style="text-decoration: none"><p class="href">Home</p></Link>
        {#each list as lists}
            <Link to="{lists.to}" style="text-decoration: none"><p class="href">{lists.title}</p></Link>
        {/each}
    </div>
    <div class="links">
        <Links/>
    </div>
</div>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 998;
        color: var(--text-color);
        background: rgba(var(--bg-softcolor-rgb), 0.6);
        backdrop-filter: blur(15px);
        transition: all 0.5s ease;
    }
    .links {
        margin-top: 3rem;
    }
    .list {
        margin: 15rem auto;
        width: 100px;
        font-family: Inter;
        position: relative;
    }
    .list p {
        margin-block: 30px;
        font-size: 30px;
        position: relative;
        color: var(--text-softcolor);
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
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
<div class="sidebar" style="left: {barWidth}%;">
    <div class="logo">
        <div class="icon"><Icon/></div>
        <div class="line"></div>
        <p>Hideko</p>
    </div>
    <div class="border"/>
    <div class="list">
        <div class="listborder"/>
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
        z-index: 1000;
        color: var(--text-color);
        background: var(--bg-softcolor);
        border-right: 1px solid var(--text-color);
        transition: all 0.5s ease;
    }
    .border {
        background: #424242;
        width: 16rem;
        height: 3px;
        border-radius: 10px;
        margin-top: 1.5rem;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
        font-size: 28px;
        font-family: Inter;
        transition: all 0.2s;
        color: var(--text-color);
    }
    .logo .icon {
        margin-top: 6px;
    }
    .logo .line {
        background: #424242;
        width: 3px;
        height: 25px;
        border-radius: 10px;
        transform: rotateZ(20deg);
        margin-inline: 15px;
    }
    .logo:hover {
        cursor: pointer;
        opacity: 60%;
    }
    .links {
        margin-top: 3rem;
    }
    .list {
        margin: 3rem auto;
        width: 100px;
        font-family: Inter;
        position: relative;
    }
    .listborder {
        position: absolute;
        left: -1.3rem;
        top: 0;
        width: 3px;
        height: 13rem;
        border-radius: 10px;
        background: var(--text-softcolor);
    }
    .list p {
        margin-block: 20px;
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
<script>
    import { Link } from "svelte-routing"
    import Icon from "../../parts/icon.svelte";
    import ToggleTheme from "../../lib/theme.svelte";
    import Humberger from "./humberger.svelte";
    import Links from "../../parts/links.svelte";
    import { navlist } from "../../store.js";
    let list = $navlist;
</script>

<div class="head">
    <div class="header">

        <Link to="/" style="text-decoration: none">
            <div class="logo">
                <div class="icon"><Icon/></div>

                <div class="line"></div>
                <p>Hideko</p>
            </div>
        </Link>

        <div class="nav">
            {#each list as lists}
                <Link to="{lists.to}" style="text-decoration: none"><p class="href">{lists.title}</p></Link>
            {/each}
        </div>

        <div class="links">
            <Links/>
        </div>

        <div class="menubutton">
            <Humberger/>
        </div>

        <div class="themeswitchbtn">
            <ToggleTheme/>
        </div>

    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    .head {
        display: flex;
        justify-content: center;
    }
    .header {
        background: rgba(var(--bg-softcolor-rgb), 0.8);
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 62rem;
        position: fixed;
        z-index: 999;

        margin: 1.5rem;
        border-radius: 100px;
    }
    .logo {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-family: Inter;
        transition: all 0.2s;
        color: var(--text-color);
    }
    .logo .icon {
        margin-top: 5px;
        scale: 0.8;
    }
    .logo .line {
        background: #424242;
        width: 3px;
        height: 25px;
        border-radius: 10px;
        transform: rotateZ(20deg);
        margin-inline: 12px;
    }
    .logo:hover {
        cursor: pointer;
        opacity: 60%;
    }
    .nav {
        justify-content: center;
        align-items: center;
        margin-left: 5rem;
        display: flex;
    }
    .nav .href {
        color: var(--text-color);
        transition: all 0.2s;
        margin-inline: 5px;
        padding: 6px;
        padding-inline: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-inline: 10px;
        font-family: Roboto;
    }
    .nav .href:hover {
        background: var(--text-color);
        /*#2d2d2d*/
        color: var(--bg-color);
    }
    .links {
        margin-left: 5rem;
    }
    .themeswitchbtn {
        margin-left: 5rem;
        margin-top: 6px;
    }

    .menubutton {
        display: none;
    }

    @media screen and (max-width: 1050px) {
        .header {
            width: 46rem;
        }
        .links {
            display: none;
        }
    }

    @media screen and (max-width: 790px) {
        .header {
            width: 27rem;
        }
        .nav {
            display: none;
        }
        .logo {
            margin-right: 10rem;
        }
        .themeswitchbtn {
            display: none;
        }
        .menubutton {
            display: flex;
        }
    }

    @media screen and (max-width: 500px) {
        .header {
            width: 22rem;
        }
        .logo {
            margin-right: 5rem;
        }
    }

    @media screen and (max-width: 380px) {
        .header {
            width: 20rem;
        }
        .logo {
            margin-right: 3rem;
        }
    }

</style>
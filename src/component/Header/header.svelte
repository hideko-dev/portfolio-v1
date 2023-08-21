<script>
    import { Link } from "svelte-routing"
    import ToggleTheme from "../../lib/theme.svelte";
    import Humberger from "./humberger.svelte";
</script>

<div class="header">

    <Link to="/" style="text-decoration: none">
        <div class="logo">
            <i class="fa-solid fa-play"></i>
            <div class="line"></div>
            <p>Hideko</p>
        </div>
    </Link>

    <div class="nav">
        <Link to="works" style="text-decoration: none"><p class="href">Works</p></Link>
        <Link to="cats" style="text-decoration: none"><p class="href">Cats</p></Link>
        <Link to="posts" style="text-decoration: none"><p class="href">Posts</p></Link>
    </div>

    <div class="links">
        <Link to="https://instagram.com/hideko_cat" style="text-decoration: none"><i class="fa-brands fa-instagram"></i></Link>
        <Link to="https://github.com/Hideko-Dev" style="text-decoration: none"><i class="fa-brands fa-github"></i></Link>
        <Link to="https://www.linkedin.com/in/hideko-cat-143a3b285/" style="text-decoration: none"><i class="fa-brands fa-linkedin-in"></i></Link>
    </div>

    <div class="menubutton">
        <Humberger/>
    </div>

    <div class="themeswitchbtn">
        <ToggleTheme/>
    </div>

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    .header {
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 100%;
        position: fixed;
        z-index: 999;
    }
    .logo {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: Inter;
        transition: all 0.2s;
        color: var(--text-color);
    }
    .logo i {
        font-size: 26px;
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
        color: gray;
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5rem;
    }
    .nav .href {
        color: var(--text-color);
        transition: all 0.2s;
        margin-inline: 5px;
        padding: 7px;
        padding-inline: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-inline: 10px;
        font-family: Roboto;
    }
    .nav .href:hover {
        background: #2d2d2d;
        color: white;
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5rem;
    }
    .links i {
        background: black;
        width: 34px;
        height: 34px;
        font-size: 18px;
        border: 1px solid #5e5e5e;
        border-radius: 100px;
        margin-inline: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        color: white;
    }
    .links i:hover {
        cursor: pointer;
        border-color: var(--main-color);
        box-shadow: 0px 0px 40px 0px var(--main-color);
    }
    .themeswitchbtn {
        margin-left: 5rem;
    }

    .menubutton {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        .links {
            display: none;
        }
    }

    @media screen and (max-width: 700px) {
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
        .logo {
            margin-right: 5rem;
        }
    }

    @media screen and (max-width: 380px) {
        .logo {
            margin-right: 3rem;
        }
    }

</style>
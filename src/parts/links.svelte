<script>
    import {Link} from "svelte-routing";
</script>

<div class="links">
    <Link to="https://instagram.com/hideko_cat" style="text-decoration: none"><i class="fa-brands fa-instagram"></i></Link>
    <Link to="https://github.com/Hideko-Dev" style="text-decoration: none"><i class="fa-brands fa-github"></i></Link>
    <Link to="https://www.linkedin.com/in/hideko-cat-143a3b285/" style="text-decoration: none"><i class="fa-brands fa-linkedin-in"></i></Link>
</div>

<style>
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>
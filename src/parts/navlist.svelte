<script>
    import {Link} from "svelte-routing";
    export let display = "flex";
</script>
<div class="nav" style="display: {display};">
    <Link to="works" style="text-decoration: none"><p class="href">Works</p></Link>
    <Link to="cats" style="text-decoration: none"><p class="href">Cats</p></Link>
    <Link to="posts" style="text-decoration: none"><p class="href">Posts</p></Link>
</div>

<style>
    .nav {
        justify-content: center;
        align-items: center;
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
</style>
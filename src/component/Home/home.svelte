<script>
    import Top from "./top.svelte";
    import MyAbout from "./myabout.svelte";
</script>


<svelte:head>
    <title>Home - Hideko's Portfolio</title>
</svelte:head>

<div class="home">
    <Top/>
    <MyAbout/>
</div>

<style>
    .home {
        background: var(--bg-color);
        color: var(--text-color);
        height: 200vh;
        transition: all 0.2s;
    }
</style>
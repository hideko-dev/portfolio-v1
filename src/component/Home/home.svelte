<script>
    import Top from "./top.svelte";
    import About from "./about.svelte";
    import Experience from "./experience.svelte";
    import Specializations from "./specializations.svelte";
</script>


<svelte:head>
    <title>Home - Hideko's Portfolio</title>
</svelte:head>

<div class="home">
    <Top/>
    <About/>
    <Experience/>
    <Specializations/>
</div>

<style>
    .home {
        background: var(--bg-color);
        color: var(--text-color);
        height: 200vh;
        transition: all 0.2s;
    }
</style>
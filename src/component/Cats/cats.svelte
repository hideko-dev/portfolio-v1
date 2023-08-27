<script>
    import TopTitle from "./toptitle.svelte";
    import Context from "./context.svelte";
</script>

<svelte:head>
    <title>Cats - Hideko's Portfolio</title>
</svelte:head>

<div class="cats">
    <TopTitle/>
    <Context/>
</div>

<style>
    .cats {
        color: var(--text-color);
    }
</style>
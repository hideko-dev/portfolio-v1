<script>
    import WorksList from "./workslist.svelte";
    import TopTitle from "./toptitle.svelte";
</script>

<svelte:head>
    <title>Works - Hideko's Portfolio</title>
</svelte:head>

<div class="works">
    <TopTitle/>
    <WorksList/>
</div>

<style>
    .works {
        color: var(--text-color);
    }
</style>
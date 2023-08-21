<script>
    import WorksList from "./workslist.svelte";
    import TopTitle from "./toptitle.svelte";
    import { onMount } from 'svelte';
    let opacity = 0;
    onMount(() => {
        const interval = setInterval(() => {
            opacity += 0.01;
            if (opacity > 1) {
                clearInterval(interval);
            }
        }, 5);
    });
</script>

<svelte:head>
    <title>Works - Hideko's Portfolio</title>
</svelte:head>

<div class="works" style="opacity: {opacity};">
    <TopTitle/>
    <WorksList/>
</div>

<style>
    .works {
        height: 150vh;
        color: var(--text-color);
    }
</style>
<script>
    import { onMount } from 'svelte';
    let opacity = 0;
    onMount(() => {
        const interval = setInterval(() => {
            opacity += 0.03;
            if (opacity > 1) {
                clearInterval(interval);
            }
        }, 5);
    });
</script>

<svelte:head>
    <title>404 Not Found - Hideko's Portfolio</title>
</svelte:head>

<div class="error" style="opacity: {opacity}">
    <div class="center">
        <p class="none">404</p>
        <div class="line"/>
        <div class="right">
            <p class="title">Page not found</p>
            <p class="subtitle">Nothing seems to be here...</p>
        </div>
    </div>
</div>

<style>
    .error {
        background: var(--bg-color);
        color: var(--text-color);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    .error .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .error .center .none {
        color: var(--main-color);
        font-family: Inter;
        font-size: 55px;
    }
    .error .center .line {
        background: var(--bg-softcolor);
        width: 3px;
        border-radius: 100px;
        height: 80px;
        margin-inline: 20px;
    }
    .right {
        font-family: Roboto;
    }
    .right .title {
        font-size: 45px;
    }
    .right .subtitle {
        margin-top: 5px;
        color: gray;
        font-size: 18px;
    }
</style>
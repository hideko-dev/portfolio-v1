<script>
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

<div class="toptitle" style="opacity: {opacity}">
    <div class="text">
        <i class="fa-solid fa-cat"></i>
        <h1>Cats</h1>
        <div class="underline"/>
    </div>
</div>

<style>
    .toptitle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30vh;
        border-bottom: 2px solid var(--themeswitcher-bg-color);
    }
    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        font-size: 20px;
        font-family: Inter;
        position: relative;
    }
    .text i {
        font-size: 35px;
        margin-right: 10px;
        background: linear-gradient(to right, #f45eff, #ffa500);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .text .underline {
        background: linear-gradient(to right, #f45eff, #ffa500);
        height: 4px;
        top: 3.5rem;
        left: -8px;
        border-radius: 10px;
        position: absolute;
        width: 190px;
    }
</style>
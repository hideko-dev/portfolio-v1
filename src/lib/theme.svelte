<script>

    let theme = localStorage.getItem('theme');
    let isBtnMoved = false;
    let btnPosition = 0;
    if(theme === null) {
        theme = "dark";
    }
    if(theme === "light") {
        isBtnMoved = true;
    }
    function toggleTheme() {
        isBtnMoved = !isBtnMoved;
        btnPosition = isBtnMoved ? 20 : 0;
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    }

</script>

<svelte:head>
    <style>
        :root {
            --main-color: #ff9900;
        }
    </style>
    {#if theme === "dark"}
        <style>

            :root {
                --main-color-bg: linear-gradient(to top left, #ff9900, #fa1500);

                --theme-num: 0%;

                --bg-color: black;
                --bg-softcolor: #2a2a2a;
                --text-color: #E4E5E6;
                --text-softcolor: #ffffff;

                --themeswitcher-bg-color: #464646;
                --themeswitcher-btn-color: #6b6b6b;
                --themeswitcher-icon-color: white;
            }

        </style>
    {:else}
        <style>

            :root {

                --theme-num: 100%;

                --bg-color: white;
                --bg-softcolor: #e5e5e5;
                --text-color: #2a2a2a;
                --text-softcolor: #4f4f4f;

                --themeswitcher-bg-color: #c7c7c7;
                --themeswitcher-btn-color: #e3e3e3;
                --themeswitcher-icon-color: #a1a1a1;
            }

        </style>
    {/if}
</svelte:head>

<div class="toggletheme">
    <div class="themeswitch" on:click={toggleTheme}>
        <div class="btn" style="left: {isBtnMoved ? 20 : 0}px;">
            {#if theme === "dark"}
                <i class="fa-regular fa-moon"></i>
            {:else}
                <i class="fa-regular fa-sun"></i>
            {/if}
        </div>
    </div>
</div>

<style>
    .toggletheme .themeswitch {
        display: inline-block;
        width: 50px;
        height: 26px;
        border-radius: 100px;
        background-color: var(--themeswitcher-bg-color);
        position: relative;
        cursor: pointer;
        transition: all 0.2s;
    }

    .toggletheme .themeswitch .btn {
        width: 20px;
        height: 20px;
        background-color: var(--themeswitcher-btn-color);
        position: absolute;
        border-radius: 100px;
        margin: 3px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        transition: all 0.2s;
    }
    .toggletheme .themeswitch .btn i {
        margin: 0 auto;
        background: none;
        color: var(--themeswitcher-icon-color);
        font-size: 11px;
        transition: all 0.3s;
    }
</style>
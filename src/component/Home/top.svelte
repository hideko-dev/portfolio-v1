<script>
    import Mouse from "./mouse.svelte";
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

<div class="top" style="opacity: {opacity}">
    <div class="toptitle">
        <p class="title">Hi. I'm Hideko <i class="fa-solid fa-fire"></i></p>
        <p class="bio">I am a <span class="bio-student">student</span> developer. Also, I'm <span class="bio-gay">gay</span>.</p>
        <div class="mouseanim"><Mouse/></div>
    </div>
</div>

<style>
    .top {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        position: relative;
    }
    .top .toptitle .mouseanim {
        position: absolute;
        left: 49%;
        top: 75%;
    }
    .top .toptitle .title {
        font-family: Inter;
        font-size: 100px;
        width: 800px;
        text-align: center;
    }
    .top .toptitle .title .fa-fire {
        background: linear-gradient(to top left, #ff9900, #fa1500);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .top .toptitle .bio {
        font-family: Roboto;
        text-align: center;
        font-size: 20px;
        color: var(--text-softcolor);
        transition: all 0.2s;
    }
    .top .toptitle .bio .bio-student,.bio-gay {
        color: var(--text-color);
        transition: all 0.2s;
    }

    @media screen and (max-width: 1000px) {
        .top .toptitle .mouseanim {
            left: 47%;
        }
    }

    @media screen and (max-width: 815px) {
        .top .toptitle .title {
            font-size: 80px;
            width: 700px;
            text-align: center;
        }
        .top .toptitle .bio {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 715px) {
        .top .toptitle .title {
            width: 600px;
        }
        .top .toptitle .bio {
            margin-top: 15px;
        }
    }

    @media screen and (max-width: 645px) {
        .top .toptitle .title {
            font-size: 80px;
            width: 500px;
            text-align: center;
        }
        .top .toptitle .bio {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 510px) {
        .top .toptitle .title {
            width: 300px;
        }
        .top .toptitle .bio {
            margin-top: 10px;
            font-size: 16px;
        }
    }

</style>
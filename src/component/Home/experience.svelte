<div class="experience">
    <div class="titlecontent">
        <i class="fa-solid fa-bolt"/>
        <p>experiecne</p>
    </div>

    <div class="present">
        <div class="sideline"/>
        <div class="dot1"/>
        <div class="dot2"/>
        <div class="dot3"/>

        <div class="yearcard">
            <p class="year">2010 - 2018</p>
            <p class="context">Born in Miyazaki, Japan</p>
            <p class="context">I've grown to love crafts</p>
            <p class="context">Loved the game</p>
        </div>

        <div class="yearcard">
            <p class="year">2019 - 2021</p>
            <p class="context">Interested in Java from Minecraft</p>
            <p class="context">Studied C# from AmongUs</p>
            <p class="context">Get bored with the game itself</p>
        </div>

        <div class="yearcard">
            <p class="year topyear">2022 - 2023</p>
            <p class="context">Started primarily web develops</p>
            <p class="context">I'll fall behind once</p>
            <p class="context">Learn React, Next, Svelte</p>
        </div>

    </div>

</div>

<style>

    .experience {
        width: 100vw;
        height: 80vh;
        margin: auto;
    }
    .titlecontent {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        width: 155px;
        height: 50px;
        border: 2px solid var(--themeswitcher-bg-color);
        border-radius: 10px;
        margin: 0 auto;
    }
    .titlecontent i {
        margin-right: 10px;
        background: var(--themeswitcher-bg-color);
        width: 30px;
        height: 30px;
        display:flex;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
    }
    .titlecontent p {
        color: var(--text-softcolor);
    }

    .present {
        border: 1px solid var(--bg-softcolor);
        width: 400px;
        height: 562px;
        padding: 1.5rem;
        border-radius: 10px;
        margin: 1.5rem auto;
        position: relative;
    }

    .sideline {
        position: absolute;
        background: var(--bg-softcolor);
        width: 3px;
        border-radius: 10px;
        height: 520px;
    }

    .dot1 {
        position: absolute;
        left: 1.3rem;
        top: 7rem;
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background:var(--themeswitcher-bg-color);
    }
    .dot2 {
        position: absolute;
        left: 1.3rem;
        top: 17.5rem;
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background:var(--themeswitcher-bg-color);
    }
    .dot3 {
        position: absolute;
        left: 1.3rem;
        top: 28rem;
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background:var(--main-color);
    }

    .yearcard {
        background: var(--bg-softcolor);
        border-radius: 8px;
        padding: 20px;
        width: 330px;
        margin-left: 20px;
        margin-block: 10px;
    }
    .yearcard .year {
        font-family: Roboto;
        font-size: 13px;
        color: var(--themeswitcher-bg-color);
    }
    .yearcard .topyear {
        color: var(--main-color);
    }
    .yearcard .context {
        margin-top: 10px;
        font-family: Inter;
        font-size: 16px;
    }
    .yearcard .context:before {
        content: "・";
    }

    @media (max-width: 480px) {
        .present {
            width: 330px;
            height: 645px;
        }
        .sideline {
            height: 595px;
        }
        .yearcard {
            width: 255px;
        }
        .dot1 {
            top: 7rem;
        }
        .dot2 {
            top: 19rem;
        }
        .dot3 {
            top: 32.5rem;
        }
    }

</style>
<script>

    let java = 70;
    let kotlin = 50;
    let php = 80;
    let csharp = 40;
    let js = 95;
    let react = 65;
    let next = 40;
    let svelte = 90;

    let descriptionEN = "I used to make Minecraft clients and plugins in Java and Kotlin. However, I got bored with the game itself and wanted to do web development. From there, I learned HTML, CSS, and then JavaScript. After that, I learned React, Next, and Svelte, and now I mainly focus on front-end development.";
    let descriptionJA = "私は前まで、JavaやKotlinでマインクラフトのクライアントやプラグインを作っていました。ですが、ゲーム自体に飽きが来て、ウェブ開発がしたくなりました。そこから、HTML、CSSを学び、そのあとにJavaScriptを学習。そのあとにReactやNext、Svelteを学習し、いまはフロントエンド開発が中心となっています。";
    let descriptionLang = "en";
    let description = descriptionEN;


    function changeLang() {
        if(descriptionLang === "en"){
            description = descriptionJA;
            descriptionLang = "ja";
        } else if(descriptionLang === "ja"){
            description = descriptionEN;
            descriptionLang = "en";
        }
    }

</script>

<div class="myskills">
    <div class="toptext">
        <p class="toptitle">My <span class="skills">Advantages</span></p>
    </div>
    <div class="container">

        <div class="desc">
            <div on:click={changeLang} class="btn">
                <i class="fa-solid fa-language"></i>
                <p>Toggle Language</p>
            </div>
            <p class="desctext">{description}</p>
        </div>

        <div class="langprogress">

            <div class="box">
                <p class="lang">Java</p>
                <div class="line"/>
                <div style="width: {java}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">Kotlin</p>
                <div class="line"/>
                <div style="width: {kotlin}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">C#</p>
                <div class="line"/>
                <div style="width: {csharp}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">PHP</p>
                <div class="line"/>
                <div style="width: {php}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">JS</p>
                <div class="line"/>
                <div style="width: {js}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">REACT</p>
                <div class="line"/>
                <div style="width: {react}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">NEXT</p>
                <div class="line"/>
                <div style="width: {next}px" class="progress"/>
            </div>
            <div class="box">
                <p class="lang">SVELTE</p>
                <div class="line"/>
                <div style="width: {svelte}px" class="progress"/>
            </div>

        </div>


    </div>

</div>

<style>
    .myskills {
        height: 70vh;
        transition: all 0.2s;
    }
    .toptext {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toptitle {
        font-family: Inter;
        font-size: 30px;
        height: 50px;
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: var(--bg-softcolor);
        transition: all 0.2s;
    }
    .toptitle .skills {
        color: mediumspringgreen;
        margin-left: 5px;
    }

    .container {
        display: flex;
        width: 700px;
        margin: 0 auto;
    }
    .box {
        margin-right: 6rem;
        margin-top: 25px;
        text-align: left;
        display: flex;
        align-items: center;
        background: var(--bg-color);
        color: var(--themeswitcher-icon-color);
        border: 2px solid var(--bg-softcolor);
        width: 230px;
        height: 40px;
        padding-inline: 10px;
        border-radius: 8px;
        transition: all 0.2s;
    }
    .box .lang {
        text-align: center;
        font-family: Inter;
        transition: all 0.2s;
        width: 80px;
        margin-right: 3px;
    }
    .box .line {
        width: 3px;
        height: 20px;
        background: var(--bg-softcolor);
    }
    .box .progress {
        margin-left: 13px;
        height: 6px;
        border-radius: 10px;
        background: mediumspringgreen;
        transition: all 0.2s;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--themeswitcher-bg-color);
        border-radius: 8px;
        height: 28px;
        width: 170px;
        user-select: none;
        color: white;
        transition: all 0.2s;
    }
    .btn p {
        font-family: Roboto;
        font-size: 14px;
        margin-left: 5px;
    }
    .btn:hover {
        cursor: pointer;
        border-color: transparent;
        background: var(--text-color);
        color: var(--bg-color)
    }
    .desc {
        /*background: var(--bg-softcolor);*/
        border: 2.5px solid var(--bg-softcolor);
        width: 350px;
        height: 495px;
        font-family: Roboto;
        margin: 25px auto;
        border-radius: 10px;
        padding: 20px;
    }
    .desc .desctext {
        margin: 6rem auto;
        height: 300px;
        width: 260px;
        text-align: center;
        color: var(--themeswitcher-icon-color);
        letter-spacing: 0.4px;
        line-height: 22px;
    }
    .desc button {
        border: none;
        padding: 6px;
        border-radius: 5px;
        background: var(--themeswitcher-bg-color);
        color: var(--text-color);
        transition: all 0.2s;
    }
    .desc button:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    /*@media (max-width: 1000px) {*/
    /*    .container {*/
    /*        width: 800px;*/
    /*    }*/
    /*    .box {*/
    /*        width: 130px;*/
    /*    }*/
    /*    .desc {*/
    /*        width: 730px;*/
    /*    }*/
    /*}*/

    /*@media (max-width: 805px) {*/
    /*    .container {*/
    /*        display: block;*/
    /*        margin: 0 auto;*/
    /*        width: 200px;*/
    /*    }*/
    /*    .box {*/
    /*        width: 180px;*/
    /*    }*/
    /*    .desc {*/
    /*        width: 530px;*/
    /*    }*/
    /*}*/
</style>
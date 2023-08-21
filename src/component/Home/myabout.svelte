<script>
    let ja = "ひでこは日本の宮崎を拠点とする学生の開発者です。主にフロントエンド開発をしますが、Javaなどを使ってのソフトウェア開発などをしており、デジタルサービスに情熱を持っています。"
    let en = "Hideko is a student developer based in Miyazaki, Japan. He mainly does front-end development, but also software development using Java and other languages, and is passionate about digital services."
    let lang = en;
    function toggleLang() {
        if (lang === en) {
            lang = ja;
        } else if(lang === ja) {
            lang = en;
        }
    }
</script>

<div class="myabout">

    <div class="titlecontent">
        <i class="fa-regular fa-user"></i>
        <p>about me</p>
    </div>

    <div class="abouttext">
        <button on:click={toggleLang}>Change Lang</button>
        <p>{lang}</p>
    </div>

</div>

<style>
    .myabout {
        width: 50vw;
        height: 50vh;
        margin: auto;
    }
    .titlecontent {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        width: 140px;
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
    .abouttext {
        width: 400px;
        margin: 2rem auto;
    }
    .abouttext button {
        border:0;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: 2px solid var(--themeswitcher-bg-color);
        background: var(--bg-color);
        color: var(--themeswitcher-icon-color);
        font-family: Roboto;
        font-size: 13px;
        transition: all 0.2s;
    }
    .abouttext button:hover {
        box-shadow: 0px 0px 50px 0px var(--main-color);
    }
    .abouttext p {
        margin-top: 1rem;
        text-align: justify;
        hyphens: auto;
        font-size: 17px;
        line-height: 22px;
        font-family: Roboto;
    }
</style>
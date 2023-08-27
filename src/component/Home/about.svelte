<script>
    let ja = "ひでこは日本の宮崎を拠点とする学生の開発者です。主にフロントエンド開発をしますが、Javaなどを使ってのソフトウェア開発などをしており、デジタルサービスに情熱を持っています。"
    let en = "Hideko is a student developer based in Miyazaki, Japan. He mainly does front-end development, but also software development using Java and other languages, and is passionate about digital services."
    let lang = en;
    let status_en = "English";
    let status_ja = "Japanese";
    let langstatus = status_en;
    let changedlang_opacity = 0;
    let changedlang_zindex = -1;
    function toggleLang() {
        changedlang_opacity = 1;
        changedlang_zindex = 1;
        if (lang === en) {
            langstatus = status_ja;
            setTimeout(() => {
                lang = ja;
                changedlang_opacity = 0;
                changedlang_zindex = -1;
            }, 500)
        } else if(lang === ja) {
            langstatus = status_en;
            setTimeout(() => {
                lang = en;
                changedlang_opacity = 0;
                changedlang_zindex = -1;
            }, 500)
        }
    }
</script>

<div class="myabout">

    <div class="titlecontent">
        <i class="fa-regular fa-user"/>
        <p>about me</p>
    </div>

    <div class="abouttext">
        <div class="changedlang" style="opacity: {changedlang_opacity}; z-index: {changedlang_zindex}">
            <p>{langstatus}</p>
        </div>
        <div class="langsetting">
            <div class="btn" on:click={toggleLang}>
                <i class="fa-solid fa-language"></i>
                <p class="language">{langstatus}</p>
            </div>
        </div>
        <p class="text">{lang}</p>
    </div>

</div>

<style>
    .myabout {
        width: 100vw;
        height: 45vh;
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
        border: 1px solid var(--bg-softcolor);
        width: 400px;
        height: 200px;
        padding: 1rem;
        border-radius: 10px;
        margin: 1.5rem auto;
        position: relative;
    }
    .changedlang {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 400px;
        height: 200px;
        border-radius: 10px;
        z-index: -1;
        opacity: 0;
        background: var(--bg-softcolor);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-family: Inter;
        transition: all 0.3s;
    }
    .abouttext .langsetting {
        display: flex;
        align-items: center;
    }
    .abouttext .langsetting .btn {
        border: 2px solid var(--themeswitcher-bg-color);
        background: var(--bg-color);
        color: var(--text-softcolor);
        width: 115px;
        height: 30px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        transition: all 0.2s;
        user-select: none;
    }
    .abouttext .langsetting .btn i {
        margin-left: 11px;
        font-size: 14px;
    }
    .abouttext .langsetting .btn p {
        margin-left: 5px;
        font-size: 14px;
        font-family: Roboto;
    }
    .abouttext .langsetting .btn:hover {
        border-color: var(--main-color);
        cursor: pointer;
    }
    .abouttext .text {
        margin-top: 1rem;
        text-align: justify;
        hyphens: auto;
        font-size: 17px;
        line-height: 22px;
        font-family: Roboto;
    }

    @media (max-width: 480px) {
        .abouttext {
            width: 330px;
            height: 210px;
        }
        .changedlang {
            width: 330px;
            height: 210px;
        }
        .abouttext .text {
            text-align: left;
        }
    }
</style>
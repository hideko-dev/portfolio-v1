<script>
</script>

<div class="spec">

    <div class="titlecontent">
        <i class="fa-solid fa-flask"></i>
        <p>specializations</p>
    </div>

    <div class="present">
        <div class="container">
            <i class="fa-solid fa-code"></i>
            <div class="texts">
                <p class="title">Development</p>
                <p class="desc">I can develop front/back.</p>
            </div>
        </div>

        <div class="container">
            <i class="fa-solid fa-swatchbook"></i>
            <div class="texts">
                <p class="title">Web Design</p>
                <p class="desc">I love simple designs.</p>
            </div>
        </div>

        <div class="container">
            <i class="fa-solid fa-graduation-cap"></i>
            <div class="texts">
                <p class="title">Learn</p>
                <p class="desc">Learn a variety of languages</p>
            </div>
        </div>
    </div>

</div>

<style>
    .spec {
        width: 100vw;
        height: 45vh;
        margin: auto;
    }
    .titlecontent {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        width: 185px;
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
    .container {
        margin: 1.5rem auto;
        background: var(--bg-softcolor);
        width: 280px;
        height: 150px;
        border-radius: 10px;
        position: relative;
    }
    .container::before {
        content: "";
        position: absolute;
        background: linear-gradient(to left bottom, transparent, var(--main-color));
        opacity: 0;
        width: 280px;
        height: 150px;
        scale: 1.01;
        border-radius: 10px;
        z-index: -1;
        transition: all 0.5s;
    }
    .container:hover::before {
        opacity: 1;
    }
    .container i {
        position: absolute;
        top: 1.8rem;
        left: 13.5rem;
        font-size: 25px;
        transition: all 0.7s;
    }
    .container:hover i {
        rotate: 360deg;
    }
    .container i:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 100px;
        /*box-shadow: 0px 0px 15px 0px var(--main-color);*/
    }
    .container .title {
        position: absolute;
        top: 4.8rem;
        left: 1.5rem;
        font-family: Inter;
        font-size: 20px;
    }
    .container .desc {
        position: absolute;
        top: 6.7rem;
        left: 1.5rem;
        color: var(--text-color);
        opacity: 0.6;
    }
</style>
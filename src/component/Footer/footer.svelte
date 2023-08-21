<script>
    import {Link} from "svelte-routing";
    let year = new Date().getFullYear();
</script>

<div class="footer">
    <div class="topicon">
        <div class="line"/>
        <i class="fa-solid fa-play"></i>
    </div>
    <div class="buttom">
        <div class="left">
            <i class="fa-solid fa-earth-americas"></i>
            <div class="copyright">
                <p>© {year} Hideko - All Rights Reserved</p>
                <p>Copyright</p>
            </div>
        </div>
        <div class="right">
            <Link to="works" style="text-decoration: none"><p class="href">Works</p></Link>
            <Link to="cats" style="text-decoration: none"><p class="href">Cats</p></Link>
            <Link to="posts" style="text-decoration: none"><p class="href">Posts</p></Link>
        </div>
    </div>
</div>

<style>
    .footer {
        background: var(--bg-color);
        height: 10vh;
        margin-top: 10px;
        transition: all 0.2s;
        color: white;
    }
    .topicon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background: var(--bg-softcolor);
        height: 1px;
        width: 1000px;
        transition: all 0.2s;
    }
    .topicon i {
        background: var(--bg-color);
        color: var(--text-color);
        width: 80px;
        text-align: center;
        transition: all 0.2s;
    }
    .buttom {
        text-align: center;
        color: var(--text-color);
        margin-top: 2rem;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .buttom .right {
        display: flex;
        margin-right: 30px;
    }
    .buttom .right p {
        color: var(--text-color);
        margin-inline: 18px;
        font-family: Roboto;
        transition: all 0.2s;
        padding: 7px;
        padding-inline: 15px;
        border-radius: 5px;
    }
    .buttom .right p:hover {
        background: #2d2d2d;
        color: white;
    }
    .buttom .left {
        margin-right: 20rem;
        display: flex;
        align-items: center;
        font-family: Roboto;
        font-size: 14px;
        text-align: left;
    }
    .buttom .left i {
        font-size: 20px;
        margin-right: 10px;
    }

    @media screen and (max-width: 1050px) {
        .topicon {
            width: 800px;
        }
        .buttom .right p {
            padding-inline: 8px;
        }
        .buttom .left {
            margin-right: 10rem;
        }
    }

    @media screen and (max-width: 850px) {
        .topicon {
            width: 600px;
        }
        .buttom .right {
            margin-left: 0px;
        }
        .buttom .right p {
            padding-inline: 3px;
        }
        .buttom .left {
            margin-right: 5rem;
            margin-left: 2rem;
        }
        .buttom .left p {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 630px) {
        .topicon {
            width: 300px;
        }
        .buttom .right {
            display: none;
        }
        .buttom .left {
            margin-left: 4rem;
        }
    }

</style>
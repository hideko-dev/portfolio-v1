<script>

    import { onMount } from 'svelte';

    let opacity = 0;
    onMount(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                opacity += 0.01;
                if (opacity > 5) {
                    clearInterval(interval);
                }
            }, 5);
        }, 50);
    });

    let results = [];
    async function fetchWorks() {
        const responce = await fetch("https://raw.githubusercontent.com/Hideko-Dev/APIs/main/portfolio/api.json");
        const json = await responce.json();
        const res = json[0];
        const works = res.works[0];
        // const result = works[1][0];
        const newResults = [];
        for(const key in works) {
            const result = works[key][0];
            newResults.push(result);
        }
        results = newResults;
    }

    function openDetail(title, desc) {
        console.log(title, desc);
    }

    fetchWorks();
</script>

<!--style="background: linear-gradient({res.bg})"-->

<div class="workslist" style="opacity: {opacity};">
    {#each results as res}
            <div class="container" data-text={res.description}>
                <div class="titleimage" style="background: {res.bg}"/>
                <div class="info">
                    <p class="title">{res.title}</p>
                    <p class="desc">{res.description}</p>
                    <div class="btn" on:click={openDetail(res.title, res.description)}>
                        <p>Detail</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
    {/each}
</div>


<style>
    .workslist {
        margin: 5rem auto;
        width: 800px;
        background: var(--bg-color);
        transition: all 0.2s;
        display: grid;
        gap: 1.5rem 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .btn {
        background: #333333;
        border: 1px solid #6B6B6BFF;
        width: 4.5rem;
        border-radius: 100px;
        height: 1.5rem;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        z-index: 1;
        user-select: none;

        display: none;

    }
    .btn:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    .btn p {
        text-decoration: none;
        color: white;
        font-family: Roboto;
        font-size: 13px;
    }
    .btn i {
        font-size: 11px;
        margin-left: 5px;
        transition: all 0.2s;
    }
    .btn:hover i {
        transform: translateX(3px);
    }

    .container {
        display: block;
        width: 250px;
        height: 260px;
        background: var(--bg-softcolor);
        border-radius: 10px;
        transition: all 0.2s;
        position: relative;
        transition: all 0.2s;
    }
    .container:hover {
        transform: translateY(-7px);
        cursor: pointer;
    }
    .titleimage {
        width: 250px;
        height: 150px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .info {
        position: absolute;
        color: var(--text-softcolor);
        width: 250px;
        height: 100px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .info .title {
        font-family: Inter;
        font-size: 22px;
        margin: 20px;
    }
    .info .desc {
        font-family: Roboto;
        color: var(--text-softcolor);
        opacity: 0.5;
        font-size: 15px;
        width: 210px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -11px auto;

    }

    @media screen and (max-width: 1000px) {
        .workslist {
            width: 600px;
        }
    }

    @media screen and (max-width: 600px) {
        .workslist {
            width: 260px;
            gap: 2.5rem 1.5rem;
        }
    }

</style>
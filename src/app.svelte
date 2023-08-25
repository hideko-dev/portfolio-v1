<script>
    import Header from "./component/Header/header.svelte";
    import Error from "./component/Error/error.svelte";
    import Home from "./component/Home/home.svelte";
    import Works from "./component/Works/works.svelte";
    import Cats from "./component/Cats/cats.svelte";
    import Footer from "./component/Footer/footer.svelte";
    import { Router, Route } from "svelte-routing";
    import Import from "./lib/import.svelte";
    import {onDestroy} from "svelte";
    import { onMount } from 'svelte';
    import Menu from './component/Header/menu.svelte';

    let x = "";
    let y = "";
    function mouseMove(event) {
        x = event.clientX;
        y = event.clientY;
    }

    let scrollY = 0;
    let scrollTime = 0.3;
    function handleScroll() {
        scrollY = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
    });

</script>



<main on:mousemove={mouseMove}>
    <Import/>
    <Router>
        <div id="mousestalker" style="transform: translate({x}px, {y}px)"></div>

        <Header/>
        <Menu/>


        <div class="container">
            <div class="content" style="transform: translateY(-{scrollY}px); transition: transform {scrollTime}s ease-out;">
                <Route path="/" component={Home}/>
                <Route path="works" component={Works}/>
                <Route path="cats" component={Cats}/>
                <Route path="*" component={Error}/>
            </div>
        </div>

        <Footer />

    </Router>

</main>


<style>
    main {
        background: var(--bg-color);
        transition: all 0.2s;
    }
    .container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .content {
        position: relative;
    }
    #mousestalker {
        pointer-events: none;
        position: fixed;
        top: -20px;
        left: -20px;
        width: 50px;
        height: 50px;
        border: 1px solid #595959;
        border-radius: 50%;
        transition: transform 0.2s ease-in-out;
        transition-timing-function: ease-out;
        z-index: 999;
    }
    @media screen and (max-width: 500px) {
        #mousestalker {
            display: none;
        }
    }
</style>

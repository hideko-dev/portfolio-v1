<script>
    import Header from "./component/Header/header.svelte";
    import Error from "./component/Error/error.svelte";
    import Home from "./component/Home/home.svelte";
    import Works from "./component/Works/works.svelte";
    import Cats from "./component/Cats/cats.svelte";
    import Footer from "./component/Footer/footer.svelte";
    import { Router, Route } from "svelte-routing";

    let x = "";
    let y = "";
    function mouseMove(event) {
        x = event.clientX;
        y = event.clientY;
    }
</script>

<main on:mousemove={mouseMove}>
    <Router>
        <div id="mousestalker" style="transform: translate({x}px, {y}px)"></div>
        <Header />
        <Route path="/" component={Home}/>
        <Route path="works" component={Works}/>
        <Route path="cats" component={Cats}/>
        <Route path="*" component={Error}/>
        <Footer />
    </Router>
</main>


<style>
    main {
        background: var(--bg-color);
        transition: all 0.2s;
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

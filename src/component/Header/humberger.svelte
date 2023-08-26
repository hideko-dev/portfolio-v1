<script>

    import { isMenuOpen } from "../../store.js";

    let status = false;
    let l1_def = "translate(0%,200%) rotate(-45deg)";
    let l2_def = "translate(0%,-130%) rotate(45deg)";
    let l1 = "";
    let l2 = "";
    function handleClick() {
        if(status === false){
            status = true
            l1 = l1_def;
            l2 = l2_def;
            isMenuOpen.set(true);
        } else if(status === true){
            status = false
            l1 = "";
            l2 = "";
            isMenuOpen.set(false);
        }
    }
</script>

<div class="menubtn" on:click={handleClick}>
    <div class="line l1" style="transform: {l1}"/>
    <div class="line l2" style="transform: {l2}"/>
</div>

<style>
    .menubtn {
        width: 40px;
        height: 38px;
        transition: all 0.2s;
        background: var(--themeswitcher-bg-color);
        border-radius: 5px;
        position: relative;
    }
    .menubtn:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    .line {
        background: var(--themeswitcher-icon-color);
        width: 25px;
        height: 3px;
        border-radius: 10px;
        transition: all 0.3s;
    }
    .l1 {
        position: absolute;
        top: 12px;
        left: 8px;
    }
    .l2 {
        position: absolute;
        top: 22px;
        left: 8px;
    }
    .menubtn i {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--bg-softcolor);
        width: 40px;
        height: 40px;
        border-radius: 5px;
        color: var(--text-color);
        font-size: 20px;
        transition: all 0.2s;
    }
    .menubtn i:hover {
        background: var(--bg-softcolor);
    }
</style>
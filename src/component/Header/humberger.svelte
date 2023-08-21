<script>
    let menu = false;
    function openMenu() {
        if(menu){
            menu = false;
        } else if(!menu){
            menu = true;
        }
        console.log(menu);
    }
</script>

<div class="menubtn" on:click={openMenu}>
    {#if !menu}
    <i class="fa-solid fa-bars"></i>
    {:else}
    <i class="fa-solid fa-xmark"></i>
    {/if}
</div>


<style>
    .menubtn {
        margin-bottom: 18px;
        width: 30px;
        height: 25px;
        transition: all 0.2s;
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
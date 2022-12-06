<script>
    import HeaderDesktop from "../components/header.svelte";
    import HeaderMoblle from "../components/header-mobile.svelte";
    import Footer from "../components/footer.svelte";
</script>

<HeaderDesktop/>
<HeaderMoblle/>
<main><slot/></main>
<Footer/>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@500&display=swap');
    :root{
        --orange: hsl(26, 100%, 55%);
        --pale-orange: hsl(25, 100%, 94%);
        --dark-blue: hsl(220, 13%, 13%);
        --dark-grayish-blue: hsl(219, 9%, 45%);
        --grayish-blue: hsl(220, 14%, 75%);
        --light-grayish: hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
    }
    body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        font-family: 'Kumbh Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: var(--black);
        
        width: 100%;
        min-height: 100vh;
        padding:  0 200px;
        overflow-x: hidden;
        
    }
</style>
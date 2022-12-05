<script>
    import HeaderDesktop from "../components/header.svelte";
    import HeaderMoblle from "../components/header-mobile.svelte";
    import Footer from "../components/footer.svelte";
</script>

<HeaderDesktop/>
<HeaderMoblle/>
<slot/>
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
        --White: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
    }
    body {
        font-family: 'Kumbh Sans', sans-serif;
        color: var(--black);
        font-weight: 400;
        font-size: 16px;

        min-height: 100vh;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        
        padding: 30px 0;
    }
</style>
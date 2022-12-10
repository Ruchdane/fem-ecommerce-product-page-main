<script>
    import "/src/style.scss";
    import HeaderDesktop from "../components/header.svelte";
    import HeaderMoblle from "../components/header-mobile.svelte";
    import Footer from "../components/footer.svelte";
</script>

<HeaderDesktop/>
<HeaderMoblle/>
<main><slot/></main>
<Footer/>
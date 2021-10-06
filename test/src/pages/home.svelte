<Page name="home">


  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Qcorps</NavTitle>
    <NavTitleLarge>Qcorps</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>
  <!-- Page content -->
  <Block strong style="font-size:20px">
    <p>Bienvenue sur QCorps une application native disponible sur toutes les plateforms.</p>
    <p>il me sert de CV Virtuel mais aussi pour mes nombreux projets que je suis entrains d'ajouter a l'application</p>

  </Block>
</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Input,
    LoginScreen,
    LoginScreenTitle,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import {
    onMount
  } from 'svelte';

</script>
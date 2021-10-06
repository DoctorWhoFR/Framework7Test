<App { ...f7params } >
 
  <!-- Left panel with cover effect when hidden -->
  <Panel id="test" left cover themeDark visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar  title="Qcorps"/>
        <BlockTitle>Maxime Benamara</BlockTitle>
        <List>
          <ListItem  link="/mb/" view=".view-main"  title="Accueil"/>
          <ListItem link="/blogs/" view=".view-main"  title="Github"/>

        </List>
        <BlockTitle>Globals</BlockTitle>
        <List>
          <ListItem link="/torrents/" view=".view-main"  title="Torrents Searchs"/>
          <ListItem link="/threejs/" view=".view-main"  title="ThreeJS View"/>
        </List>
      </Page>
    </View>
  </Panel>


  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />


  <LoginScreen id="my-login-screen" opened={logged}  >
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
<script>
  import { onMount } from 'svelte';
  import { getDevice }  from '../js/framework7-custom.js';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import cordovaApp from '../js/cordova-app';
  import routes from '../js/routes';
  import store from '../js/store';

  import ainstance from "../stores/ainstance"

  $: logged = false;


  const device = getDevice();

  // Framework7 Parameters
  let f7params = {
    name: 'TestingLove', // App name
    theme: 'auto', // Automatic theme detection


    id: 'io.framework7.myapp', // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,


    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova && !device.electron,
      scrollIntoViewCentered: device.cordova && !device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  
  // Login screen demo data
  let username = '';
  let password = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      logged = false;
      f7.loginScreen.close();
    });
  }

  onMount(() => {
    
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }


      // to get instance in some method
    });
  })





  console.log()
</script>

<svelte:head>
  <link rel="stylesheet" href="test.css">
</svelte:head>
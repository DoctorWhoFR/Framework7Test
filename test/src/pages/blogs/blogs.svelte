<Page id="blogs" >
    <Navbar title="Projets" backLink="Back" />
    <Block title="Test" class="ptr-content" data-ptr-distance="55"  data-ptr-refresh={loadMore}>
            <!-- Default pull to refresh preloader-->
    <div class="ptr-preloader">
        <div class="preloader"></div>
        <div class="ptr-arrow"></div>
      </div>
  
        {#if test != null}
        <Row>
            {#each test as t, i}
            <Col width="100" medium="33" >
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border" valign="bottom" style={`background-image: url(${t.language}.png)`}></CardHeader>
                <CardContent>
                    <h3>{t.name}</h3>
                    <p>
                        {t.description || "Aucune description."}    
                    </p>
                </CardContent>
                <CardFooter>
                    <Link target="_blank" external={true} href={t.html_url}>Liens</Link>
                </CardFooter>
            </Card>
            </Col>
            {/each}
            <!-- <Col width="100" medium="33">
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border express" valign="bottom">Express</CardHeader>
                <CardContent>
                    <small>Posted on January 21, 2015</small>
                    <p>Express est une infrastructure d'applications Web Node.js minimaliste et flexible qui fournit un
                        ensemble de fonctionnalités robuste pour les applications Web et mobiles.</p>
                </CardContent>
                <CardFooter>
                    <Link target="_blank" external={true} href="https://expressjs.com/fr/">Liens</Link>
                    <Link>Read more</Link>
                </CardFooter>
            </Card>
            </Col>
            <Col width="100" medium="33">
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border svelte" valign="bottom">Svelte</CardHeader>
                <CardContent>
                    <small>Posted on January 21, 2015</small>

                    <p>Svelte est une approche radicalement nouvelle de la création d'interfaces utilisateur. Alors que
                        les frameworks traditionnels comme React et Vue effectuent la majeure partie de leur travail
                        dans le navigateur, Svelte déplace ce travail dans une étape de compilation qui se produit
                        lorsque vous construisez votre application.</p>
                    <p>
                        Au lieu d'utiliser des techniques comme le diffing virtuel du DOM, Svelte écrit du code qui met
                        à jour le DOM de manière chirurgicale lorsque l'état de votre application change.</p>
                </CardContent>
                <CardFooter>
                    <Link target="_blank" external={true} href="https://svelte.dev/">Liens</Link>
                    <Link>Read more</Link>
                </CardFooter>
            </Card>
            </Col>
            <Col width="100" medium="33">
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border svelte" valign="bottom">Svelte</CardHeader>
                <CardContent>
                    <small>Posted on January 21, 2015</small>

                    <p>Svelte est une approche radicalement nouvelle de la création d'interfaces utilisateur. Alors que
                        les frameworks traditionnels comme React et Vue effectuent la majeure partie de leur travail
                        dans le navigateur, Svelte déplace ce travail dans une étape de compilation qui se produit
                        lorsque vous construisez votre application.</p>
                    <p>
                        Au lieu d'utiliser des techniques comme le diffing virtuel du DOM, Svelte écrit du code qui met
                        à jour le DOM de manière chirurgicale lorsque l'état de votre application change.</p>
                </CardContent>
                <CardFooter>
                    <Link target="_blank" external={true} href="https://svelte.dev/">Liens</Link>
                    <Link>Read more</Link>
                </CardFooter>
            </Card>
            </Col>
            <Col width="100" medium="33">
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border svelte" valign="bottom">Svelte</CardHeader>
                <CardContent>
                    <small>Posted on January 21, 2015</small>

                    <p>Svelte est une approche radicalement nouvelle de la création d'interfaces utilisateur. Alors que
                        les frameworks traditionnels comme React et Vue effectuent la majeure partie de leur travail
                        dans le navigateur, Svelte déplace ce travail dans une étape de compilation qui se produit
                        lorsque vous construisez votre application.</p>
                    <p>
                        Au lieu d'utiliser des techniques comme le diffing virtuel du DOM, Svelte écrit du code qui met
                        à jour le DOM de manière chirurgicale lorsque l'état de votre application change.</p>
                </CardContent>
                <CardFooter>
                    <Link target="_blank" external={true} href="https://svelte.dev/">Liens</Link>
                    <Link>Read more</Link>
                </CardFooter>
            </Card>
            </Col>
            <Col width="100" medium="33">
                <Card class="demo-card-header-pic">
                  <CardHeader
                    class="no-border svelte"
                    valign="bottom"
                   >Svelte</CardHeader>
                  <CardContent>
                    <small>Posted on January 21, 2015</small>
        
                    <p>Svelte est une approche radicalement nouvelle de la création d'interfaces utilisateur. Alors que les frameworks traditionnels comme React et Vue effectuent la majeure partie de leur travail dans le navigateur, Svelte déplace ce travail dans une étape de compilation qui se produit lorsque vous construisez votre application.</p>
                    <p>
                      Au lieu d'utiliser des techniques comme le diffing virtuel du DOM, Svelte écrit du code qui met à jour le DOM de manière chirurgicale lorsque l'état de votre application change.</p>
                  </CardContent>
                  <CardFooter>
                    <Link target="_blank" external={true} href="https://svelte.dev/">Liens</Link>
                    <Link>Read more</Link>
                  </CardFooter>
                </Card>
              </Col> -->
        </Row>
        <Row>
            <Col>
                <Button round on:click={addTest}>SUIVANT</Button>
            </Col>
        </Row>
        
        {/if}

    </Block>
</Page>

<script>
    import {
        Page,
        Navbar,
        Block,
        Link,
        Row,
        CardContent,
        CardHeader,
        CardFooter,
        Col,
        Button,
        Card,
        f7
    } from 'framework7-svelte';
    import {
        onMount
    } from 'svelte';

    $: test = null

    const loadMore = (e, done) => {
      // Emulate 2s loading
        // When loading done, we need to reset it
        done();
    }
    function getUser() {
        return new Promise((resolve, reject)=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://persoapi-qcors.herokuapp.com/api/v1/github/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                resolve(result.data)
            })
            .catch(error => reject('error', error));
        })
    }

    const addTest = async () => {
  
    }

    onMount(async ()=>{
        f7.dialog.preloader('Chargement des projets...');

        test = await getUser();

        console.log(test);

        f7.dialog.close();
        var notificationClickToClose = f7.notification.create({
            title: 'Refresh',
            titleRightText: 'now',
            subtitle: 'refresh successfull',
            text: 'Click me to close',
            closeOnClick: true,
        })

        var ptr = f7.ptr.get('.ptr-content');
            
        ptr.on("ptrRefresh", async (e, done)=>{
            test = await getUser();
            
            done()
      
            notificationClickToClose.open();
        })
        
    })


    export let f7route;
    export let f7router;
</script>
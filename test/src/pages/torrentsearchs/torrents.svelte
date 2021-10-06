<Page>
    {#if torrents_list}
    <Navbar title="TorrentsSearchs" backLink="Back" />
    <Block title="Test">
        <Row>
            <Col width="100" medium="70">
            <Card class="demo-card-header-pic">
                <CardHeader class="no-border" valign="bottom">TorrentsSearchs - V0.1</CardHeader>
                <CardContent>
                    <p>TorrentSearch is a simple tool used to search torrent over <strong>{torrents_list.length} public torrents websites</strong>
                        and give you the magnet link or torrent file.</p>
                    <h4>Name of torrent:</h4>
                    <Input id="searchbox" outline label="Name" name="searchbox" type="text" placeholder="Doctor Who S01" clearButton style="padding:10px" />
                    <Button style="margin-top:10px" on:click={searchTorrent}>SEARCH</Button>
                </CardContent>
            </Card>
            </Col>
            {#if device.webView || device.windows }
            <Col width="100" class="" medium="30">
            <Card class="demo-card-header-pic">
                {#if !premiums && torrents_list}
                    <CardHeader class="no-border">
                        <div>Free Torrent Website</div>
                        <small><Button on:click={()=>setPremium(true)}>PREMIUM</Button></small>
                    </CardHeader>
                    <CardContent>
                        <List>
                            {#each torrents_list as torrent, i}
                            <ListItem title={torrent.name} link="#" popoverOpen=".popover-menu">
                                <Badge color="green">ONLINE</Badge>

                                <Popover class="popover-menu">
                                    <Block>
                                        <p>Torrent9 - Torrent9.pw permet de télécharger des torrents de films, séries, musique, logiciels et jeux. Accès direct à 59000 torrents sans inscription et sans ratio !
                                        </p>
                                        <Link target="_blank" href="https://www.torrent9.pw/" external={true}>{torrent.name}</Link>
                                    </Block> 
                                </Popover>
                            </ListItem>
                            {/each}
                        </List>
                    </CardContent>
                    {:else}
                    <CardHeader class="no-border">
                        <div>Premium Torrent Website</div>
                        <small><Button on:click={()=>setPremium(false)}>FREE</Button></small>
                    </CardHeader>
                    <CardContent>
                        <List>
                            <ListItem title="YggTorrent" link="#">
                                    <Badge color="green">ONLINE</Badge>
                            </ListItem>
                            <ListItem title="XTorrent" link="#">
                                <Badge color="red">OFFLINE</Badge>
                            </ListItem>
                        </List>
                    </CardContent>
                    {/if}
                </Card>
            </Col>
            {/if}
        </Row>
       
    </Block>
    {/if}
    {#if torrents}
    <BlockTitle>Torrents:</BlockTitle>
    <Block>
        <Card>
            <List>
                {#each torrents as torrent, i}
                <ListItem title={torrent.title} link="#" popoverOpen={`.popover-menu-${i}`}>
                    <Badge color="red">{torrent.provider}</Badge>
                    <Popover class={`popover-menu-${i}`}>
                        <Block>
                            <p>
                               <strong>Provider:</strong> {torrent.provider}
                            </p>
                            <p>
                                <strong>Peers:</strong> {torrent.peers}
                            </p>
                            <p>
                                <strong>Seeds:</strong> {torrent.seeds}
                            </p>
                            
                            <Button on:click={() => getMagnet(torrent)}>Lien Magnet</Button>
                            <Button target="_blank" href={torrent.desc} external={true} style="margin-top: 5px;">Liens</Button>

                        </Block> 
                    </Popover>
                </ListItem>
                {/each}
            </List>
        </Card>
    </Block>
    {/if}


</Page>

<script>
    import {
        Page,
        Popover,
        Navbar,
        Block,
        Link,
        Row,
        CardContent,
        CardHeader,
        CardFooter,
        Col,
        Button,
        Input,
        Card,
        List,
        ListItem,
        BlockTitle,
        Icon,
        Badge,
        f7
    } from 'framework7-svelte';
    import {
        onMount
    } from 'svelte';
    import { getDevice } from 'framework7';
    import ainstance from "../../stores/ainstance"


    console.log($ainstance)
    const device = getDevice();

    console.log(device);

    $: torrents = null
    $: torrents_list = null;


    onMount(async ()=>{
        torrents_list = (await fetchPublic())
        console.log(torrents_list);
    })

    function getMeta(torrent){
        return new Promise((resolve, reject)=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "torrent": torrent
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://persoapi-qcors.herokuapp.com/api/v1/torrents/torrent", requestOptions)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject('error', error));
        })
    }

    function updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip).then(function() {
           console.log("set " + newClip);
        }, function() {
            /* clipboard write failed */
        });
    }

    const getMagnet = async (torrent) => {
        const meta = await getMeta(torrent);
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state == "granted" || result.state == "prompt") {
                updateClipboard(meta)
            }
        });
        f7.dialog.alert("set to clipboard");

    }

    function queryTorrent(){
         
        return new Promise((resolve, reject) => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "torrent": document.querySelector("#searchbox > input[type=text]").value
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://persoapi-qcors.herokuapp.com/api/v1/torrents/", requestOptions)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject('error', error));
        })
    }


    function fetchPublic(){
        return new Promise(function(resolve, reject) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://persoapi-qcors.herokuapp.com/api/v1/torrents/public", requestOptions)
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject('error', error));
        })
    }

    let premiums = false;

    const searchTorrent = async () => {
        f7.dialog.preloader('Recherches...');

        const results = await queryTorrent()

        f7.dialog.close();

        console.log(results);
        torrents = results  
    }

    const setPremium = (status) => {
        premiums = status;
    }

    export let f7route;
    export let f7router;
</script>
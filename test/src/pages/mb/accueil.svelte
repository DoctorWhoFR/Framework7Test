<Page>
  <Navbar id="accueil" title="Maxime Benamara" backLink="Back" />
  <Block strong id="mainBlock">
    <p>
      Je m'appelle Maxime Benamara, j'habite à Aix En Provence, je suis développeur et créateur d'applications.
      Je suis Spécialisé dans la création d'application Web responsive (ordinateur, web, mobile),
      ainsi que de la création d'Api (Express,Django)
    </p>
    <p>
      je suis un autodidacte passionné et un ingénieur en logiciel et un développeur Web, Je suis actuellement
      micro-entrepeneur et je travaille sur la modernisation des entreprises françaises. J'ai réalisé et travaillé sur
      de nombreux projets dans le passé et encore aujourd'hui.
    </p>
    <p>
      Je suis ouvert à toute demande. Je connais actuellement plusieurs langages et frameworks. Je suis également un
      grand fan de MineCraft et Garry's Mod, donc si vous avez un projet Gaming, envoyez-moi un message sur Discord.
    </p>
  </Block>
  <Block>
    <h2>Des données:</h2>
    <Row>
      <Col>
        <Card class="widget info">
          <CardHeader
            class="no-border"
            valign="bottom"
            style="background-color: #0a3d62"
          >
            <div class="widget_info_price if-md" widgetvalue="100">
              100+
            </div>
            <div class="widget_info_price not-md if-not-md" widgetvalue="100">
              100+
            </div>
            <small style="opacity: 0.7">PROJETS</small>

          </CardHeader>
          <CardContent>
            <p class="date">Posted on January 21, 2015</p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </CardContent>
          <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card class="widget info">
          <CardHeader
            class="no-border"
            valign="bottom"
            style="background-color: #0a3d62"
          >
            <div class="widget_info_price if-md" widgetvalue="60">
              60+
            </div>
            <div class="widget_info_price not-md if-not-md" widgetvalue="60">
              60+
            </div>
            <small style="opacity: 0.7">CLIENTS</small>

          </CardHeader>
          <CardContent>
            <p class="date">Posted on January 21, 2015</p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </CardContent>
          <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </Block>
  <Block title="Test">
    <h2>Languages:</h2>
    <Row>
      <Col noGap width="50" medium="20">
        <Gauge
        type="circle"
        value={0.95}
        size={250}
        borderColor="#2196f3"
        borderWidth={10}
        valueText={`${0.95 * 100}%`}
        valueFontSize={41}
        valueTextColor="#2196f3"
        labelText="NodeJS"
      />
      </Col>
      <Col noGap width="50" medium="20">
        <Gauge
        type="circle"
        value={0.85}
        size={250}
        borderColor="#2196f3"
        borderWidth={10}
        valueText={`${0.85 * 100}%`}
        valueFontSize={41}
        valueTextColor="#2196f3"
        labelText="PHP"
      />
      </Col>
      <Col noGap width="50" medium="20">
        <Gauge
        type="circle"
        value={0.95}
        size={250}
        borderColor="#2196f3"
        borderWidth={10}
        valueText={`${0.95 * 100}%`}
        valueFontSize={41}
        valueTextColor="#2196f3"
        labelText="Javascript"
      />
      </Col>
      <Col noGap width="50" medium="20">
        <Gauge
        type="circle"
        value={0.80}
        size={250}
        borderColor="#2196f3"
        borderWidth={10}
        valueText={`${0.80 * 100}%`}
        valueFontSize={41}
        valueTextColor="#2196f3"
        labelText="HTML & CSS"
      />
      </Col>
    </Row>
  </Block>
  
  <Block title="Test">
    <h2>Framework:</h2>
    <Row>
      <Col width="100"  medium="33" >
        <Card class="demo-card-header-pic">
          <CardHeader
            class="no-border framework7"
            valign="bottom"
          >Framework7</CardHeader>
          <CardContent>
            <small>Posted on January 21, 2015</small>
            <p>Framework7 - est un framework gratuit et open source pour développer des applications mobiles, de bureau ou web avec une apparence native.</p>
            <p> Il s'agit également d'un outil de prototypage indispensable pour présenter un prototype d'application fonctionnel dès que possible en cas de besoin.</p>
          </CardContent>
          <CardFooter>
            <Link target="_blank" external={true} href="https://framework7.io/">Liens</Link>
            <Link>Read more</Link>
          </CardFooter>
        </Card>
      </Col>
      <Col width="100" medium="33" >
        <Card class="demo-card-header-pic">
          <CardHeader
            class="no-border express"
            valign="bottom"
          >Express</CardHeader>
          <CardContent>            
            <small>Posted on January 21, 2015</small>
            <p>Express est une infrastructure d'applications Web Node.js minimaliste et flexible qui fournit un ensemble de fonctionnalités robuste pour les applications Web et mobiles.</p>
          </CardContent>
          <CardFooter>
            <Link target="_blank" external={true} href="https://expressjs.com/fr/">Liens</Link>
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
      </Col>
    </Row>
  </Block>
</Page>
<script>
import { val } from 'dom7';


  import {
    Page,
    Navbar,
    Block,
    Row,
    Col,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Link,
    Gauge
  } from 'framework7-svelte';
	import { onMount } from 'svelte';

  onMount(async () => {
  
    const widget_info_price = document.getElementsByClassName("widget_info_price");
    console.log(widget_info_price, widget_info_price.length);

    for (let index = 0; index < widget_info_price.length; index++) {
      const element = widget_info_price[index];
      const _value = parseInt(element.getAttribute("widgetvalue"));

      element.innerHTML = "0"

      const toValue = setInterval(() => {
        let value_to_add = 1;

        if(_value > 50){
          value_to_add = 5
        } else if(_value > 100){
          value_to_add = 10
        } else if(_value > 1000) {
          value_to_add = 100
        } 

        if(parseInt(element.innerHTML) < _value){
            element.innerHTML = parseInt(element.innerHTML) + value_to_add;
        } else if(parseInt(element.innerHTML) == _value){
          element.innerHTML += "+"
          clearInterval(toValue)
        }
        
        
      }, 100);

    }
  })
</script>

<style>

</style>
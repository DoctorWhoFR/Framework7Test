<Page>
    <Navbar title="ThreeJs View WIP" backLink="Back" />
    <BlockTitle style="font-size:larger">ThreeJs View WIP</BlockTitle>
    <Row>
        <Col width="30">
        <Block id="editor" title="Tessst">
            <div>
                <h4>Cube animation: <Checkbox onChange={cubeAnimation} checked={cube_animations} name="checkbox-1"></Checkbox></h4>
            </div>
            <Treeview style="margin-bottom:40px">
                <TreeviewItem label="Cube" id="cube" on:click={()=>openMenu("cube")}>


                </TreeviewItem>
                {#if cube}
                    <Popover  class="popover-menu" id="fast_menu">
                        <List style="background-color:white;">
                            <h4>Position</h4>
                            <ListInput 
                            label={"X: "  + cube.position.x}
                            input={false}
                          >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                              <Range bind:value={cube.position.x} min={-10} max={10} step={0.01}/>
                            </span>
                          </ListInput>
                          <ListInput
                            label={"Y: "  + cube.position.y}
                            input={false}
                            >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                                <Range bind:value={cube.position.y} min={-10} max={10} step={0.01}/>
                            </span>
                            </ListInput>
                            <ListInput
                            label={"Z: "  + cube.position.z}
                            input={false}
                        >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                            <Range bind:value={cube.position.z} min={-10} max={10} step={0.01}/>
                            </span>
                        </ListInput>
                        </List >
                        <List style="background-color:white;" >
                        <h4>Scale</h4>

                            <ListInput
                            label={"X: "  + cube.scale.x}
                            input={false}
                          >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                              <Range bind:value={cube.scale.x} min={-10} max={10} step={0.01}/>
                            </span>
                          </ListInput>
                          <ListInput
                            label={"Y: "  + cube.scale.y}
                            input={false}
                            >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                                <Range bind:value={cube.scale.y} min={-10} max={10} step={0.01}/>
                            </span>
                            </ListInput>
                            <ListInput
                            label={"Z: "  + cube.scale.z}
                            input={false}
                        >
                            <i class="icon demo-list-icon" slot="media"/>
                            <span slot="input">
                            <Range bind:value={cube.scale.z} min={-10} max={10} step={0.01}/>
                            </span>
                        </ListInput>
                        </List>
                    </Popover>
                {/if}

            </Treeview>
        </Block>
        </Col>
    </Row>
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
        Input,
        Card,
        List,
        Range,
        Checkbox,
        ListInput,  
        ListItem,
        BlockTitle,
        Icon,
        Badge,
        Treeview,
        TreeviewItem,
        f7
    } from 'framework7-svelte';
    import {
        onMount
    } from 'svelte';
    import {
        getDevice
    } from 'framework7';
    import ainstance from "../../stores/ainstance"
    import * as THREE from '../../assets/three.module';
    import {
        GLTFLoader
    } from "../../assets/GLTFLoader"
    import {
        OrbitControls
    } from "../../assets/OrbitControls"

    var mixer, clock, model, skeleton, controls, object_scene, lightd;
    let object = null;
    var scene = null;
    var camera = null;
    var renderer = null;

    var  cube_animations

    var cube = null;

    const device = getDevice();

    var objectThree = {};

    const openMenu = (str) => {
        const element = document.getElementById(str)

        var popover = f7.popover.create({
            content: document.getElementById("fast_menu"),
            on: {
                opened: function () {
                    console.log('Popover opened')
                }
            }
        })

        popover.open(element)
    }


    onMount(() => {
        initScene()

        addCube()


        animate();
    })

    function addCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            name: "test"
        });
        cube = new THREE.Mesh(geometry, material);
        
        cube.name = "test";
        scene.add(cube);
        camera.position.z = 5;

    }

    function animate() {
        requestAnimationFrame(animate);

        if(cube_animations){
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }

    function initScene() {
        clock = new THREE.Clock();

        scene = new THREE.Scene();

        scene.name = "main";
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        renderer = new THREE.WebGLRenderer();


        renderer.setSize(window.innerWidth - window.innerWidth / 4, window.innerHeight - 200);

        document.getElementById("editor").appendChild(renderer.domElement);
    }

    function cubeAnimation(){
        if(cube_animations){
            cube_animations = false
        } else {
            cube_animations = true
        }
        console.log(cube_animations);
    }

</script>
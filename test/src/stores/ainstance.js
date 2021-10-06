import { writable } from 'svelte/store';

const ainstance = writable(null);

ainstance.subscribe((value)=>{
    console.log("changed value to" + value);
})

export default ainstance;
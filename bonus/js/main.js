/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input. */


const app = new Vue({
    el: '#app',
    data: {
        message: 'hello Alice!',
        image: 'https://i1.sndcdn.com/artworks-000142988650-icdihe-t500x500.jpg',
        imageUser: "",
    },
    methods: {
        remove: function(){
            document.getElementById("imageUrl").value = "";
            document.getElementById("viewImage").classList.remove("d-none")
        }
    }
})
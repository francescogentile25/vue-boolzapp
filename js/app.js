const { createApp } = Vue; //Vue
//App
const {DateTime} = luxon
createApp({
    data() {
        return {
            //Contatti
            contacts: [
                {
                    name: "Michele",
                    avatar: "./img/avatar_1.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "./img/avatar_2.png",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent"
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received"
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Va bene, stasera la sento",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "Nessuna nuova, buona nuova",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Federico",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Davide",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "No, l\"ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: "received"
                        }
                    ],
                }
            ],
            currentUser : 0,
            inputValue: '',
            now: DateTime.now().toFormat('HH:mm'),
        };
    },
    methods:{
        
        setCurrentuser(currentUser){
            this.currentUser = currentUser
        },
        addMessage() {
			let inputText = this.inputValue.trim()
			if (inputText === ''){
				return
			}
            this.contacts[this.currentUser].messages.push({date: this.now, message: inputText,status:'sent'})
            console.log(this.contacts[this.currentUser].messages)
			this.inputValue = ''
            this.answer()
        },
        answer(){
                setTimeout(() => {
                    this.contacts[this.currentUser].messages.push({date: this.now, message:'Lol',status:'received'})
                }, 2000);
        },
        deleteMessage(){
            this.contacts[this.currentUser].messages.pop()
            // this.contacts[this.currentUser].messages.splice(index) utile per funzioen svuota chat 
        },
        deleteAll(){
            this.contacts[this.currentUser].messages.splice(0, this.contacts[this.currentUser].messages.length )
        },
        time(dateString) {
            const dateTime = DateTime.fromFormat(dateString, "dd/MM/yyyy HH:mm:ss");
            return dateTime.toFormat("HH:mm:ss");
        },
    },
}).mount('#app');


// prendere la parola
// spezza le varie lettere e le divide .split ??
// if lettera inserita === array parola spezzetata ===true ( fa vedere le persone che hanno quella lettera)


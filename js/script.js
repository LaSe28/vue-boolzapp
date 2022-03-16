let app = new Vue({
    el : '#root',
    data: {
        i : 0,
        arrAnsware : ['okok', 'si sto bene', 'che cosa hai bevuto?', 'mi fa piacere :)', 'ci vediamo domani!', 'non scrivermi mai più!'],
        newMessage : 
        {
            text : '',
            sent : true,
            clicked : false,

        },
        chats : [
            {
                contact : {
                    name : 'Michele',
                    img: 'avatar_1.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'hai la macchina stasera?',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'ti serve un passaggio?',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'si',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'allora no',
                        sent : true,
                        clicked : false,
                    }
                ],

            },
            {
                contact : {
                    name : 'Mattia',
                    img: 'avatar_2.jpg',
                },
                messages : [
                    {
                        text : 'Teleciamaragno chiama ragno, ragno rispondi',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'sei ubriaco?',
                        sent : false,
                        clicked : false,
                    }
                ],

            },
            {
                contact : {
                    name : 'Marco',
                    img: 'avatar_4.jpg',
                },
                messages : [
                    {
                        text : 'ei',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'ciao dimmi',
                        sent : false,
                        clicked : false,
                    }
                ],

            },
            {
                contact : {
                    name : 'Luca',
                    img: 'avatar_3.jpg',
                },
                messages : [
                    {
                        text : 'tutto bene?',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'insomma',
                        sent : false,
                        clicked : false,
                    }
                ],

            },
            {
                contact : {
                    name : 'Andrea',
                    img: 'avatar_5.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'come stai?',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'abbastanza bene dai, tu?',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'anche io grazie',
                        sent : false,
                        clicked : false,
                    },
                ],

            },
            {
                contact : {
                    name : 'Veronica',
                    img: 'avatar_6.jpg',
                },
                messages : [
                    {
                        text : 'faccio un po di ritardo a lavoro',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'strano',
                        sent : true,
                        clicked : false,
                    }
                ],

            },
            {
                contact : {
                    name : '+39 3985258932',
                    img: 'avatar_io.jpg',
                },
                messages : [
                    {
                        text : 'hola',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text : 'amigo',
                        sent : false,
                        clicked : false,
                    },
                    {
                        text: 'chi sei?',
                        sent: true,
                        clicked : false,
                    }
                ],
                

            },
            {
                contact : {
                    name : 'Gregorio',
                    img: 'avatar_7.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : true,
                        clicked : false,
                    },
                    {
                        text : 'ehila',
                        sent : false,
                        clicked : false,
                    }
                ],

            },
            
        ],
    },
    methods : {
        addMessage(){
            if(this.newMessage != ''){
                this.chats[this.i].messages.push(this.newMessage)
                setTimeout(() => {this.chats[this.i].messages.push({text : this.arrAnsware[this.randomAnsware()],sent : false, clicked : false,})}, 1000);}
            this.newMessage = {text : '',sent : true, clicked : false,}
            this.randomAnsware()
        },
        randomAnsware(){
            let answare = Math.floor(Math.random()*6)+1
            return answare
        },
        deleteMessage(index){
            this.chats[this.i].messages.splice(index, 1)
        }
    }
})
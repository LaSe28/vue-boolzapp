let app = new Vue({
    el : '#root',
    data: {
        i : 0,
        newMessage : 
        {
            text : '',
            sent : true,
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
                    },
                    {
                        text : 'hai la macchina stasera?',
                        sent : false,
                    },
                    {
                        text : 'ti serve un passaggio?',
                        sent : true,
                    },
                    {
                        text : 'si',
                        sent : false,
                    },
                    {
                        text : 'allora no',
                        sent : true,
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
                    },
                    {
                        text : 'sei ubriaco?',
                        sent : false,
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
                    },
                    {
                        text : 'ciao dimmi',
                        sent : false,
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
                    },
                    {
                        text : 'insomma',
                        sent : false,
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
                    },
                    {
                        text : 'come stai?',
                        sent : false,
                    },
                    {
                        text : 'abbastanza bene dai, tu?',
                        sent : true,
                    },
                    {
                        text : 'anche io grazie',
                        sent : false,
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
                    },
                    {
                        text : 'strano',
                        sent : true,
                    }
                ],

            },
            {
                contact : {
                    name : '+39 3985258932',
                    img: 'avatar_7.jpg',
                },
                messages : [
                    {
                        text : 'hola',
                        sent : false,
                    },
                    {
                        text : 'amigo',
                        sent : false,
                    },
                    {
                        text: 'chi sei?',
                        sent: true
                    }
                ],

            },
            {
                contact : {
                    name : 'Gregorio',
                    img: 'avatar_io.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : true,
                    },
                    {
                        text : 'ehila',
                        sent : false,
                    }
                ],

            },
            
        ],
    },
    methods : {
        addMessage(){
            if(this.newMessage != ''){
                this.chats[this.i].messages.push(this.newMessage)
                setTimeout(() => {this.chats[this.i].messages.push({text : 'ok',sent : false,})}, 1000);}
            this.newMessage = {text : '',sent : true}
        }
    }
})
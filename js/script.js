let app = new Vue({
    el : '#root',
    data: {
        i : 0,
        dark : false,
        search : '',
        arrAnsware : ['okok', 'seh, usciamo', 'che cosa hai bevuto?', 'ma dove andiamooh', 'ma ci andiamo a divertire!', 'non scrivermi mai più!'],
        newMessage : 
        {
            text : '',
            sent : true,
            clicked : false,
            date : null
        },
        mainUser:{
            name: 'Mattia',
            img : 'avatar_8.jpg'
        },
        chats : [
            {
                contact : {
                    name : 'Tony',
                    img: 'avatar_1.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : false,
                        clicked : false,
                        date : '2022-03-17T09:10'
                    },
                    {
                        text : 'hai la macchina stasera?',
                        sent : false,
                        clicked : false,
                        date : '2022-03-17T09:12'
                    },
                    {
                        text : 'ti serve un passaggio?',
                        sent : true,
                        clicked : false,
                        date : '2022-03-17T09:14'
                    },
                    {
                        text : 'si',
                        sent : false,
                        clicked : false,
                        date : '2022-03-17T09:15'
                    },
                    {
                        text : 'allora no',
                        sent : true,
                        clicked : false,
                        date : '2022-03-17T09:17'
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
                        date : '2022-03-17T08:30'
                    },
                    {
                        text : 'sei ubriaco?',
                        sent : false,
                        clicked : false,
                        date : '2022-03-17T08:37'
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
                        date : '2022-03-17T06:30'
                    },
                    {
                        text : 'ciao dimmi',
                        sent : false,
                        clicked : false,
                        date : '2022-03-17T06:32'

                    }
                ],

            },
            {
                contact : {
                    name : 'Gianni',
                    img: 'avatar_3.jpg',
                },
                messages : [
                    {
                        text : 'tutto bene?',
                        sent : true,
                        clicked : false,
                        date : '2022-03-16T10:10',
                    },
                    {
                        text : 'insomma',
                        sent : false,
                        clicked : false,
                        date : '2022-03-16T10:34',
                    }
                ],

            },
            {
                contact : {
                    name : 'Franco',
                    img: 'avatar_5.jpg',
                },
                messages : [
                    {
                        text : 'ciao',
                        sent : true,
                        clicked : false,
                        date : '2022-03-16T06:43',
                    },
                    {
                        text : 'come stai?',
                        sent : false,
                        clicked : false,
                        date : '2022-03-16T06:50',
                    },
                    {
                        text : 'abbastanza bene dai, tu?',
                        sent : true,
                        clicked : false,
                        date : '2022-03-16T07:23',

                    },
                    {
                        text : 'anche io grazie',
                        sent : false,
                        clicked : false,
                        date : '2022-03-16T07:24',

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
                        date : '2022-03-16T07:07',
                    },
                    {
                        text : 'strano',
                        sent : true,
                        clicked : false,
                        date : '2022-03-16T07:10',
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
                        date : '2022-03-15T05:42',
                    },
                    {
                        text : 'amigo',
                        sent : false,
                        clicked : false,
                        date : '2022-03-15T05:42',
                    },
                    {
                        text: 'chi sei?',
                        sent: true,
                        clicked : false,
                        date : '2022-03-15T06:45',
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
                        date : '2022-03-15',
                    },
                    {
                        text : 'ehila',
                        sent : false,
                        clicked : false,
                        date : '2022-03-15',
                    }
                ],
            },
            
        ],
    },
    methods : {
        addMessage(){
            if(this.newMessage.text.trim() != ''){
                this.newMessage.date = luxon.DateTime.now().toFormat('HH:mm')
                this.chats[this.i].messages.push(this.newMessage)
                const index = this.i
                setTimeout(() => {this.chats[index].messages.push({text : this.arrAnsware[this.randomAnsware()],sent : false, clicked : false, date : luxon.DateTime.now().toFormat('HH:mm')})}, 1000);}
            this.newMessage = {text : '',sent : true, clicked : false,date : luxon.DateTime.now().toFormat('HH:mm')}
        },
        randomAnsware(){
            let answare = Math.floor(Math.random()*5)+1
            return answare
        },
        deleteMessage(index){
            this.chats[this.i].messages.splice(index, 1)
        },
        toggleDark(){
            let rootDark = document.querySelector('#root-dark')
            if(this.dark == true){
                this.dark = false
                rootDark.classList.remove('dark')
            } else{
                this.dark = true
                rootDark.classList.add('dark')
            }
        },
        getFormattedDate(date){
            let formatStr = 'dd/MM/yyyy HH:mm'
            return luxon.DateTime.fromISO(date).toFormat(formatStr)
        }
    
    },
    computed:{
        filteredChats: function(){
            return this.chats.filter((chat) => {
                return chat.contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
})
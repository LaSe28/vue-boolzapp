let app = new Vue({
    el : '#root',
    data: {
        i : 0,
        search : '',
        arrAnsware : ['okok', 'seh, usciamo', 'che cosa hai bevuto?', 'ma dove andiamooh', 'ma ci andiamo a divertire!', 'non scrivermi mai più!'],
        newMessage : 
        {
            text : '',
            sent : true,
            clicked : false,
            date : luxon.DateTime.now().toFormat('HH:mm')

        },
        mainUser:{
            name: 'Mattia',
            img : 'avatar_8.jpg'
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
                        date : luxon.DateTime.fromISO('2022-03-17T09:10:00').toFormat('HH:mm')
                    },
                    {
                        text : 'hai la macchina stasera?',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T09:12:00').toFormat('HH:mm')
                    },
                    {
                        text : 'ti serve un passaggio?',
                        sent : true,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T09:14:00').toFormat('HH:mm')
                    },
                    {
                        text : 'si',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T09:15:00').toFormat('HH:mm')
                    },
                    {
                        text : 'allora no',
                        sent : true,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T09:17:00').toFormat('HH:mm')
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
                        date : luxon.DateTime.fromISO('2022-03-17T08:30:00').toFormat('HH:mm')
                    },
                    {
                        text : 'sei ubriaco?',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T08:37:00').toFormat('HH:mm')
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
                        date : luxon.DateTime.fromISO('2022-03-17T06:30:00').toFormat('HH:mm')
                    },
                    {
                        text : 'ciao dimmi',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-17T06:32:00').toFormat('HH:mm')

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
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
                    },
                    {
                        text : 'insomma',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
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
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
                    },
                    {
                        text : 'come stai?',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
                    },
                    {
                        text : 'abbastanza bene dai, tu?',
                        sent : true,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),

                    },
                    {
                        text : 'anche io grazie',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),

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
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
                    },
                    {
                        text : 'strano',
                        sent : true,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-16T10:00:00').toRelativeCalendar(),
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
                        date : luxon.DateTime.fromISO('2022-03-15').toRelativeCalendar(),
                    },
                    {
                        text : 'amigo',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-15').toRelativeCalendar(),
                    },
                    {
                        text: 'chi sei?',
                        sent: true,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-15T10:00:00').toRelativeCalendar(),
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
                        date : luxon.DateTime.fromISO('2022-03-15').toRelativeCalendar(),
                    },
                    {
                        text : 'ehila',
                        sent : false,
                        clicked : false,
                        date : luxon.DateTime.fromISO('2022-03-15').toRelativeCalendar(),
                    }
                ],
            },
            
        ],
    },
    methods : {
        addMessage(){
            if(this.newMessage != ''){
                this.chats[this.i].messages.push(this.newMessage)
                setTimeout(() => {this.chats[this.i].messages.push({text : this.arrAnsware[this.randomAnsware()],sent : false, clicked : false, date : luxon.DateTime.now().toFormat('HH:mm')})}, 1000);}
            this.newMessage = {text : '',sent : true, clicked : false,date : luxon.DateTime.now().toFormat('HH:mm')}
        },
        randomAnsware(){
            let answare = Math.floor(Math.random()*5)+1
            return answare
        },
        deleteMessage(index){
            this.chats[this.i].messages.splice(index, 1)
        },
    
    },
    computed:{
        filteredChats: function(){
            return this.chats.filter((chat) => {
                return chat.contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
})
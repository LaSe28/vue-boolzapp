let app = new Vue({
    el : '#root',
    data: {
        i : 0,
        newMessage : '',
        chats : [
            {
                name : 'Michele',
                img: 'avatar_1.jpg',
                sent : ['ciao'],
                received:['ei ciao'],
            },
            {
                name : 'Luca',
                img: 'avatar_2.jpg',
                sent : ['hola'],
                received:['ei ciao'],
            },
            {
                name : 'Marco',
                img: 'avatar_3.jpg',
                sent : ['ehi'],
                received:['chi si risente'],
            },
            {
                name : 'Mattia',
                img: 'avatar_5.jpg',
                sent : ['teleciamaragno chiama ragno, ragno rispondi'],
                received:['sei ubriaco?'],
            },
            {
                name : 'Andrea',
                img: 'avatar_7.jpg',
                sent : ['ciao'],
                received:['ei ciao'],
            },
            {
                name : 'Veronica',
                img: 'avatar_6.jpg',
                sent : ['ciao, come stai?'],
                received:['ei ciao, abbastanza bene'],
            },
            {
                name : 'Stefano',
                img: 'avatar_4.jpg',
                sent : ['vieni a prende la moto con me?'],
                received:['se finisco l\'esercizio in tempo si'],
            },
            {
                name : '+39 3403929521',
                img: 'avatar_io.jpg',
                sent : ['chi sei?'],
                received:['ei ciao'],
            },
        ],
    },
    methods : {
        addMessage(){
            if(this.newMessage != ''){
                this.chats[this.i].sent.push(this.newMessage)
                setTimeout(() => {this.chats[this.i].received.push('ok')}, 1000);
            }
            this.newMessage = ''
        }
    }
})
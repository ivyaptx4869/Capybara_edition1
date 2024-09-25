const app = Vue.createApp({
    data() {
        return {
            isChatOpen: false,
            messages: [],
            newMessage: ''
        }
    },
    methods: {
        toggleChat() {
            this.isChatOpen = !this.isChatOpen;
        },
        sendMessage() {
            if (this.newMessage.trim()) {
                this.messages.push({
                    content: this.newMessage,
                    isUser: true
                });
                this.getAIResponse(this.newMessage);
                this.newMessage = '';
            }
        },
        getAIResponse(userMessage) {
            setTimeout(() => {
                this.messages.push({
                    content: `您说: "${userMessage}"。这是AI的回复,希望能为您提供帮助。`,
                    isUser: false
                });
            }, 1000);
        },
        launchConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#6a11cb', '#2575fc', '#8e44ad', '#3498db']
            });
        }
    },
    mounted() {
        this.messages.push({
            content: "你好!我是你的AI助手。有什么我可以帮助你的吗?",
            isUser: false
        });
    }
});

app.mount('#app');

document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-text');
    heroText.addEventListener('mouseover', function() {
        app.launchConfetti();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, // 设置为1500毫秒，即1.5秒
        wrap: true
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, // 设置为1500毫秒，即1.5秒
        pause: false // 禁用鼠标悬停暂停
    })
});
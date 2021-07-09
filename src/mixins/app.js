const AppJS = {
    data: function () {
        return {
            windowWidth: 0,
            windowHeight: 0,
            scrollPosition: 0,
            isLoading: true
        }
    },
    created() {
        this.setWindowSize();
    },
    mounted() {
        this.updateScrollPosition();
        
        window.addEventListener('scroll', this.updateScrollPosition);
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('scroll', this.updateScrollPosition);
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        setSplashScreenOff: function () {
            this.isLoading = false;
        },
        setWindowSize: function () {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        },
        validateEmail: function (email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return regex.test(String(email).toLowerCase());
        },
        handleResize: function () {
            this.setWindowSize();
        },
        updateScrollPosition: function () {
            this.scrollPosition = window.scrollY;
        }
    },
    computed: {
        env: function () {
            return process.env;
        }
    }
};

export {
    AppJS
}
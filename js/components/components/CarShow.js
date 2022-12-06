export default {
    name: "thecarshow",
    
    emits: ['loadcardata'],

    // computed: {
    //     mediaYeeter(piece, ref) {
    //         let hiddenClass = 'hidden';
    //         console.log("ping @ mediaYeeter")
    //         if(piece.type == 'pic' && ref == "pic") {
    //             return hiddenClass;
    //         } else if (piece.type == 'vid' && ref == 'vid') {
    //             return hiddenClass;
    //         }
    //         debugger;
    //     },
    // },

    props: {
        piece: Object
    },

    template: `
    <div class="one-item" @click="loadcardata">
                <div class="container">
                    <!-- card -->
                    <div class="card">
                            <!-- top pic -->
                            <div><img :src=piece.image :alt=piece.work_desc></div>
                            <!-- title -->
                            <a>piece.car_complete</a>
                            <!-- why -->
                            <h3 class="cardHide"></h3>
                            <p class="cardHide"></p>
                            <!-- desc -->
                            <p class="cardHide"></p>
                    </div>
                </div>
        </div>
    `,

    methods: {
        loadcardata() {
            console.log("ping @ loadCarData")
            this.$emit('loadcardata', this.piece);
        }
    }
}
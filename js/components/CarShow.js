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
    <div ref="item.car" @click="loadcardata">
                <div class="container">
                    <!-- card -->
                    <div class="card">
                            <!-- top pic -->
                            <div class="carPadding"><img :src='"./images/" + piece.image' :alt=piece.car_complete></div>
                            <!-- title -->
                            <a class="miniText">{{piece.car_complete}} </a>
                            <!-- why -->
                            <h3 class="miniText"> Starting at $ {{piece.price}}</h3>
                            <i class="fa-sharp fa-solid fa-caret-down"></i>
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
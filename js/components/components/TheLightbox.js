export default {
    name: 'TheLightboxComponent',

    props: ['item'],

    emits: ['closelb'],

    template: `
    <section  class="lightbox gradientDark fluid smallBorderRadius">
        <!-- hero image on the left, text on the right -->
        <!-- hero image is a background image -->
        <article class="lightboxContainer">
            <div @click="closeLB" class="lightbox_close white right ">
                <i class="fa-solid fa-circle-xmark fa-4x "></i>
            </div>
            <div>
                <h3 class="lexend mediumText white">{{item.name}}</h3>
            </div>
            <div class="d-middleVid">
                <div v-if="item.type === 'vid'"><video autoplay controls loop :src=item.path></video></div>
                <div v-else><img :src=item.path :alt=item.work_desc></div>
            </div>

            <div>
            <p class="smallText lexend white">{{ item.work_desc }}</p>
            </div>

            <div>
            <p class="smallText lexend white">{{ item.programs }}</p>
            </div>
        </article>
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
}
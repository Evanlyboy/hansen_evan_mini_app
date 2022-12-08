export default {
    name: 'TheLightboxComponent',

    props: ['item'],

    emits: ['closelb'],

    template: `
    <section  class="lightbox gradientDark fluid smallBorderRadius">

        <article class="lightboxContainer">

        <div class="two-items">
            
            <div>
                <h3 class="miniText mediumText">{{item.car_complete}}</h3>
            </div>

            <div @click="closeLB" class="lightbox_close">
                <i class="fa-solid fa-circle-xmark fa-4x "></i>
            </div>

        </div>

            <div class="two-items">

                <div class="carPadding">
                    <div><img :src='"./images/" + item.image' :alt=item.car_complete></div>
                    <button class="miniText center">Learn More</button>
                </div>

                <div class="two-items"> 
                
                    <div class="infoBox centerText center miniText noMargin">
                    <p class="smallText">Finance at</p>
                    <p class="mediumText">{{ item.finance_rate }}% </p>
                    <p class="smallText">per month</p>
                    </div>

                    <div class="infoBox centerText center miniText noMargin">
                    <p class="smallText">Only</p>
                    <p class="mediumText">$\{{ item.finance_pay }}</p>
                    <p class="smallText">per month for 84 months</p>
                    </div>

                    <div class="infoBox centerText center miniText noMargin">
                    <p class="smallText">Lease at</p>
                    <p class="mediumText">{{ item.lease_rate }}% </p>
                    <p class="smallText">per month</p>
                    </div>

                    <div class="infoBox centerText center miniText noMargin">
                    <p class="smallText">Only </p>
                    <p class="mediumText">$\{{ item.lease_pay }}</p>
                    <p class="smallText">per month for 48 months</p>
                    </div>

                </div>

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
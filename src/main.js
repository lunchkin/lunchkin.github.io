import { createApp } from 'vue';
import App from './App.vue';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebookF, faTwitter, faGithub, faLinkedinIn);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
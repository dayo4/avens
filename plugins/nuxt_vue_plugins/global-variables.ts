// import {Plugin} from '@nuxt/types'

import moment from 'moment'

// GLOBAL VUE VARIABLES
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://127.0.0.1:3000/'

const appLogo = function (cssClasses: string /* provide the respective css class to decide how the logo is displayed */) {
    return `
        <div class="logo-base ${cssClasses ? cssClasses : 'logo-trans-1 shadow-2'}">
            <span>
                <span></span>
                <span></span>
            </span>
            <span></span>
        </div>
    `
}

export default function (context, inject) {
    inject('moment', moment)
    inject('baseUrl', BASE_URL)
    inject('postBaseUrl', BASE_URL + 'pst/')
    inject('userBaseUrl', BASE_URL + 'usr/')
    inject('appLogo', appLogo)
}

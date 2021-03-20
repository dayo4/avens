// import {Plugin} from '@nuxt/types'

import moment from 'moment'

// GLOBAL VUE VARIABLES
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://127.0.0.1:3000/'

export default function (context, inject) {
    inject('moment', moment)
    inject('baseUrl', BASE_URL)
    inject('postBaseUrl', BASE_URL + 'pst/')
    inject('userBaseUrl', BASE_URL + 'usr/')
    inject('appLogo', `
        <div class="logo-base logo-trans-2 logo-large logo-fast shadow-5">
            <span>
                <span>
                    <b>S</b>
                </span>
                <span></span>
            </span>
            <span></span>
        </div>
    `)
}

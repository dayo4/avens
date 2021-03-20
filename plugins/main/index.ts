import Vue from 'vue'
import _axios from "./Axios"
import { createRouter } from '@/router'
import { io } from './WebSocket'

export const $Vue = Vue
export const $Axios = _axios
export const $Router = createRouter()
export const WS = io
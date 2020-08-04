import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        const hello = vm.$el.querySelector('.hello h1') as HTMLElement
        expect(hello.textContent)
            .toEqual('Welcome to Your Vue.js App')
    })
})

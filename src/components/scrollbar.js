import {
  getScrollBarSize, isMobile
} from './util'
export default {
  methods: {
    checkScrollBar () {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        const documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = getScrollBarSize()
      }
    },
    setScrollBar () {
      if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`
      }
    },
    resetScrollBar () {
      document.body.style.paddingRight = ''
    },
    fixedBody () {
      let body = document.body
      let html = document.documentElement
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      body.style.cssText += 'position:fixed;top:-' + scrollTop + 'px;'
      body.classList.add('v-cascade-open')
      html.classList.add('v-cascade-open')
    },
    looseBody () {
      let body = document.body
      let html = document.documentElement
      let top = body.style.top
      body.style.position = ''
      body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
      body.style.top = ''
      body.classList.remove('v-cascade-open')
      html.classList.remove('v-cascade-open')
    },
    addScrollEffect () {
      this.checkScrollBar()
      this.setScrollBar()
      if (isMobile) {
        this.fixedBody()
      }
      document.body.style.overflow = 'hidden'
    },
    removeScrollEffect () {
      this.resetScrollBar()
      if (isMobile) {
        this.looseBody()
      }
      document.body.style.overflow = ''
    }
  }
}

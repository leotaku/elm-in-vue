function Embed(elm) {
  return {
    props: {
      ports: {
        type: Function,
        required: false
      },
      flags: {
        type: Object,
        required: false
      }
    },
    render: function (createElement, _context) {
      console.log(_context)
      return createElement('div')
    },
    mounted: function () {
      const node = this.$el
      const app = elm.embed(node, this.$props.flags)

      if (this.$props.ports) {
        this.$props.ports(app.ports);
      }
    }
  }
}

export { Embed as default }

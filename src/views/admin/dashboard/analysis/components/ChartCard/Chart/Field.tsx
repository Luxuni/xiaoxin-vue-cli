const FieldProps = {
  label: {
    type: String,
    default: () => ''
  },
  value: {
    type: String,
    default: () => ''
  }
}
const Field = defineComponent({
  name: 'Field',
  props: FieldProps,
  setup() {},
  render() {
    return (
      <div>
        <span class={'mr-2'}>{this.$props.label}</span>
        <span>{this.$props.value}</span>
      </div>
    )
  }
})
export default Field

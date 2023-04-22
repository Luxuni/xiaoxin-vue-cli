import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { RouterLink } from 'vue-router'
import router from '@/router'

const ProBreadCrumn = defineComponent({
  name: 'ProBreadCrumn',
  setup() {
    const route = router.currentRoute
    return {
      route
    }
  },
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <RouterLink to={{ name: 'home' }}>Home</RouterLink>
        </BreadcrumbItem>
        {this.route.matched.map(
          (r, index) =>
            r.meta.title && (
              <BreadcrumbItem key={index}>
                <RouterLink to={{ path: r.path }}>{r.meta.title}</RouterLink>
              </BreadcrumbItem>
            )
        )}
      </Breadcrumb>
    )
  }
})
export default ProBreadCrumn

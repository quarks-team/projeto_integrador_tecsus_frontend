import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(App)
  expect(wrapper.exists()).toBe(true)
})

it('should render the Sidebar component', () => {
  const wrapper = mount(App)
  expect(wrapper.findComponent(Sidebar).exists()).toBe(true)
})

it('should include a RouterView component', () => {
  const wrapper = mount(App)
  expect(wrapper.findComponent(RouterView).exists()).toBe(true)
})

it('should transition components on route change', async () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const routes = [{ path: '/', component: DummyComponent }]
  const router = new VueRouter({ routes })
  const wrapper = mount(App, { localVue, router })

  await router.push('/')
  await wrapper.vm.$nextTick()

  const transition = wrapper.findComponent({ name: 'transition' })
  expect(transition.exists()).toBe(true)
  expect(transition.attributes('name')).toBe('fade')
})

it('should render dynamic components via RouterView', async () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const TestComponent = { template: '<div>Test Component</div>' }
  const routes = [{ path: '/test', component: TestComponent }]
  const router = new VueRouter({ routes })
  const wrapper = mount(App, { localVue, router })

  router.push('/test')
  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toContain('Test Component')
})

it('should have a main container with specific style', () => {
  const wrapper = mount(App)
  const container = wrapper.find('.app-container')
  expect(container.exists()).toBe(true)
  expect(container.classes()).toContain('flex-direction-column')
})

it('should apply scoped styles', () => {
  const wrapper = mount(App)
  const styles = wrapper.vm.$style
  // Verificação conceitual, ajustar conforme necessidade
  expect(styles['app-container']).toContain('flex')
})

it('should render without errors with default props', () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toMatchSnapshot()
})

it('should clean up when the component is destroyed', () => {
  const wrapper = mount(App)
  wrapper.destroy()
  // Verifique a limpeza de qualquer evento ou estado
  expect(wrapper.exists()).toBe(false)
})

it('should react to dynamic component changes', async () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const TestComponent1 = { template: '<div>Component 1</div>' }
  const TestComponent2 = { template: '<div>Component 2</div>' }
  const routes = [
    { path: '/1', component: TestComponent1 },
    { path: '/2', component: TestComponent2 }
  ]
  const router = new VueRouter({ routes })
  const wrapper = mount(App, { localVue, router })

  await router.push('/1')
  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toContain('Component 1')

  await router.push('/2')
  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toContain('Component 2')
})

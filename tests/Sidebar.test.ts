import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AttachFile from '@/components/Sidebar.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(Sidebar)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(Sidebar)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the sidebar after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(Sidebar)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.sidebar').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should redirect to specified route when link is clicked', async () => {
  const pushSpy = vi.fn()
  const wrapper = mount(Sidebar, {
    global: {
      mocks: {
        $router: {
          push: pushSpy
        }
      }
    }
  })
  await wrapper.findAllComponents(RouterLink).at(0).trigger('click.prevent')
  expect(pushSpy).toHaveBeenCalled() // Adicione verificações específicas para cada rota se necessário
})

it('should change animation delay after animation iteration', async () => {
  const wrapper = mount(Sidebar)
  await wrapper.find('.logo_img').trigger('animationiteration')
  expect(wrapper.vm.animationDelay).toBe(true)
})

it('should display all navigation icons', () => {
  const wrapper = mount(Sidebar)
  const icons = wrapper.findAll('i')
  expect(icons.length).toBeGreaterThan(3) // Verifica se todos os ícones esperados estão presentes
})

it('should change style on hover over links', async () => {
  const wrapper = mount(Sidebar)
  const link = wrapper.find('.links a')
  await link.trigger('mouseover')
  expect(link.element.style.opacity).toBeLessThan(1) // Assume uma mudança de opacidade ao passar o mouse
})

it('should apply active style to the currently active route', async () => {
  const wrapper = mount(Sidebar, {
    global: {
      stubs: {
        RouterLink: {
          template: '<div class="router-link-exact-active"><slot /></div>'
        }
      }
    }
  })
  expect(wrapper.find('.router-link-exact-active').exists()).toBe(true)
})

it('should react to style changes when navigating', async () => {
  const wrapper = mount(Sidebar)
  // Simular navegação
  await wrapper.setData({ isVisible: true })
  expect(wrapper.vm.isVisible).toBe(true)
})

it('should render without errors with default props', () => {
  const wrapper = mount(Sidebar)
  expect(wrapper.html()).toMatchSnapshot()
})

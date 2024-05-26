import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AttachFile from '@/components/DashLuz.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(DashLuz)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(DashLuz)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(DashLuz)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-card-luz').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should redirect to light dashboard when clicked', async () => {
  const pushSpy = vi.fn()
  const wrapper = mount(DashLuz, {
    global: {
      mocks: {
        $router: {
          push: pushSpy
        }
      }
    }
  })
  await wrapper.find('.container-card-luz').trigger('click.prevent')
  expect(pushSpy).toHaveBeenCalledWith('/luz')
})

it('should change style on hover', async () => {
  const wrapper = mount(DashLuz)
  await wrapper.find('.container-card-luz').trigger('mouseover')
  expect(wrapper.find('.container-card-luz').classes()).toContain('hover-style')
})

it('should display an image', () => {
  const wrapper = mount(DashLuz)
  expect(wrapper.find('img').exists()).toBe(true)
})

it('should clean up when the component is destroyed', () => {
  const wrapper = mount(DashLuz)
  wrapper.unmount()
  expect(wrapper.vm.isVisible).toBe(undefined)
})

it('should handle screen size changes correctly', () => {
  const wrapper = mount(DashLuz)
  global.innerWidth = 500
  global.dispatchEvent(new Event('resize'))
  expect(wrapper.vm.isMobile).toBe(true)
})

it('should render without errors with default props', () => {
  const wrapper = mount(DashLuz)
  expect(wrapper.html()).toMatchSnapshot()
})

it('should handle drag events appropriately', async () => {
  const wrapper = mount(DashLuz)
  await wrapper.find('.container-card-luz').trigger('dragstart')
  // Verificar se há algum estado ou classe aplicada durante o drag
  expect(wrapper.vm.isDragging).toBe(true)
})

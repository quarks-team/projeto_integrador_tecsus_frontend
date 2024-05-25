import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PowerBiAgua from '@/views/PowerBiAgua.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(PowerBiAgua)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(PowerBiAgua)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(PowerBiAgua)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-powerbi').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should render iframe with the correct Power BI source', () => {
  const wrapper = mount(PowerBiAgua)
  const iframe = wrapper.find('iframe')
  expect(iframe.exists()).toBe(true)
  expect(iframe.attributes('src')).toBe(wrapper.vm.powerBiSrc)
})

it('should display the home and light dashboard icons', () => {
  const wrapper = mount(PowerBiAgua)
  expect(wrapper.find('.fa-house').exists()).toBe(true)
  expect(wrapper.find('img[src="../assets/icons/luz.png"]').exists()).toBe(true)
})

it('should increase icon opacity on hover', async () => {
  const wrapper = mount(PowerBiAgua)
  const img = wrapper.find('img[src="../assets/icons/luz.png"]')
  await img.trigger('mouseover')
  expect(img.element.style.opacity).toBe('1')
})

it('should navigate to home when home icon is clicked', async () => {
  const pushSpy = vi.fn()
  const wrapper = mount(PowerBiAgua, {
    global: {
      mocks: {
        $router: {
          push: pushSpy
        }
      }
    }
  })
  await wrapper.find('.fa-house').trigger('click')
  expect(pushSpy).toHaveBeenCalledWith('/')
})

it('should display the water icon when not visible', () => {
  const wrapper = mount(PowerBiAgua)
  expect(wrapper.find('.entre-paginas img[src="../assets/icons/agua.png"]').exists()).toBe(true)
})

it('should react to a manual change in isVisible', async () => {
  const wrapper = mount(PowerBiAgua)
  wrapper.vm.isVisible = true
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-powerbi').isVisible()).toBe(true)
})

it('should render without errors with default props', () => {
  const wrapper = mount(PowerBiAgua)
  expect(wrapper.html()).toMatchSnapshot()
})

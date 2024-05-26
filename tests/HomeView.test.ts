import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(HomeView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should initially show the house icon', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.find('.fa-house').exists()).toBe(true)
})

it('should render DashAgua and DashLuz components', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.findComponent(DashAgua).exists()).toBe(true)
  expect(wrapper.findComponent(DashLuz).exists()).toBe(true)
})

it('should hide the house icon after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(HomeView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.fa-house').exists()).toBe(false)
  vi.useRealTimers()
})

it('should display the "Dashboards" title after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(HomeView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal h1').text()).toContain('Dashboards')
  vi.useRealTimers()
})

it('should have a correct grid structure for dash components', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.find('.container-dash').element.style.display).toBe('grid')
})

it('should react to a manual change in isVisible', async () => {
  const wrapper = mount(HomeView)
  wrapper.vm.isVisible = true
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
})

it('should render without errors with default props', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.html()).toMatchSnapshot()
})

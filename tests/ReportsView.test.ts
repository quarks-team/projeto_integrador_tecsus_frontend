import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ReportsView from '@/views/ReportsView.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(ReportsView)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(ReportsView)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(ReportsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should display the "Relatórios" title after becoming visible', async () => {
  vi.useFakeTimers()
  const wrapper = mount(ReportsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal h1').text()).toContain('Relatórios')
  vi.useRealTimers()
})

it('should initially show the contract icon', () => {
  const wrapper = mount(ReportsView)
  expect(wrapper.find('.fa-file-contract').exists()).toBe(true)
})

it('should hide the contract icon after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(ReportsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.fa-file-contract').exists()).toBe(false)
  vi.useRealTimers()
})

it('should react to a manual change in isVisible', async () => {
  const wrapper = mount(ReportsView)
  wrapper.vm.isVisible = true
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
})

it('should clean up when the component is destroyed', () => {
  const wrapper = mount(ReportsView)
  wrapper.vm.$destroy()
  expect(wrapper.vm.isVisible).toBe(undefined)
})

it('should render without errors with default props', () => {
  const wrapper = mount(ReportsView)
  expect(wrapper.html()).toMatchSnapshot()
})

it('should always render the main container', () => {
  const wrapper = mount(ReportsView)
  expect(wrapper.find('.container-principal').exists()).toBe(true)
})

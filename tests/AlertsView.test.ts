import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AlertsView from '@/views/AlertsView.vue'

describe('AlertsView.vue', () => {
  it('should toggle isVisible after 1 second', async () => {
    vi.useFakeTimers()
    const wrapper = mount(AlertsView)
    expect(wrapper.find('.container-principal').exists()).toBe(false)
    expect(wrapper.find('.entre-paginas').exists()).toBe(true)

    // Move on the time to 1000ms
    vi.advanceTimersByTime(1000)

    // Waiting for DOM update
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.container-principal').exists()).toBe(true)
    expect(wrapper.find('.entre-paginas').exists()).toBe(false)

    vi.useRealTimers()
  })
})

it('should mount the component correctly', () => {
  const wrapper = mount(AlertsView)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(AlertsView)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(AlertsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should initially show the bell icon', () => {
  const wrapper = mount(AlertsView)
  expect(wrapper.find('.fa-bell').exists()).toBe(true)
})

it('should hide the bell icon after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(AlertsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.fa-bell').exists()).toBe(false)
  vi.useRealTimers()
})

it('should display the "Alertas" heading after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(AlertsView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal h1').text()).toContain('Alertas')
  vi.useRealTimers()
})

it('should react to a manual change in isVisible', async () => {
  const wrapper = mount(AlertsView)
  wrapper.vm.isVisible = true
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-principal').isVisible()).toBe(true)
})

it('should render without errors with default props', () => {
  const wrapper = mount(AlertsView)
  expect(wrapper.html()).toMatchSnapshot()
})

import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import EmDesenvolvimentoView from '@/views/EmDesenvolvimentoView.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(EmDesenvolvimentoView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-dev').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should start with contagem at 10', () => {
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.vm.contagem).toBe(10)
})

it('should decrement contagem every second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(EmDesenvolvimentoView)
  vi.advanceTimersByTime(1000)
  expect(wrapper.vm.contagem).toBe(9)
  vi.advanceTimersByTime(9000)
  expect(wrapper.vm.contagem).toBe(0)
  vi.useRealTimers()
})

it('should clear the interval when the component is unmounted', () => {
  const clearIntervalSpy = vi.spyOn(window, 'clearInterval')
  const wrapper = mount(EmDesenvolvimentoView)
  wrapper.unmount()
  expect(clearIntervalSpy).toHaveBeenCalled()
})

it('should display the locked image', () => {
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.find('img').attributes('src')).toContain('lock.gif')
})

it('should redirect to home after countdown reaches zero', async () => {
  vi.useFakeTimers()
  const pushSpy = vi.fn()
  const wrapper = mount(EmDesenvolvimentoView, {
    global: {
      mocks: {
        $router: {
          push: pushSpy
        }
      }
    }
  })
  vi.advanceTimersByTime(10000)
  await wrapper.vm.$nextTick()
  expect(pushSpy).toHaveBeenCalledWith('/')
  vi.useRealTimers()
})

it('should update the countdown text in real-time', async () => {
  vi.useFakeTimers()
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.find('p').text()).toContain('10s')
  vi.advanceTimersByTime(5000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('p').text()).toContain('5s')
  vi.useRealTimers()
})

it('should initially show the bell icon', () => {
  const wrapper = mount(EmDesenvolvimentoView)
  expect(wrapper.find('.fa-bell').exists()).toBe(true)
})

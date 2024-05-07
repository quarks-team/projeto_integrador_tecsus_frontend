import { mount } from '@vue/test-utils'
import AlertsView from '@/views/AlertsView.vue'

describe('AlertsView.vue', () => {
  it('should initially hide the alerts container and show the icon', async () => {
    const wrapper = mount(AlertsView)
    expect(wrapper.find('.container-principal').exists()).toBe(false)
    expect(wrapper.find('.entre-paginas').exists()).toBe(true)
  })

  it('should show the alerts container after 1 second', async () => {
    jest.useFakeTimers()
    const wrapper = mount(AlertsView)
    expect(wrapper.find('.container-principal').isVisible()).toBe(false)

    // Advance timers by 1 second
    jest.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.container-principal').isVisible()).toBe(true)
    expect(wrapper.find('.entre-paginas').exists()).toBe(false)
    jest.useRealTimers()
  })
})

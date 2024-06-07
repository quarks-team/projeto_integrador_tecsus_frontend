import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils';
import PowerBiLuz from '../src/views/PowerBiLuz.vue'

const createWrapper = (isVisible = true, powerBiSrc = '') => {
  return mount(PowerBiLuz, {
    data() {
      return { isVisible, powerBiSrc };
    } 
  });
};

describe('PowerBiLuz.vue', () => {

  it('should mount the component correctly', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.exists()).toBe(true)
  })

  it('should start with isVisible set to false', async () => {
    const wrapper = createWrapper(false);
    await flushPromises();
    expect(wrapper.vm.isVisible).toBe(false)
  })

  it('should display the main container after 1 second', async () => {
    vi.useFakeTimers()
    const wrapper = createWrapper();
    vi.advanceTimersByTime(1000)
    await flushPromises();
    expect(wrapper.find('.container-powerbi').isVisible()).toBe(true)
    vi.useRealTimers()
  })

  it('should render iframe with the correct Power BI source', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const iframe = wrapper.find('iframe')
    expect(iframe.exists()).toBe(true)
    expect(iframe.attributes('src')).toBe(wrapper.vm.powerBiSrc)
  })

  it('should render without errors with default props', async () => {
    const wrapper = createWrapper(false);
    await flushPromises();
    expect(wrapper.html()).toMatchSnapshot()
  })

});
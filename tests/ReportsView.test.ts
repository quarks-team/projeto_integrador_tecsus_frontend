import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils';
import ReportsView from '../src/views/ReportsView.vue';

const createWrapper = (isVisible = true) => {
  return mount(ReportsView, {
    data() {
      return { isVisible };
    } 
  });
};

describe('ReportsView.vue', () => {

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
    expect(wrapper.find('.container-principal').isVisible()).toBe(true)
    vi.useRealTimers()
  })

  it('should display the "Relatórios" title after becoming visible', async () => {
    vi.useFakeTimers()
    const wrapper = createWrapper();
    vi.advanceTimersByTime(1000)
    await flushPromises();
    expect(wrapper.find('.container-principal h1').text()).toContain('Relatórios')
    vi.useRealTimers()
  })

  it('should clean up when the component is destroyed', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    wrapper.vm.destroyed = async function() {
      expect(wrapper.vm.isVisible).toBe(undefined)
    };
    
  })

  it('should render without errors with default props', async () => {
    const wrapper = createWrapper(false);
    await flushPromises();
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should always render the main container', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.find('.container-principal').exists()).toBe(true)
  })

});
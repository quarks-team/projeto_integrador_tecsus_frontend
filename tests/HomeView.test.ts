import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils';
import HomeView from '../src/views/HomeView.vue'

vi.mock('../src/components/DashAgua.vue', () => ({
  default: {
    name: 'DashAgua',
    template: '<div class="agua">Dashboard Água</div>',
    data() {
      return {
        isVisible: true
      };
    }
  }
}));

vi.mock('../src/components/DashLuz.vue', () => ({
  default: {
    name: 'DashLuz',
    template: '<div class="luz">Dashboard Energia</div>',
    data() {
      return {
        isVisible: true
      };
    }
  }
}));

const createWrapper = (isVisible = true) => {
  return mount(HomeView, {
    data() {
      return { isVisible };
    } 
  });
};

describe('HomeView.vue', () => {

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

  it('should render DashAgua and DashLuz components', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const dashAgua = wrapper.findComponent({ name: 'DashAgua' });
    console.log('DashAgua Component:', dashAgua.exists() ? dashAgua.html() : 'N/A');
    expect(dashAgua.exists()).toBe(true);
    const dashLuz = wrapper.findComponent({ name: 'DashLuz' });
    console.log('DashLuz Component:', dashLuz.exists() ? dashLuz.html() : 'N/A');
    expect(dashLuz.exists()).toBe(true);
  })

  it('should display the "Dashboards" title after 1 second', async () => {
    vi.useFakeTimers()
    const wrapper = createWrapper();
    vi.advanceTimersByTime(1000)
    await flushPromises();
    expect(wrapper.find('.container-principal h1').text()).toContain('Selecione um Dashboard:')
    vi.useRealTimers()
  })

  it('should render correctly the main container for dash components', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.find('.container-dash').exists()).toBe(true)
  })

});

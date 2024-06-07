import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlertsView from '../src/views/AlertsView.vue'

describe('AlertsView.vue', () => {
  it('should toggle isVisible after 1 second', async () => {
    const wrapper = mount(AlertsView);
    expect(wrapper.find('.container').exists()).toBe(false);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('should mount the component correctly', () => {
    const wrapper = mount(AlertsView);
    expect(wrapper.exists()).toBe(true);
  });

  it('should start with isVisible set to false', () => {
    const wrapper = mount(AlertsView);
    expect(wrapper.vm.isVisible).toBe(false);
  });

  it('should display the main container after 1 second', async () => {
    const wrapper = mount(AlertsView);
    expect(wrapper.find('.container').exists()).toBe(false);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('should hide the bell icon after 1 second', async () => {
    const wrapper = mount(AlertsView);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('i.fa-bell').exists()).toBe(false);
  });

  it('should display the "Alertas de Consumo" heading after 1 second', async () => {
    const wrapper = mount(AlertsView);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('h1').text()).toBe('Alertas de Consumo');
  });

  it('should react to a manual change in isVisible', async () => {
    const wrapper = mount(AlertsView);
    wrapper.vm.isVisible = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('should render without errors with default props', () => {
    const wrapper = mount(AlertsView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

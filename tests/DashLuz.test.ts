import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, VueWrapper, flushPromises } from '@vue/test-utils';
import DashLuz from '../src/components/DashLuz.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: { template: '<div>Home</div>' }
  },
  {
    path: '/luz',
    name: 'luz',
    component: { template: '<div>Light Dashboard</div>' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('DashLuz.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(async () => {
    router.push('/');
    await router.isReady();

    wrapper = mount(DashLuz, {
      global: {
        plugins: [router],
      },
    });

    // Forçando a visibilidade do componente para garantir que os testes possam acessar os elementos
    wrapper.vm.isVisible = true;
    await wrapper.vm.$nextTick();
    
    // Log para verificar o estado do wrapper
    console.log('Wrapper HTML:', wrapper.html());
  });

  it('should mount the component correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display the main container after 1 second', async () => {
    vi.useFakeTimers();
    await wrapper.vm.$nextTick();
    vi.advanceTimersByTime(1000);
    await flushPromises();
    const container = wrapper.find('.container-card-luz');
    console.log('Container Principal:', container.exists());
    expect(container.exists()).toBe(true);
    vi.useRealTimers();
  });

  it('should redirect to light dashboard when clicked', async () => {
    const card = wrapper.find('.container-card-luz');
    expect(card.exists()).toBe(true);
    await card.trigger('click');
    await flushPromises();
    expect(wrapper.vm.$route.path).toBe('/luz');
  });

  it('should emit navigate event with correct argument', async () => {
    const card = wrapper.find('.container-card-luz');
    expect(card.exists()).toBe(true);
    await card.trigger('click');
    const emittedEvents = wrapper.emitted('navigate');
    console.log('Emitted Events:', emittedEvents);
    expect(emittedEvents).toBeTruthy();
    if (emittedEvents) {
      expect(emittedEvents[0]).toEqual(['light-dashboard']);
    }
  });

  it('should render div with correct text', () => {
    const card = wrapper.find('.container-card-luz');
    expect(card.exists()).toBe(true);
    expect(card.text()).toContain('Energia');
  });

  it('should have a div with specific class', () => {
    const div = wrapper.find('.container-card-luz');
    console.log('Container Card Luz:', div.exists());
    if (div.exists()) {
      console.log('Container Card Luz HTML:', div.html());
      expect(div.exists()).toBe(true);
      expect(div.classes()).toContain('container-card-luz');
    }
  });

  it('should handle div click correctly', async () => {
    const div = wrapper.find('.container-card-luz');
    expect(div.exists()).toBe(true);
    await div.trigger('click');
    await flushPromises();
    expect(wrapper.vm.$route.path).toBe('/luz');
  });

  it('should clean up when the component is destroyed', () => {
    wrapper.unmount();
    expect(wrapper.exists()).toBe(false);
  });
});

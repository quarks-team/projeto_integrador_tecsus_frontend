import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import Sidebar from '../src/components/Sidebar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: App }],
});

describe('App.vue', () => {
  it('should mount the component correctly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Sidebar component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    expect(wrapper.findComponent(Sidebar).exists()).toBe(true);
  });

  it('should include a RouterView component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
  });

  it('should have a main container with specific style', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    expect(wrapper.find('div.app-container').exists()).toBe(true);
  });

  it('should apply scoped styles', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    const hasScopedStyles = wrapper.html().includes('data-v-');
    expect(hasScopedStyles).toBe(true);
  });

  it('should render without errors with default props', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should clean up when the component is destroyed', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    wrapper.unmount();
    expect(wrapper.exists()).toBe(false);
  });

  it('should handle navigation correctly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          'router-view': true,
          'router-link': true,
        },
      },
    });
    await router.push('/');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(App).exists()).toBe(true);
  });
});

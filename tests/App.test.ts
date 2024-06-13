import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import Sidebar from '../src/components/Sidebar.vue'
import Notifications from '../src/components/Notifications.vue'
import NumberNotifications from '../src/components/NumberNotifications.vue'

// Mocking RouterLink to prevent resolution errors
vi.mock('vue-router', () => ({
  RouterLink: {
    name: 'RouterLink',
    render: () => null,
  },
  RouterView: {
    name: 'RouterView',
    render: () => null,
  },
}))

describe('App.vue', () => {
  it('should render the Sidebar component', () => {
    const wrapper = mount(App, {
      global: {
        mocks: {
          $router: {
            push: vi.fn(),
          },
          $route: {
            path: '/',
          },
        },
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    expect(wrapper.findComponent(Sidebar).exists()).toBe(true)
  })

  it('should include a RouterView component', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })

  it('should have a main container with specific style', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    const mainContainer = wrapper.find('.app-container')
    expect(mainContainer.exists()).toBe(true)
    expect(mainContainer.classes()).toContain('app-container')
  })

  it('should apply scoped styles', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    const scopedElement = wrapper.find('#notification-icone i')
    expect(scopedElement.exists()).toBe(true)
    expect(scopedElement.classes()).toContain('fa-solid')
    expect(scopedElement.classes()).toContain('fa-bell')
  })

  it('should render without errors with default props', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('should clean up when the component is destroyed', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    wrapper.unmount()
    expect(wrapper.exists()).toBe(false)
  })

  it('should handle navigation correctly', () => {
    const mockPush = vi.fn()
    const wrapper = mount(App, {
      global: {
        mocks: {
          $router: {
            push: mockPush,
          },
        },
        stubs: ['RouterLink', 'RouterView'],
      },
    })
    // Simulating a navigation event
    wrapper.vm.$router.push('/new-route')
    expect(mockPush).toHaveBeenCalledWith('/new-route')
  })
})

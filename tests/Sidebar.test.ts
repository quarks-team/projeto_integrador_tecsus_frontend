import { describe, it, expect, vi } from 'vitest';
import { mount, flushPromises, DOMWrapper } from '@vue/test-utils';
import Sidebar from '../src/components/Sidebar.vue';

const createWrapper = (animationDelay = false) => {
  return mount(Sidebar, {
    data() {
      return { animationDelay };
    } 
  });
};


describe('Sidebar.vue', () => {

  it('should mount the component correctly', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.exists()).toBe(true)
  })

  it('should redirect to specified route when link is clicked', async () => {
    const pushSpy = vi.fn()
    const wrapper = mount(Sidebar, {
      data() {
        return { animationDelay: false };
      },

      global: {
        mocks: {
          $router: {
            push: pushSpy
          }
        }
      }
    });
    await flushPromises();
    let routes: DOMWrapper<Element>[] = wrapper.findAll('.links a');
    for (let route of routes) {
      await route.trigger('click.prevent');
      await expect(pushSpy).toHaveBeenCalled();
    }
  })

  it('should change style on hover over links', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    let routes: DOMWrapper<Element>[] = wrapper.findAll('.links a');
    for (let link of routes) {
    await link.trigger('mouseover');
    await expect(link.element.getAttribute('style')).not.toBe('opacity: 1');
    }
  })

});
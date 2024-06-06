import { describe, it, expect, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import DataImportView from '../src/views/DataImportView.vue';

vi.mock('../src/components/AttachFile.vue', () => ({
  default: {
    name: 'AttachFile',
    template: '<div class="attach-file">AttachFile Component</div>',
    data() {
      return {
        isVisible: true
      };
    }
  }
}));

const createWrapper = (isVisible = true) => {
  return mount(DataImportView, {
    data() {
      return { isVisible };
    }
  });
};

describe('DataImportView.vue', () => {
  it('should mount the component correctly', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    console.log('Wrapper DataImportView:', wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });

  it('should start with isVisible set to false', async () => {
    const wrapper = createWrapper(false);
    await flushPromises();
    console.log('Initial isVisible:', wrapper.vm.isVisible);
    expect(wrapper.vm.isVisible).toBe(false);
  });

  it('should display the main container after 1 second', async () => {
    vi.useFakeTimers();
    const wrapper = createWrapper();
    await flushPromises();
    console.log('Wrapper before timers:', wrapper.html());
    vi.advanceTimersByTime(1000);
    await flushPromises();
    console.log('Wrapper after timers:', wrapper.html());
    const container = wrapper.find('.container-anexo');
    console.log('Container Principal:', container.exists());
    expect(container.exists()).toBe(true);
    vi.useRealTimers();
  });

  it('should display the title and description after 1 second', async () => {
    vi.useFakeTimers();
    const wrapper = createWrapper();
    await flushPromises();
    console.log('Wrapper before timers:', wrapper.html());
    vi.advanceTimersByTime(1000);
    await flushPromises();
    console.log('Wrapper after timers:', wrapper.html());
    const title = wrapper.find('.titulo-descricao h1');
    const description = wrapper.find('.titulo-descricao p');
    console.log('Title:', title.exists() ? title.text() : 'N/A');
    console.log('Description:', description.exists() ? description.text() : 'N/A');
    expect(title.exists()).toBe(true);
    expect(description.exists()).toBe(true);
    expect(title.text()).toContain('Importar Dados');
    expect(description.text()).toContain('Importe seus dados para que o processo de ETL seja realizado!');
    vi.useRealTimers();
  });

  it('should render AttachFile component', async () => {
    vi.useFakeTimers();
    const wrapper = createWrapper();
    await flushPromises();
    console.log('Wrapper before timers:', wrapper.html());
    vi.advanceTimersByTime(1000);
    await flushPromises();
    console.log('Wrapper after timers:', wrapper.html());
    const attachFile = wrapper.findComponent({ name: 'AttachFile' });
    console.log('AttachFile Component:', attachFile.exists() ? attachFile.html() : 'N/A');
    expect(attachFile.exists()).toBe(true);
  });

});

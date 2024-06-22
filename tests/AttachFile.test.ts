import { describe, it, expect, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import AttachFile from '../src/components/AttachFile.vue';

// Mock for DataTransfer
class MockDataTransfer {
  items: DataTransferItemList;
  files: File[];

  constructor() {
    const items: DataTransferItem[] = [];
    this.files = [];
    this.items = {
      get length() {
        return items.length;
      },
      add: (data: File) => {
        this.files.push(data);
        items.push({
          kind: 'file',
          type: data.type,
          getAsFile: () => data,
          getAsString: (callback: (data: string) => void) => callback(data.name),
        } as DataTransferItem);
        return null;
      },
      clear: () => {
        items.length = 0;
        this.files.length = 0;
      },
      remove: (index: number) => {
        items.splice(index, 1);
        this.files.splice(index, 1);
      },
      [Symbol.iterator]: function* () {
        for (let i = 0; i < items.length; i++) {
          yield items[i];
        }
      }
    } as DataTransferItemList;
  }

  getData(format: string): string {
    return '';
  }


  setData(format: string, data: string): void {}

  clearData(): void {}
}

describe('AttachFile.vue', () => {
  it('should mount the component correctly', () => {
    const wrapper: VueWrapper<any> = mount(AttachFile);
    expect(wrapper.exists()).toBe(true);
  });

  it('should start with isVisible set to false', () => {
    const wrapper: VueWrapper<any> = mount(AttachFile);
    expect(wrapper.vm.isVisible).toBe(false);
  });

  it('should display the main container after 1 second', async () => {
    vi.useFakeTimers();
    const wrapper: VueWrapper<any> = mount(AttachFile);
    vi.advanceTimersByTime(1000);
    await wrapper.vm.$nextTick();
    console.log('Main container visibility:', wrapper.find('.main').isVisible());
    expect(wrapper.find('.main').isVisible()).toBe(true);
    vi.useRealTimers();
  });
  
  it('should remove a file from the list when remove button is clicked', async () => {
    vi.useFakeTimers();
    const wrapper: VueWrapper<any> = mount(AttachFile, {
      data() {
        return {
          files: [new File([''], 'test.csv')] as never[],
        };
      },
    });
    vi.advanceTimersByTime(1000);
    await wrapper.vm.$nextTick();
    const removeButton = wrapper.find('.ml-2');
    expect(removeButton.exists()).toBe(true);
    await removeButton.trigger('click');
    await wrapper.vm.$nextTick();
    console.log('Files after removal:', wrapper.vm.files);
    expect(wrapper.vm.files.length).toBe(0);
    vi.useRealTimers();
  });

  it('should display success alert when files are successfully sent', async () => {
    const wrapper: VueWrapper<any> = mount(AttachFile);
    wrapper.setData({ mostrarRespostaFinal: true });
    await wrapper.vm.$nextTick();
    console.log('Success alert visibility:', wrapper.find('.request-result').isVisible());
    expect(wrapper.find('.request-result').exists()).toBe(true);
  });

  it('should display error alert when there is an issue with file processing', async () => {
    const wrapper: VueWrapper<any> = mount(AttachFile);
    wrapper.setData({
      mostrarAlertaOutrosErros: true,
      outrosErros: 'Erro de processamento',
    });
    await wrapper.vm.$nextTick();
    console.log('Error alert text:', wrapper.find('.know-container').text());
    expect(wrapper.find('.know-container').exists()).toBe(true);
  }); 

  it('should update isDragging state on dragover and dragleave', async () => {
    vi.useFakeTimers();
    const wrapper: VueWrapper<any> = mount(AttachFile);
    vi.advanceTimersByTime(1000);
    await wrapper.vm.$nextTick();
    const dropzone = wrapper.find('.dropzone-container');
    expect(dropzone.exists()).toBe(true);
    await dropzone.trigger('dragover');
    console.log('isDragging after dragover:', wrapper.vm.isDragging);
    expect(wrapper.vm.isDragging).toBe(true);
    await dropzone.trigger('dragleave');
    console.log('isDragging after dragleave:', wrapper.vm.isDragging);
    expect(wrapper.vm.isDragging).toBe(false);
    vi.useRealTimers();
  });  
});

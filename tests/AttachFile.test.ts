import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AttachFile from '@/components/AttachFile.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(AttachFile)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(AttachFile)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(AttachFile)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.main').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should add files to the list when files are dropped', async () => {
  const wrapper = mount(AttachFile)
  const dataTransfer = new DataTransfer()
  dataTransfer.items.add(new File([''], 'test.csv', { type: 'text/csv' }))
  await wrapper.find('.dropzone-container').trigger('drop', {
    dataTransfer
  })
  expect(wrapper.vm.files.length).toBeGreaterThan(0)
  expect(wrapper.vm.files[0].name).toBe('test.csv')
})

it('should trigger file input when label is clicked', async () => {
  const wrapper = mount(AttachFile)
  const input = wrapper.find('input[type="file"]')
  const clickSpy = vi.spyOn(input.element, 'click')
  await wrapper.find('label.file-label').trigger('click')
  expect(clickSpy).toHaveBeenCalledTimes(1)
})

it('should remove a file from the list when remove button is clicked', async () => {
  const wrapper = mount(AttachFile)
  // Adicionar arquivos inicialmente
  wrapper.setData({ files: [new File([''], 'test.csv')] })
  await wrapper.vm.$nextTick()
  await wrapper.find('.ml-2').trigger('click')
  expect(wrapper.vm.files.length).toBe(0)
})

it('should display success alert when files are successfully sent', async () => {
  const wrapper = mount(AttachFile)
  // Simulando a resposta do envio
  wrapper.setData({ mostrarAlertaSucesso: true })
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.request-result').text()).toContain('CSV(s) processado(s) com sucesso')
})

it('should display error alert when there is an issue with file processing', async () => {
  const wrapper = mount(AttachFile)
  // Simulando a resposta do erro
  wrapper.setData({ mostrarAlertaOutrosErros: true, outrosErros: 'Erro de processamento' })
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.request-result').text()).toContain('Erro ao processar o(s) CSV(s)')
})

it('should clear files after successful submission', async () => {
  const wrapper = mount(AttachFile, {
    methods: { sendData: () => {} } // Mock da função sendData
  })
  wrapper.setData({ files: [new File([''], 'test.csv')] })
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.vm.files.length).toBe(0) // Verifica se os arquivos foram limpos
})

it('should update isDragging state on dragover and dragleave', async () => {
  const wrapper = mount(AttachFile)
  await wrapper.find('.dropzone-container').trigger('dragover')
  expect(wrapper.vm.isDragging).toBe(true)
  await wrapper.find('.dropzone-container').trigger('dragleave')
  expect(wrapper.vm.isDragging).toBe(false)
})

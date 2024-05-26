import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import DataImportView from '@/views/DataImportView.vue'

it('should mount the component correctly', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.exists()).toBe(true)
})

it('should start with isVisible set to false', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.vm.isVisible).toBe(false)
})

it('should display the main container after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(DataImportView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-anexo').isVisible()).toBe(true)
  vi.useRealTimers()
})

it('should initially show the CSV icon', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.find('.fa-file-csv').exists()).toBe(true)
})

it('should hide the CSV icon after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(DataImportView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.fa-file-csv').exists()).toBe(false)
  vi.useRealTimers()
})

it('should display the title and description after 1 second', async () => {
  vi.useFakeTimers()
  const wrapper = mount(DataImportView)
  vi.advanceTimersByTime(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.titulo-descricao h1').text()).toContain('Importar Dados')
  expect(wrapper.find('.titulo-descricao p').text()).toContain(
    'Importe seus dados para que o processo de ETL seja realizado!'
  )
  vi.useRealTimers()
})

it('should render AttachFile component', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.findComponent(AttachFile).exists()).toBe(true)
})

it('should animate CSV icon on initial render', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.find('.entre-paginas i').classes()).toContain('fa-file-csv')
})

it('should complete animation on CSV icon correctly', () => {
  const wrapper = mount(DataImportView)
  expect(wrapper.find('.img-csv::before').isVisible()).toBe(false) // Essa verificação precisa de uma abordagem especial ou biblioteca para pseudo-elementos, que pode não ser diretamente suportada
})

it('should react to a manual change in isVisible', async () => {
  const wrapper = mount(DataImportView)
  wrapper.vm.isVisible = true
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.container-anexo').isVisible()).toBe(true)
})

import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { config } from '@vue/test-utils';


// Stub for fetch
global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve({}),
  headers: new Headers(),
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  type: 'basic',
  url: '',
  body: null,
  bodyUsed: false,
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  blob: () => Promise.resolve(new Blob()),
  clone: () => Promise.resolve({} as Response),
  formData: () => Promise.resolve(new FormData()),
  text: () => Promise.resolve('')
});

// Stub for others globals APIs, if necessary
global.window = Object.create(window);
global.window.alert = vi.fn();
global.window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  mounted: vi.fn(),
  data: vi.fn()
}));

// Stub for localStorage
global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn().mockImplementation((index: number) => {
    const keys = Object.keys(localStorage);
    return keys[index] || null;
  })
};

// Stub for sessionStorage
global.sessionStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn().mockImplementation((index: number) => {
    const keys = Object.keys(sessionStorage);
    return keys[index] || null;
  })
};

// Stub for resizeObserver
global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

// Stubs for global components
config.global.stubs = {
  'router-view': true,
  'router-link': true
};
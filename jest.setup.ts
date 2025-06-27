import '@testing-library/jest-dom';
import { jest } from '@jest/globals';


class LocalStorageMock {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}


Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock(),
  writable: true
});


global.fetch = jest.fn((input: RequestInfo | URL, init?: RequestInit) => 
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
  } as Response)
);


jest.mock('identity-obj-proxy', () => ({
  __esModule: true,
  default: new Proxy({}, {
    get(_, key) {
      return key;
    }
  })
}));
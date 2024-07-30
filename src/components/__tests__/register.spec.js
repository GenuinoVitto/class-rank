import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import RegisterView from '@/views/RegisterView.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

// Mock axios
vi.mock('axios');

// Create a mock router for navigation
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', name: 'Login' }]
});

// Mount the component with router
function mountWithRouter(component) {
  const app = createApp(component);
  app.use(router);
  return mount(component, { global: { plugins: [router] } });
}

describe('RegisterView', () => {
  it('renders correctly', () => {
    const wrapper = mountWithRouter(RegisterView);
    expect(wrapper.find('h5').text()).toBe('ClassRank Registration');
  });

  it('validates email correctly', () => {
    const wrapper = mountWithRouter(RegisterView);
    expect(wrapper.vm.validateEmail('test@dlsu.edu.ph')).toBe(true);
    expect(wrapper.vm.validateEmail('test@example.com')).toBe(false);
  });

  it('displays error message for invalid email', async () => {
    const wrapper = mountWithRouter(RegisterView);
    wrapper.vm.email = 'test@example.com';
    await wrapper.vm.register();
    expect(wrapper.vm.errorMessage).toBe('Please enter a valid DLSU email address.');
  });

  it('sends registration request and shows success message', async () => {
    axios.post.mockResolvedValue({ data: {} });

    const wrapper = mountWithRouter(RegisterView);
    wrapper.vm.name = 'Test User';
    wrapper.vm.email = 'test@dlsu.edu.ph';
    wrapper.vm.password = 'password';
    wrapper.vm.role = 'student';

    await wrapper.vm.register();
    expect(wrapper.vm.successMessage).toBe('Registration successful!');
    expect(wrapper.vm.errorMessage).toBe('');

    // Check if redirectToLogin was called after a delay
    await new Promise((r) => setTimeout(r, 2000));
    expect(wrapper.vm.$router.currentRoute.value.name).toBe('Login');
  });

  it('shows error message on registration failure', async () => {
    axios.post.mockRejectedValue({ response: { data: { message: 'Registration failed' } } });

    const wrapper = mountWithRouter(RegisterView);
    wrapper.vm.name = 'Test User';
    wrapper.vm.email = 'test@dlsu.edu.ph';
    wrapper.vm.password = 'password';
    wrapper.vm.role = 'student';

    await wrapper.vm.register();
    expect(wrapper.vm.errorMessage).toBe('Registration failed');
    expect(wrapper.vm.successMessage).toBe('');
  });
});

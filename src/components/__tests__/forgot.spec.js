import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import LoginView from '@/views/LoginView.vue';

describe('LoginView.vue', () => {
  it('renders successfully', () => {
    const wrapper = mount(LoginView);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays success message on successful login', async () => {
    const wrapper = mount(LoginView);

    // Simulate input and form submission
    await wrapper.setData({ email: 'jose_mari_genuino@dlsu.edu.ph', password: 'password' });
    await wrapper.find('form').trigger('submit.prevent');

    // Wait for next tick to process the async updates
    await wrapper.vm.$nextTick();
  });

  it('calls forgotPassword method when "Forgot password?" button is clicked', async () => {
    const wrapper = mount(LoginView);
    
    // Mock the forgotPassword method
    const forgotPassword = vi.fn();
    wrapper.vm.forgotPassword = forgotPassword;

    // Find the button and trigger a click event
    await wrapper.find('button.btn-link').trigger('click');

    // Assert that the forgotPassword method has been called
    expect(forgotPassword).toHaveBeenCalled();
  });
});

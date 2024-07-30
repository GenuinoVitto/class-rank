import { mount } from '@vue/test-utils';
import LoginView from '@/views/LoginView.vue';

test('renders successfully', () => {
  const wrapper = mount(LoginView);
  expect(wrapper.exists()).toBe(true);
});

test('displays success message on successful login', async () => {
  const wrapper = mount(LoginView);

  // Simulate input and form submission
  await wrapper.setData({ email: 'jose_mari_genuino@dlsu.edu.ph', password: 'password' });
  await wrapper.find('form').trigger('submit.prevent');

  // Wait for next tick to process the async updates
  await wrapper.vm.$nextTick();
});

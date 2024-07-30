import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import ThreadView from '@/views/ThreadView.vue';

describe('ThreadView.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ThreadView, {
      global: {
        mocks: {
          $router: {
            push: vi.fn()
          }
        }
      }
    });
  });

  it('should display the create form when the "Create" button is clicked', async () => {
    await wrapper.find('.create-button').trigger('click');
    expect(wrapper.find('div.bg-white').exists()).toBe(true); // Check if the form is visible
  });

  it('should add a new thread and display it', async () => {
    await wrapper.find('.create-button').trigger('click');
    await wrapper.setData({
      newThread: {
        name: 'New Thread',
        code: '123',
        description: 'Description of the new thread'
      }
    });
    await wrapper.find('.add-thread-button').trigger('click');

    expect(wrapper.vm.threads).toHaveLength(1);
    expect(wrapper.vm.threads[0]).toEqual({
      name: 'New Thread',
      code: '123',
      description: 'Description of the new thread',
      time: expect.any(String) // time should be a string
    });
  });

  it('should display success message when a thread is added successfully', async () => {
    await wrapper.find('.create-button').trigger('click');
    await wrapper.setData({
      newThread: {
        name: 'Another Thread',
        code: '456',
        description: 'Another description'
      }
    });
    await wrapper.find('.add-thread-button').trigger('click');
    await wrapper.vm.$nextTick(); // Wait for the DOM update

    expect(wrapper.text()).toContain('Class added successfully');
  });

  it('should edit a thread and display updated details', async () => {
    await wrapper.setData({
      threads: [
        {
          name: 'Thread to Edit',
          code: '789',
          description: 'Description to edit',
          time: new Date().toISOString()
        }
      ]
    });

    await wrapper.find('.edit-button').trigger('click'); // Click edit button for the first thread
    await wrapper.setData({
      newThread: {
        name: 'Edited Thread',
        code: '789',
        description: 'Updated description'
      }
    });
    await wrapper.find('.add-thread-button').trigger('click');

    expect(wrapper.vm.threads[0]).toEqual({
      name: 'Edited Thread',
      code: '789',
      description: 'Updated description',
      time: expect.any(String)
    });
  });

  it('should delete a thread and remove it from the list', async () => {
    await wrapper.setData({
      threads: [
        {
          name: 'Thread to Delete',
          code: '000',
          description: 'Description to delete',
          time: new Date().toISOString()
        }
      ]
    });

    await wrapper.find('.delete-button').trigger('click'); // Click delete button for the first thread
    expect(wrapper.vm.threads).toHaveLength(0);
  });
});

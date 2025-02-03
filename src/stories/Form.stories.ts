import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Form } from './Form';

const meta = {
  title: 'Example/Form',
  component: Form,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    optionLabel: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const SelectDropdownField: Story = {
  args: {
    user: [{
      id: "1",
      name: 'Jane Doe'
    },
    {
      id: "2",
      name: 'Judith Doe'
    },
    {
      id: "3",
      name: 'Warren Doe'
    }],
  },
};

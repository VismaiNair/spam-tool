import { html, TemplateResult } from 'lit';
import '../src/spam-tool.js';

export default {
  title: 'SpamTool',
  component: 'spam-tool',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <spam-tool style="--spam-tool-background-color: ${backgroundColor}" .header=${header}></spam-tool>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};

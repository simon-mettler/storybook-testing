import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ButtonToggleComponent } from '../app/button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export default {
title: 'Angular Material/ButtonToggle',
component: ButtonToggleComponent,
decorators: [
	moduleMetadata({
		imports: [MatButtonToggleModule]      
	}),
],
argTypes: {
	vertical: {
		options: [true, false],
		control: { type: 'radio'},
	}
},
} as Meta;

const Template: Story<ButtonToggleComponent> = (args: ButtonToggleComponent) => ({
  props: args,
});


export const Horizontal = Template.bind({});
Horizontal.args = {
  vertical: false,
};

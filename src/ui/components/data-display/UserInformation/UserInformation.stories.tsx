import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserInformation from './UserInformation';

export default {
    title: 'data-display/UserInformation',
    component: UserInformation,
    argTypes: {},
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
    <UserInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: 'Geison Duarte',
    picture: 'https://github.com/geisondc.png',
    rating: 3,
    description: 'Web Developer',
    isRating: true
};
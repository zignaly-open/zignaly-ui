import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <>
    <Tabs {...args}>
      {args.tabs.map((t: string, i: number) => (
        <Tab label={t} key={i} />
      ))}
    </Tabs>
    {args.content.map((c: string, i: number) => (
      <TabPanel value={args.value} index={i} key={i}>
        {c}
      </TabPanel>
    ))}
  </>
);

export const TabsExample = Template.bind({});
TabsExample.args = {
  value: 0,
  onChange: () => {},
  tabs: ["Tab 1", "Tab 2", "Tab 3"],
  content: ["Content 1", "Content 2", "Content 3"],
};

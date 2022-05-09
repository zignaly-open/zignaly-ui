import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "components/display/Typography";
import React from "react";
import { UserDashboardTable } from ".";
import PercentageIndicator from "../components/PercentageIndicator";
import PriceLabel from "../components/PriceLabel";

export default {
  title: "Display/Table/UserDashboardTable",
  component: UserDashboardTable,
} as ComponentMeta<typeof UserDashboardTable>;

const Template: ComponentStory<typeof UserDashboardTable> = (args) => (
  <UserDashboardTable {...args} />
);

export const UserDashboard = Template.bind({});
UserDashboard.args = {
  columns: [
    {
      Header: "Daily avg.",
      accessor: "coin",
    },
    {
      Header: "books",
      accessor: "books",
    },
  ],
  data: [
    {
      coin: (
        <PriceLabel
          coin={"USDT"}
          value={"37.5"}
          bottomElement={<PercentageIndicator value={3} />}
        />
      ),
      books: (
        <PriceLabel
          coin={"USDT"}
          value={"37.5"}
          bottomElement={<PercentageIndicator value={3} />}
        />
      ),
    },
  ],
};

import React from "react";
import SideNav from "../SideNav";

function InvestingPlanSideNav({ activeHeadingId, activeSubheadingId }) {
  const links = [
    {
      id: 1,
      main: "1. Set your financial goals",
      subs: [
        {
          id: 1.1,
          value: "1. Prepare your balance sheet",
          link: "/investing-plan/financial-goals/prepare-balance-sheet",
        },
        {
          id: 1.2,
          value: "2. Prepare your income statement",
          link: "/investing-plan/financial-goals/prepare-income-statement",
        },
        {
          id: 1.3,
          value: "3. Prepare your cashflow statement",
          link: "/investing-plan/financial-goals/prepare-cashflow-statement",
        },
        {
          id: 1.4,
          value: "4. Set your financial goals",
          link: "/investing-plan/financial-goals/set-financial-goals",
        },
      ],
    },
    {
      id: 2,
      main: "2. Define your needs",
      subs: [
        {
          id: 2.1,
          value: "1. Time value of money",
          link: "/investing-plan/financial-goals/time-value-of-money",
        },
      ],
    },
    {
      id: 3,
      main: "3. Understand Risk vs Return",
      subs: [
        {
          id: 3.1,
          value: "1. Investment vehicles",
          link: "/investing-plan/financial-goals/investment-vehicle",
        },
      ],
    },
    {
      id: 4,
      main: "4. Choose investment vehicles",
      link: "/investing-plan/investment-vehicles",
      subs: [],
    },
  ];
  return (
    <SideNav
      heading={"Investing plan"}
      links={links}
      activeParent={activeHeadingId}
      activeChild={activeSubheadingId}
    />
  );
}

export default InvestingPlanSideNav;
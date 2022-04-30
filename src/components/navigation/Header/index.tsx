// Dependencies
import React, { useMemo } from "react";
import { useRouter } from "next/router";

// Types
import { HeaderProps } from "./types";
import {headerConfig} from "./utils";

// Styled Components
import {
  Layout,
  Side,
  Logo,
  Navigation,
  Icon
} from "./styles";
import Link from "next/link";
import { IconButton, ZigWalletIndicator } from "zignaly-ui";

function Header({routes = []}: HeaderProps) {
  // Hooks
  const router = useRouter();

  const renderMenuDropDown = useMemo(() => (
    <div>
      <Link href={"/for-trading-services"}>
        <a>
          For Tranding Services
        </a>
      </Link>
    </div>
  ), []);

  return (
    <Layout>
      <Side>
        {/* Branding Image */}
        <Logo alt={"Zignaly"} height={"24px"} src={"/images/zignalyDark.svg"} width={"100px"} />

        {/* Routes */}
        {routes && routes.length && (
          <Navigation>
            {routes.map((route, index) => (
              <Link href={route.path} key={`--route-path-${index.toString()}`}>
                <a className={router.pathname === route.path ? "active" : ""}>
                  {route.label}
                </a>
              </Link>
            ))}
          </Navigation>
        )}
        <IconButton
          icon={<Icon height={"22px"} src={"/images/horizontal-dots.svg"} width={"22px"} />}
          renderDropDown={renderMenuDropDown}
          variant={"secondary"}
        />
      </Side>
      <Side>
        <ZigWalletIndicator zigs={"0"} />
        <IconButton
          dropDownOptions={{
            alignment: "right"
          }}
          icon={<Icon height={"22px"} src={"/images/horizontal-dots.svg"} width={"22px"} />}
          renderDropDown={renderMenuDropDown}
          variant={"secondary"}
        />
      </Side>

    </Layout>
  );
}

export {headerConfig};
export default Header;

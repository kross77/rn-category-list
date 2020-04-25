import * as React from "react";
import Block from "./Block";

export interface Layout extends Block {
  children: React.ReactChildren;
  wrapper?: React.ComponentType;
  wrappers?: Block[];
  gap?: number;
}


const Layout = ({
                  children,
                  wrapper: Wrapper = React.Fragment,
                  wrappers = [],
                  gap = 0,
                  ...props
}: Layout) => (
  <Block {...props}>
    {Array.isArray(children)
      ? children.map((v, i) => {
          const isLast = i === children.length - 1;
          const wrapper = wrappers[i];
          return (
            <Wrapper key={`layout${i}`}>
              {wrapper ? <Block {...wrapper}>{v}</Block> : v}
              {!isLast && <Block h={gap} w={gap} />}
            </Wrapper>
          );
        })
      : children}
  </Block>
);

export default Layout;

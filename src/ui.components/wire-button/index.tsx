
import React from "react";

const WireButton = ({ onClick, active, children }: any) => {
  return <button className={`${active ? 'active' : ''} btn`} onClick={onClick}>{children}</button>;
}
export default WireButton;
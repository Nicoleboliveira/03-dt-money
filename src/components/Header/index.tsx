import { HeaderContainer, HeaderContent, NewTransctionsButton } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <NewTransctionsButton>Nova transação</NewTransctionsButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

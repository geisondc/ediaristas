import {
  FooterContainer,
  FooterTitle,
  FooterListItem,
  SocialContainer,
  AppList,
  FooterSocialList,
  SocialButton,
  FooterGrid,
} from "./Footer.style";
import { List, Box, Typography, IconButton } from "@material-ui/core";
import Link from "ui/components/navigation/link/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href={"/encontrar-diarista"}
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontrar um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href={"/cadastro/diarista"}
                mui={{ color: "inherit", variant: "body2" }}
              >
                Seja um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href={"/"} mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o e-diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href={"/"} mui={{ color: "inherit", variant: "body2" }}>
                Principais Dúvidas
              </Link>
            </FooterListItem>
          </List>
        </div>

        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            dolor earum aliquid odit voluptate, molestiae sequi blanditiis
            aperiam nemo praesentium autem ullam nihil ea adipisci, nesciunt
            suscipit, excepturi eius aut.
          </Typography>
        </Box>

        <SocialContainer>
          <Box>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/app-store.png"} alt={"app-store"} />
                </a>
              </li>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/google-play.png"} alt={"google-play"} />
                </a>
              </li>
            </AppList>
          </Box>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterSocialList>
              <FooterListItem>
                <SocialButton href={"/"}>
                  <i className={"twf-facebook-f"} />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href={"/"}>
                  <i className={"twf-instagram"} />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href={"/"}>
                  <i className={"twf-youtube"} />
                </SocialButton>
              </FooterListItem>
            </FooterSocialList>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;

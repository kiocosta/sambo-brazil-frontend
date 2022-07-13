import * as React from "react"
import { Grid, CssBaseline, Container, Typography, Paper, GlobalStyles, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logoFaserj from '../images/logo-faserj.jpeg';
import "@fontsource/poppins";

const useStyles = makeStyles({
  body: {
    backgroundColor: 'red',
  },
  container: {
    minHeight: '100vh',
    alignItems: 'center',
  },
  content: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '& img': {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '15rem'
    },
    '& h1': {
      fontFamily: 'Poppins',
      textAlign: 'center',
      marginBottom: '.5rem'
    },
  }
});


// Sejam bem vindo ao Site Oficial da Federação Amadora de Sambo do Estado do Rio de janeiro (FASERJ),  Entidade Regional de Administração do Desporto SAMBO no Estado do Rio de Janeiro, constituída em 13/09/2010 é filiada a Confederação Brasileira da Arte Sambo (CBAS) que por sua vez vinculada a  UPASA (União Panamericana de Sambo) e também a Federação Internacional de SAMBO (FIAS) que é a organização internacional  que gerencia o desenvolvimento do SAMBO no mundo.

//  Em 20 de julho de 2021 as vésperas dos Jogos Olímpicos na 138° sessão do Comitê Olímpico Internacional (COI) em Tokio (Japão), o SAMBO recebeu o título e vínculo de reconhecimento total e agora é membro do movimento Olímpico, um grande passo rumo ao estimado sonho de inclusão deste magnífico esporte nas próximas Olimpíadas.

const IndexPage = () => {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#f3f3f3" }
        }}
      />
      <Container maxWidth="lg">
        <Grid className={styles.container} container>
          <Grid className={styles.content} item>
            <Box style={{ maxWidth: '400px' }}>
              <Typography component="h1" variant="h4">Site em construção</Typography>
              <Typography component="p" variant="body1">
                Estamos preparando nosso site e, em breve, traremos novidades.
                Enquanto isso, você pode nos acompanhar <Link href="https://www.instagram.com/samborio_faserj_oficial/">no Instagram</Link>!
              </Typography>
              <br />
              <Typography style={{ textAlign: 'center' }} component="p" variant="body2">
                <b>Site Oficial da Federação Amadora de Sambo do Estado do Rio de Janeiro (FASERJ).</b>
                <br />
                <b>CNPJ: 12.676.461/0001-68</b>
              </Typography>
            </Box>
            <img src={logoFaserj} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage;

import styled from 'styled-components';

export const FooterStyle = styled.div `
#footer-main {
    background-color: #005ab4;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: 'Didact Gothic', sans-serif;
}
#thank-you {
    padding-left: 295px;
    padding-top: 5px;
}
#duck-bio {
    font-size: small;
    text-justify: auto;
}
`
export const DashboardStyle = styled.div `
.container-main {
    padding-left: 350px;
    padding-top: 90px;
    background: #003973;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E5E5BE, #003973);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E5E5BE, #003973); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: 'Didact Gothic', sans-serif;
}
.scroll {
    max-height: 600px;
    overflow-y: auto;
}

  @media only screen and (min-width : 992px) {
    .invisible-top {
      top: 64px;
    }
  }


@media only screen and (max-width : 992px) {
    .container-main {
        padding-left: 20px;
    }
  }
`
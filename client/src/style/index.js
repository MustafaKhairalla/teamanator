import styled from 'styled-components';

export const FooterStyle = styled.div `
#footer-main {
    background-color: #005ab4;
    position: fixed;
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
ul {
    list-style: none;
}
`
export const DashboardStyle = styled.div `
.container-main {
    padding-left: 290px;
    padding-top: 110px;
    margin-right: 30px;
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

export const HeaderStyle = styled.div `
.header-main {
    background-color: #3f3f3f;
    position: fixed;
    width: 100%;
    padding: 10px;
    top: 0;
}
#profile-img {
    height: 50%;
    width: 80%;
    margin: 20px;
    border-radius: 50%;
}
#side-content {
  margin-left: 0px;
  margin-right: 35px;
}

#slide-out {
    height: 100%;
    width: 260px;
    position: fixed;
    padding-top: 250px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #3f3f3f;
    overflow-x: hidden;
    padding-top: 20px;
}
#dashboardTitle {
  padding-top: 85px;
  color: white;
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

export const RegisterStyle = styled.div `
body{
    background: #003973;
    background: -webkit-linear-gradient(to right, #E5E5BE, #003973);
    background: linear-gradient(to right, #E5E5BE, #003973);
}
.col3 {
    background: #2C2B30;
    padding: 4%;
    color: white;
}
.contact-info{

}
.contact-info, .img-register{
    margin-bottom: 15px;
    color: white;
}
.contact-info, .h2-register{
    margin-bottom: 10%;
}
.contact-form {
    font-weight:500;
}

.contact-form, .button1 {
    background: #222629;
    color: #fff;
    font-weight: 600;
    width: 350px;
}
#welcome-text {
    padding: 5px;
}
#register-submit {
  color: white;
}
.contact-register {
  margin-top: 100px;
  margin-bottom: 150px;
}
`

export const TodoStyle = styled.div `
.scroll2 {
    max-height: 270px;
    overflow-y: auto;
  }
  .button1 {
    margin: 10px;
  }
  .todoListMain .header1 {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #FFF;
      width: 165px;
    }
    .todoListMain .header1 .button1 {
      padding: 10px;
      font-size: 16px;
      margin: 10px;
      margin-right: 0px;
      background-color: #0066FF;
      color: #FFF;
      border: 2px solid #0066FF;
    }
    .todoListMain .header1 button:hover {
      background-color: #003399;
      border: 2px solid #003399;
      cursor: pointer;
    }
    .todoListMain .theList {
      list-style: none;
      padding-left: 0;
      width: 250px;
    } 
    .todoListMain .theList .li-todo {
      color: #333;
      background-color: rgba(255,255,255,.5);
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      list-style: none;
      transition: background-color .2s ease-out;
    }
    ul.theList {
      padding: 0;
    }
    .todoListMain .theList li:hover {
      background-color: pink;
      cursor: pointer;
    }
`

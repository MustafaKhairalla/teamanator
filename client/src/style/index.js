import styled from 'styled-components';

export const FooterStyle = styled.div`
#footer-main {
    background-color: #2d2b31;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-left: 300px;
    font-family: 'Didact Gothic', sans-serif;
    color: white;
    padding: 4px 4px 2px 8px;
}
#thank-you {
    padding-left: 315px;
    padding-top: 5px;
}
#duck-bio {
    font-size: small;
    text-justify: auto;
}
ul {
    list-style: none;
    columns: 2;
}
#team-duck {
  font-weight: bold;
  text-decoration: underline;
  
}
#meet-team {
  font-weight: bold;
  text-decoration: underline;
}
#created-with {
  font-weight: bold;
  padding-right: 155px;
  text-decoration: underline;
}
a {
  color: #f8f8ff;
}
li {
  list-style: none;
}

`
export const DashboardStyle = styled.div`
.container-main {
    padding-left: 310px;
    padding-top: 140px;
    margin-right: 30px;
    font-family: 'Didact Gothic', sans-serif;
}
.scroll {
    max-height: 600px;
    overflow-y: auto;
}
.invisible-top {
  margin-top: 128px;
}
#welcome-side {
  color: white;
}


// @media only screen and (max-width : 992px) {
//     .container-main {
//         padding-left: 20px;
//     }
//   }
`

export const HeaderStyle = styled.div`
.header-main {
    background-color: #2c2b30;
    position: fixed;
    width: 100%;
    padding: 10px;
    top: 0;
}
#profile-img {
    height: 150px;
    width: 80%;
    margin: 20px;
}
#side-content {
  margin-left: 0px;
  margin-right: 35px;
}
#SemButton {
  margin-top: 5px;
}
#slide-out {
    position: absolute;
    height: 100%;
    width: 300px;
    position: fixed;
    padding-top: 350px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #3f3f3f;
    overflow-x: hidden;
    padding-top: 20px;
}
#dashboardTitle {
 
  color: white;
}

img {
  float:left;
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

export const RegisterStyle = styled.div`
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
  margin-top: 200px;
  margin-bottom: 150px;
}
#loginContainer {
  margin-top: 250px;
}
`

export const TodoStyle = styled.div`
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
export const LoginStyle = styled.div`
#loginCard{
  postition:fixed;
  top:30px;
  margin: 6em;
  background-color: #2c2b30;
  padding: 3em;
  color: #fff;
}
`

export const HeaderStyleHome = styled.div`
  .HeaderNav{ 
  background-color: #2c2b30;
  position: fixed;
  z-index: 5;
  width: 100%;
  padding: 10px;
  top: 0;}

  a{
    color: white
  }

  .loginBtn{
   float: right;
   color: #ffffff
 
  }
`

export const HomeStyle = styled.div`

.homeleftColumn{
  postition:absolute;
  top:100px;
  background-color: #2c2b30;
}

a{
  color: white
}

.HeadlineAndCard{
  postition: absolute;
  top:160px;
}
.headerCard{
  background-color: #2c2b30;
  opacity: .7
  color: #fff;
  padding: 2em;
  h4{
    color: #fff;
    size: 20pt 

  } 
  h1{
    color: #fff;
  }
}
.benfitIcons{
 margin: 5em;
 text-align: right
 img{
   width: 50%
 }
 h2{
   color: white
   text-align: right
 }
}
.benfitIcons2{
  margin: 5em;
  text-align: left
  img{
    width: 50%
    padding-left:25%
    content-align:right
  }
  h2{
    color: white
    text-align: right
  }
 }
registerbtn{
  margin: 5px
}
@media only screen and (max-width : 992px) {
  .homeleftColumn {
      img{
        width:30%
      }
  }
  ReactCardFlip{
    margin:50%
  }
  .benfitIcons{
    text-size: 25%
  }

}
`
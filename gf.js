<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VOTER PORTAL</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Amita:wght@700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Amita:wght@700&family=Inknut+Antiqua:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  
  </head>
  <style>
    *{
    margin: 00;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
}
.head{
    background-color:rgba(32, 32, 32, 0.815);
    height: 20vh;

}
.my{
    padding: 2px 40px;
}
.logo{
margin: 30px;
}
.head p{
color: aliceblue;    font-family: 'Amita', cursive;
    float: right ; font-size: 40px;line-height: 60px;
}
.head    .span{margin-top: 7px;
  float: right;line-height: 43px;
  color: aliceblue;font-size: 25px;
  font-family: 'Amita', cursive;
font-family: 'Inknut Antiqua', serif;  
}
.g{
    float: right;
}
.gi{
    float: right;
    margin-top: 1%;
}
@media screen and (max-width:840px) {
   
    .g{
        visibility: hidden;
    }
    .logo{
        width: auto;
        float: left;
        min-height: auto;
        overflow: hidden;
 
    }
    .gi{
        width: auto;
        float: left;
        min-height: auto;
        overflow: hidden;
 
    }
.head p{
        font-size: 26px;
        line-height: 22px;
    }
.head.span{
    font-size: 20px;
    line-height: 22px;
}
}
@media screen and (max-width:1282px)
{
    .head{
        width: 100%;
        min-height: 35vh;
        overflow: hidden;
    }
}
@media screen and (max-width:315px)
{.head p{
    margin-top: 1%;
    font-size: 50px;
    line-height: 60px;
}

}.bt{
    font-family: 'arial black';
    font-weight: bold;
    color: #ffffff !important;
    font-size: 15px;
   float: right; margin-left:27%;
   padding: 6px 25px;
   border-radius: 10px;
    border: 1px solid black;
    background: #fff9f9;  
}

.box{
    padding: 6px 25px;
 
    margin-left: 5%;
    margin-right: 5%;
    background: #cecece; 
}
.box1{
  padding: 2px  15px; margin-top: 2%; 
  background: rgb(182, 182, 182);
}
.box2{
    padding: 1px  1px;  
   
    background: rgb(255, 161, 118);
}
.box3{
    padding: 1px 1px;  
   width: 180vh;
   background: rgb(255, 161, 118);
}
.con1{
    float: left;
}
.p{
    font-size: 25px;
font-weight: bold;
padding: 5px 35px;
    color: rgb(211, 108, 35);
    text-align: center;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.footer{
  color: rgba(204, 204, 204, 0.856);
  max-width: 100%;
  font-size: 18px;
  text-align: center;
  background-color: #333333e3;
  padding:43px 25px;
}
.box1 p{
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    padding: 5px 25px;font-family: 'Times New Roman', Times, serif; 
}
.box p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    padding: 2px 10px;
    margin-top: 2%;
    line-height: 26px;
}
.box2 p{
  font-size: 20px;
  padding: 0px 45px;
  font-weight:500;
}
.box3 p{
    font-size: 20px;
   
   color: rgb(0, 0, 0);
   padding: 0px 45px;font-family:'Times New Roman', Times, serif; 
}
.bt:hover{
    color: #000000 !important;
    background: #FCFAFF;
    background: linear-gradient(to top, #FCFAFF, #808080);

}
.testbutton {
    font-family: 'arial black';
    font-weight: bold;
    color: #FDFFFC ;
    font-size: 15px;
   float: left; 
   margin-left: 5%;
  

    padding: 3px 20px;
    border-radius: 6px;
    border: 1px solid #9493A3;
    background: #7A7A7A;
  }
  .testbutton:hover {
    color: #000000 !important;
    background: #FCFAFF;
    background: linear-gradient(to top, #FCFAFF, #777676);
  }
  .dropbtn {
    background-color: #7A7A7A;
    color: white;font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    padding: 3px 10px;
    border-radius: 6px;
    border: none;
  }
  .kl p{
    padding: 0px 50px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 80px;
    box-shadow: 0px 8px 16px 10px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    padding: 5px 5px;
    text-decoration: none;
    display: block;
  }
  .con{
      float: left;
      padding: 0px 20px;
     
  }
  
.con1 p{
    float: left;padding: 0px 2px;
}
  .dropdown-content a:hover {color: #000000 !important;
    background: #FCFAFF;
    background: linear-gradient(to top, #FCFAFF, #777676);}
  
  .dropdown:hover .dropdown-content {display: block;
    background-color: #f1f1f1;
    
    box-shadow: 0px 8px 16px 10px rgba(0,0,0,0.2);
    z-index: 1;}
  
  .dropdown:hover .dropbtn {background-color: #7A7A7A;
    color: white;
text-decoration: none;}

  .con1{
      padding: 0px 200px;
  }
  .con2 p{
    float:left;
   padding: 0px 3px;
}
.con2{
   float:left;margin-left: 19%;
    
}

.center{
 padding: 2px 5px;
 line-height: 30px;
 margin-left: 5%;
 font-family: 'Times New Roman', Times, serif;
}

.container {
    display: block;
    position: relative;
    padding-left: 40px; 
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 10px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  .klo table{
    width: 100%;
  }

td{ float: left;
    padding: 12px 7px;
}
 
   
  
  .klo:after {
content: "";
display: table;
clear: both;

}


  @media screen and (max-width:369px){
   .klo table td{
      width: 90%;
    }

  }
   
  </style>
<body>
   <div class="head">
       <img src="LOGO.png" class="logo"><img src="u.jpg" class="gi"><img src="logow.png" class="g">
       <p>राष्ट्रीय मतदान सेवा <br>डेमो पोर्टल</p><img src="logow.png" class="g">
       <div class="span"> NATIONAL VOTERS SERVICE <br>DEMO PORTAL</div></div>
  <div class="my"><div class="testbutton">A+</div><div class="testbutton">A-</div></div>
  <div class="bt">
    <select id="country" name="Language">
      <option value="australia">Language</option>
      <option value="canada">English</option>
      <option value="canada">Hindi</option>
    </select>
  </div><br><br>
  <div class="p">Note : Fields marked with asterisks ( * ) are mandatory </div>
  
  
  <div class="box">
     <div class="box1">
           <p>Type 6<br>[See rule 13(1) and 26]</p>
          </div>

     <div class="box2">
    <p>Application for inclusion of name in the electoral roll for the first time due to the transfer of voter or any other constituency from any one constituency
    </p>
  </div>


<p>
In service<br>Electoral Registration Officer,</p>

<div class="con">
<div class="con1">
<p>State <span class="dot" style="color: rgb(216, 99, 4);">*</span>
<div class="dropdown">
  <button class="dropbtn">Select</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div> 
</div></p></div>

<div class="con1">
<p>District  <span class="dot" style="color: rgb(216, 99, 4);">*</span>  
<div class="dropdown">
  <button class="dropbtn">Select</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div> </p>
</div>
</div>
<br>
<div class="con2">
  <p>
    Legislative Assembly / Parlimentary 
    
    constituency  <span class="dot" style="color: rgb(216, 99, 4);">*</span>  
  <div class="dropdown">
    <button class="dropbtn">Select</button>
    <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
  </div> </p>
  </div>
  <br><br><br><br>
<p>I request that my name be included in electoral rolls for all the aforesaid areas.</p>

<label class="container">  First time voter
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">  Due to transfer from other meeting areas.
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
<br><p>Below are specifications in support of my claim to be included in the electoral rolls.</p>
<div class="box2">
  <p>Mandatory specifications
  </p>
</div> 
<br>


<div class="klo" style="margin-left: 5%;
padding: 0px 15px;">
    <table border="0" class="smart-table">
    <tr>
    <td>
    <form name = "registerationform" method="POST" action="welcome.html" onsubmit="return(regvalidate())">
    <table>
    <tr>
    <td>(A) Name  <span class="dot" style="color: rgb(216, 99, 4);">*</span>  </td> <td><input type = "text" name="fnametxt"  /> <br> </td>
    </tr>
    <tr>
    <td>(B) Surname (if any)  <span class="dot" style="color: rgb(216, 99, 4);">*</span> </td> <td> <input type = "text" name="snametxt" />  <br/></td>
    </tr>
    <tr>
    <td> (C) Name of the applicant's relative  <span class="dot" style="color: rgb(216, 99, 4);">*</span> </td> <td><input type = "text" name="unametxt" />   <br/> </td>
    </tr>
    <tr>
    <td>Nickname of the applicant's relative  <span class="dot" style="color: rgb(216, 99, 4);">*</span>  </td> <td> <input type = "text" name="emailtxt" />   <br/></td>
    </tr>
    </tr>
    
    <tr><td>
 <div class="con">
        <div class="con1">
        <p>(D) Type of the relationship 

            <span class="dot" style="color: rgb(216, 99, 4);">*</span>
        <div class="dropdown">
          <button class="dropbtn">Select</button>
          <div class="dropdown-content">
          <a href="#">Link 1</a>
          
          </div> 
        </div></p></div><br>
</div>
       <label class="container">(E) Age [on January 1 of the current calender]<span class="dot" style="color: rgb(216, 99, 4);">*</span>   <div class="dropdown">
                <button class="dropbtn">Year</button>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                
                </div> 
              </div> 
              <div class="dropdown">
                <button class="dropbtn">Month</button>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                
                </div> 
              </div> <input type="radio"  name="radio">
              <span class="checkmark" checked> 
<input type = "text" name="fnametx"  /> <br> </span> </label>

<tr>
    <td> 
<h5 style="color:rgb(53, 36, 5);
font-family:'Times New Roman', Times, serif;
margin-left: 870%;">Or</h5></td></tr>




<tr>
    <td>
<form><input type="radio"  name="radio">
    <span class="checkmark" checked></span>
 <label for="birthday">(F) Date of birth (in the form of day/ month/ year) (if known)  <span class="dot" style="color: rgb(216, 99, 4);">*</span> </label>
    <input type="date" /></form>


</td></tr>

 







<div class="con">
    <div class="con1">
    <p>(G) Applicant's gender  

        <span class="dot" style="color: rgb(216, 99, 4);">*</span>
    <div class="dropdown">
      <button class="dropbtn">Select</button>
      <div class="dropdown-content">
      <a href="#">Female</a>
      <a href="#">Male</a>
      <a href="#">Trans</a>


      </div> 
    </div></p></div><br>
</div>


   
  







</table>
<br>
    <font color='red'> <DIV id="une"style="margin-left:45%"> </DIV> </font>
    <input type = "submit" value="Register Now" /  style="background-color: #7A7A7A;
    padding: 2px 16px;
    color: rgb(255, 255, 255);
    font-family: 'Times New Roman', Times, serif;
    font-size: 22px;
    border-radius: 5px;
    border:none;margin-left: 50%;
    ">
    </form>
    </td>
    </th>
    </tr>
    </table>
    </tr>
    </table>
    </tr>
   





    <SCRIPT type="Text/JavaScript">
    function regvalidate()
    
    {
    if((document.registerationform.fnametxt.value=="")&&(document.registerationform.snametxt.value==""))
     {
      document.getElementById('une').innerHTML = "Name of applicant is Mandatory";
      registerationform.fnametxt.focus();
      return(false);
     }
    

    
     


    if(document.registerationform.unametxt.value=="")
      {
      document.getElementById('une').innerHTML = "Name of the applicant's relative";
      registerationform.unametxt.focus();
      return(false);
     }
    
    if(document.registerationform.emailtxt.value=="")
      {
      document.getElementById('une').innerHTML = "Either fill nickname of applicant's relative or fill -no-";
      registerationform.emailtxt.focus();
      return(false);
      }
    
    
    else
       {
       return(true);
       }
    }
    </SCRIPT>
    </td>
    </tr>
    </table>
    </div><br>
    <div class="box2">
      <p> (H) Current address, whose applicant is nominally resident
      </p>
    </div>
      <br>
      
    
<br><div class="center">
    (A)  House no. <span class="dot" style="color: rgb(216, 99, 4);">*</span> : <input type="text" id="uname" onblur="validate()"> <div id="div1"></div> <br>
    (B)  Street / area / location <span class="dot" style="color: rgb(216, 99, 4);">*</span> : <input type="text" id="unam" onblur="validate()"> <div id="div5"></div> <br>
    (C)  City / Village <span class="dot" style="color: rgb(216, 99, 4);">*</span> : <input type="text" id="una" onblur="validate()"> <div id="div6"></div> <br>
    (D)  Email  <span class="dot" style="color: rgb(216, 99, 4);">*</span> : <input type="text" onblur="validate()" id="Email"> <div id="div2"></div> <br>
    (E)  Pin Code <span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <input type="password" onblur="validate()" id="password"> <div id="div3"></div><br>
    (F)  State / Union Territory <span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <div class="dropdown">
    <button class="dropbtn">Select</button>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      </div>
    </div> </p>

    (G)  District <span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <div class="dropdown">
      <button class="dropbtn">Select</button>
        <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
      </div> </p>
     
      <hr><br>

    
      (H)  Family / Neighbour Epic No.<span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <input type="text" onblur="validate()" id="pattern"> <div id="div4"></div>
<br><hr>
      <br>
       <script>
          function validate()
          {
              var uname = document.getElementById("uname").value;
              var unam = document.getElementById("unam").value;
              var una = document.getElementById("una").value;
              var Email = document.getElementById("Email").value;
              var password = document.getElementById("password").value;
              var pattern = document.getElementById("pattern").value;
              var patcheck = new RegExp("^[a-z0-9]");
              if(uname==="")             
                 {
                  document.getElementById("div1").innerHTML="Mandatory";
                  document.getElementById("div1").style.color="Red";
                  
              }
              else
              {
                  document.getElementById("div1").innerHTML="";
              }

              if(unam==="")             
                 {
                  document.getElementById("div5").innerHTML="Enter valid name ";
                  document.getElementById("div5").style.color="Red";
                  
              }
              else
              {
                  document.getElementById("div5").innerHTML="";
              }

              if(una==="")             
                 {
                  document.getElementById("div6").innerHTML="Enter valid name ";
                   document.getElementById("div6").style.color="Red";
                  
              }
              else
              {
                  document.getElementById("div6").innerHTML="";
              }


              if(Email.indexOf("@")> -1)
              {
                  document.getElementById("div2").innerHTML="";
              }
               else
              {
                  document.getElementById("div2").innerHTML="Enter the correct email address";
                  document.getElementById("div2").style.color="Red";
                  
              }
              if(password.length<=6)
              {
                  document.getElementById("div3").innerHTML="Enter the correct Pin Code";
                  document.getElementById("div3").style.color="Red";
              }
               else
              {
                  document.getElementById("div3").innerHTML="";
              }
              
              if(!patcheck.test(pattern))
              {
                  document.getElementById("div4").innerHTML="Only Alphabets/Numbers";
                  document.getElementById("div4").style.color="Red";
              }
              else
              {
                  document.getElementById("div4").innerHTML="";
              }
          }
      </script>

</div>
<div class="box2">
  <p>Optional specialties
  </p>
</div> 
<p>(T) Disability (if any)</p>
<form action="/action_page.php" style="margin-left: 10%;
font-family: 'Times New Roman', Times, serif;">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> Visual impairment </label>
     <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2"> Speech and hearing impairment</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> Motion disabling</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
</form>
<p>
  (Th) Email ID (optional) : <input type="text" >  <br> <br>
  (D) mobile number (optional):   +91<input type="text" > <br></p>
  <div class="box2">
    <p >Upload supporting documents (Supported formats .jpg, .png, .bmp, .jpeg) (max. 2MB) <a href="#">List of supported documents</a></p>
  </div>
<br>


<div class="kl" style="margin-left: 5%;
padding: 0px 15px;">
<p>Your photo <span class="dot" style="color: rgb(216, 99, 4);">*</span> : <br>
<input type="file" ></p>

<p>Age proof<span class="dot" style="color: rgb(216, 99, 4);">*</span> : <br>
<input type="file"></p>
 Document type<span class="dot" style="color: rgb(216, 99, 4);">*</span> : 
     <div class="dropdown">
    <button class="dropbtn">Select</button>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      </div></div>   

      <p>Address proof 
<span class="dot" style="color: rgb(216, 99, 4);">*</span> : <br>
                <input type="file"></p>
      Document type<span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <div class="dropdown">
        <button class="dropbtn">Select</button>
          <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          </div> 
    </div></div>
<br><br><br>
    <div class="box2">
      <p >Declaration
      </p>
    </div>
  
 
 <p>     I declare I declare that according to my best knowledge and belief<br>
I am a citizen of India and of my birth;</p>
<div class="kl" style="margin-left: 5%;
padding: 0px 15px;">

<p>City / Village:   <input type="text"></p>
Select state <span class="dot" style="color: rgb(216, 99, 4);">*</span> :  <div class="dropdown"> <button class="dropbtn">Select</button>
<div class="dropdown-content">
<a href="#">Link 1</a>
<a href="#">Link 3</a>
</div> 
</div>
     District <span class="dot" style="color: rgb(216, 99, 4);">*</span> :    <div class="dropdown"> <button class="dropbtn">Select</button>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 3</a>
      </div> 
      </div>
     <p>Date<span class="dot" style="color: rgb(216, 99, 4);">*</span>:   
     <input type="date"></p></div>

    <p>(ii) I am a nominally resident in the address given in the above (date, month, year) above;

      I have not applied to include my name in the electoral roll for any other constituency;</p>
      <div class="kl" style="margin-left: 5%;
      padding: 0px 15px;">
      <input type="radio"> (i) My name has not been already included in the electoral roll for this or any other assembly / parliamentary constituency   <br> <center>Or</center>
      <input type="radio"> (ii) My name would have been included in electoral rolls of the State's constituency, in which I was already residing in the address mentioned below, and if so, then I request that it be removed from that electoral roll. Go.
<hr><br><div class="kl" style="margin-left: 5%;
padding: 0px 15px;">location <span class="dot" style="color: rgb(216, 99, 4);">*</span>: <input type="text" >  
date: <input type="date"></div>
I am afraid that the statement or declaration, which is false, to whom I know it or believe that it is false or I do not believe in being true, the People's Representation Act, 1950 (43 of 1950 ) Is punishable under section 31
<div class="kl" style="margin-left: 5%;
padding: 0px 15px;"><br>
                 <p>Captcha :  <img src="cap.jpg">  <img src="re.png" id="captcha_reload" href="#"></a>  <input type="text" ></p>
                </div>
 </div></div><br><br>
<div class="footer">Copyright &copy 2019 Suven Consultants and Technology Pvt. Ltd.</div>


</body>
</html>
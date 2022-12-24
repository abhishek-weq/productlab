import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {Helmet} from "react-helmet"
import callIcon from "../../content/assets/call-icon.svg"
import emailIcon from "../../content/assets/email-icon.svg"


const MultipleChecks = () => {
    const services = useStaticQuery(graphql`
    query Service {
        allWpService(sort: {fields: databaseId}){
            nodes {
              title
              slug
              formFields {
                formFields {
                  fieldName
                }
              description 
              }
            databaseId
            }
          }
      }  
    `)

    const [fruitsArray, setFruitsArray] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        //console.log(value,checked);
        if(checked)
        {
            setFruitsArray([
                ...fruitsArray, value
            ])
        }
        else
        {
            setFruitsArray(fruitsArray.filter( (e) => (e !== value) ));
        }
    }

    const [email, setEmail] = useState("");
    // const [service, setService] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fruitsArray.length === 0){
          console.log("Array is empty");
          document.getElementById("errormsg").style.display = "block";
        }else{
          document.getElementById("errormsg").style.display = "none";
          console.log(fruitsArray);
          var output = fruitsArray.join("\r\n");
          console.log(output);
          // setService(output);
          if(window.Email){
            window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "abhishek.pawar@yopmail.com",
            Password : "D254C5ED48CC0DA6F85CA3542A4BE1B67B36",
            To : "abhishek.pawar@yopmail.com",
            From : "abhishekrpawar94@gmail.com",
            Subject : "This is the subject",
            Body : `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
   <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <title>Thank You</title>
</head>
<style>
    a:hover {
        text-decoration: underline !important;
    }
</style>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; color:#4e4e4ede; font-size: 15px;font-weight:500; background-color: #f2f8f9;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f8f9" style=" font-family: 'Roboto', sans-serif , Arial, Helvetica, sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f8f9; max-width:670px; margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:40px;">&nbsp;</td>
                    </tr>
                    <!-- Logo -->
                    <tr>
                        <td style="text-align:center;">
                            <a href="https://fibwave.tempdev.uk/" title="FibWave"><img src="https://fibwave.tempdev.uk/wp-content/uploads/2022/10/image-25.svg" title="Logo Image" alt="FibWave Logo" style="width: 25%;"></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:40px;">&nbsp;</td>

                    </tr>
                    <!-- Email Content -->
                    <tr>
                        <td>

                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px; background:#fff; border-radius:3px; -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);-moz-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12); padding:0 40px;line-height: 1.5;border-top: 3px solid #032962;">
                                <tr>
                                    <td style="height:20px;">&nbsp;</td>

                                </tr>
                                <!-- Title -->
                                <tr>
                                    <!-- <td style="padding:0 15px; text-align:center;">
                                        <h1 style="color:#3075BA; font-weight:400; margin:0;font-size:32px;">Leave Application</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; 
                                        width:100px;"></span>
                                    </td> -->
                                </tr>
                                <!-- Details Table -->
                                <tr> 
                                    <td>
                                       
                                        <br/><strong>Dear ${email},</strong><br/>
                                        <p></p>
                                        <table cellpadding="0" cellspacing="0" style="width: 100%;">
                                            <tbody>
                                                <tr>
                                                    <td> <div><p style="margin: 5px 0;">Thank you for getting in touch!</p><p style="margin: 5px 0;">We appreciate you contacting us. One of our team members will be getting back to you shortly.<p>While we do our best to answer your queries quickly, it may take about 24 hours to receive a response from us. If your inquiry is urgent, please Email&#160; <a href="mailto:info@fibwave.in" class="user-name">info@fibwave.in</a> to talk to one of our team members.</p><p style="margin: 5px 0;">Until then keep browsing &#160;<a title="FibWave"  href="https://fibwave.tempdev.uk/" target="_blank" >FibWave</a></p>
  </div>  
  
   <p style="margin: 0;padding-top: 15px;font-weight: 600;">Regards,<br> FibWave Team</p>                                   
</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:#455056bd; line-height:18px; margin:0 0 0;">Copyright © 2022 FibWave, All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`
        }).then(
          message => alert("Sent email successfully")
        );
          }
          
        }



    //     var xhr = new XMLHttpRequest();
    //     var url = 'https://api.hsforms.com/submissions/v3/integration/submit/23585888/b2b4d534-9465-480c-957a-e01d38a1faca'
        
    //     // Example request JSON:
    //     var data = {
    //     "fields": [
    //         {
    //         "name": "Email",
    //         "value": email
    //         },
    //         {
    //         "name": "Message",
    //         "value": output
    //         }
    //     ],
    //     "legalConsentOptions":{ // Include this object when GDPR options are enabled
    //       "consent":{
    //         "consentToProcess":true,
    //         "text":"I agree to allow Example Company to store and process my personal data.",
    //         "communications":[
    //           {
    //             "value":true,
    //             "subscriptionTypeId":999,
    //             "text":"I agree to receive marketing communications from Example Company."
    //           }
    //         ]
    //       }
    //     }
    // }   

    // var final_data = JSON.stringify(data)

    // xhr.open('POST', url);
    // // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    // xhr.setRequestHeader('Content-Type', 'application/json');

    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4 && xhr.status === 200) { 
    //         alert(xhr.responseText); // Returns a 200 response if the submission is successful.
    //     } else if (xhr.readyState === 4 && xhr.status === 400){ 
    //         alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
    //     } else if (xhr.readyState === 4 && xhr.status === 403){ 
    //         alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
    //     } else if (xhr.readyState === 4 && xhr.status === 404){ 
    //         alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
    //     }
    //    }


    // // Sends the request 
    
    // xhr.send(final_data)
    }

  return (
      <div id="services" className="form-section-wrapper">
        <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.6.2.min.js"
          integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA="
          crossorigin="anonymous"></script>
          <script src="https://smtpjs.com/v3/smtp.js" />
        </Helmet>
        
          <form onSubmit={handleSubmit}> 
          <div className="container">
            <div className="heading-wrapper">
                <div className="heading-common-wrap">
                    <h2>What Do You <span class="puprple-text">Need Help With</span></h2>
                </div>
            </div> <br/><br/>
            <div className="tabs form-custom-tabs">
              <ul id="tabs-nav">
              {services.allWpService.nodes.map(services => (
                <li><Link className="tab-nav-item" href={services.slug}>{services.title}</Link></li>
                ))}  
              </ul>
              <p id="errormsg">Select atleast on option</p>
              <div id="tabs-content">
              {services.allWpService.nodes.map(services => (
                <div id={services.slug} className="tab-content">
                  <div className="service-desc">
                    <p className="service-desc-content">"{services.formFields.description}"</p>
                  </div>
                  <div className="tab-content-wrap">
                  {services.formFields.formFields.map(field => (
                    <div className="fieldwrap">
                      <input id={field.fieldName} type="checkbox" name="services" value={field.fieldName} onChange={handleChange} />
                      <label aria-label="{field.fieldName}" htmlFor={field.fieldName}><span></span>{field.fieldName}</label>
                    </div>
                    ))} 
                  </div>
                </div>
              ))}
              </div>
            </div>
            </div>

            <div className="cta-section">
              <div className="container">
                <div className="cta-inner">
                  <div className="book-now-wrap">
                    <img src={callIcon} alt="call-icon" />
                    <p className="cta-desc">Book a discovery call</p>
                    <a href="/" className="cta">Book Now</a>
                  </div>
                  <div className="form-submit-wrap">
                    <img src={emailIcon} alt="mail-icon" />
                    <label className="cta-desc">Request a Proposal</label>
                    <div className="email-submit-wrap">
                      <input className="email-field" type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} />
                      <input type="submit" value="Submit" className="cta submit"/> 
                    </div>
                    
                  </div>   
                </div>
              </div>

            </div>
    

                
          </form>  
        </div>          
  )
}

export default MultipleChecks

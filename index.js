const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const exphbs = require("express-handlebars");
const http = require("http");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var hbs_mail = require('nodemailer-express-handlebars');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.set("views", path.join(__dirname, "views"));

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: {
        ifeq: function (a, b, options) {
            if (a == b) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
        ifnoteq: function (a, b, options) {
            if (a != b) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
        firstL: function (options) {
            return options.charAt(0);
        },
    },
});


app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middleware
app.use(morgan("tiny")); //Morgan
app.use(cors()); // cors
app.use(express.json()); // JSON
app.use(express.urlencoded({ extended: false })); //urlencoded
app.use(bodyParser.json());


app.post("/send_cont_mail", async (req, res) => {
    const { firstname,
        lastname,
        email,
        comp_name,
        tnumber,
        services,
        n_goals,
        l_expert,
        timeline,
        budget,
        factors,
        message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        from: "info.akin.co@gmail.com",
        auth: {
            user: "info.akin.co@gmail.com",
            pass: "qiytyydoixyxynrd",
        },
    });

    let mailOption = {
        from: "info.akin.co@gmail.com",
        to: `${email}`,
        subject: "AKIN Service Request",
        html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>email_temp</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <script src='main.js'></script>
    </head>
    
    <body>
        <div data-template-type="html" style="height: auto; padding-bottom: 149px;" class="ui-sortable">
            <!--[if !mso]><!-->
            <!--<![endif]-->
            <!-- ====== Module : Intro ====== -->
            <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0"
                data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-1.png"
                data-module="Module-1" data-bgcolor="M1 Bgcolor 1">
                <tbody>
                    <tr>
                        <td height="25" style="font-size:0px">&nbsp;</td>
                    </tr>
                    <!-- top -->
                    <tr>
                        <td>
                            <table align="center" class="res-full ui-resizable" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td width="10"></td>
                                                        <td valign="middle" style="vertical-align: middle;">
                                                            <table align="center" border="0" cellpadding="0"
                                                                cellspacing="0">
                                                                <!-- link -->
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="res-center" style="text-align: center;">
                                                                            <a href="/home"
                                                                                style="color: #798999; font-family: 'Nunito', Arial, Sans-serif; font-size: 15px; letter-spacing: 0.6px; text-decoration: none; word-break: break-word; font-weight: 600;"
                                                                                data-color="M1 Link 1" data-size="M1 Link 1"
                                                                                data-max="25" data-min="5">
                                                                                Go to website
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <!-- link end -->
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            </table>
                        </td>
                    </tr>
                    <!-- top end -->
                    <tr>
                        <td height="25" style="font-size:0px">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table bgcolor="#304050" align="center" width="750" class="margin-full ui-resizable"
                                style="background-size: cover; background-position: center center; border-radius: 6px 6px 0px 0px; background-image: url(&quot;https://user-images.githubusercontent.com/43387401/225176120-466d132f-c2ab-49d5-bec6-6a24580ff157.png&quot;);"
                                border="0" cellpadding="0" cellspacing="0"
                                background="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/module01-bg01.png"
                                data-bgcolor="M1 Bgcolor 2" data-background="M1 Background 1">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="600" align="center" class="margin-pad" border="0" cellpadding="0"
                                                cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="70" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- image -->
                                                    <tr>
                                                        <td>
                                                            <table align="center" class="res-full" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <img width="65"
                                                                                                style="max-width: 65px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                src="https://user-images.githubusercontent.com/43387401/229181333-44e1d4b4-8635-4e78-8237-e30c116050e9.png">
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- image end -->
                                                    <tr>
                                                        <td height="45" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- title -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 26px; letter-spacing: 1.5px; word-break: break-word; font-weight: 300; padding-left: 1.5px;"
                                                            data-color="M1 Title 1" data-size="M1 Title 1" data-max="36"
                                                            data-min="16">
                                                            BUILD, AUTOMATE AND MANAGE YOUR
                                                        </td>
                                                    </tr>
                                                    <!-- title end -->
                                                    <tr>
                                                        <td height="12" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- title -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 35px; letter-spacing: 3px; word-break: break-word; font-weight: 800; padding-left: 3px;"
                                                            data-color="M1 Title 2" data-size="M1 Title 2" data-max="45"
                                                            data-min="25">
                                                            FUTURE
                                                        </td>
                                                    </tr>
                                                    <!-- title end -->
                                                    <tr>
                                                        <td height="30" style="font-size:0px" class="">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table align="center" border="0" cellpadding="0"
                                                                cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <!-- link -->
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: center;">
                                                                                            <a href="https://example.com"
                                                                                                style="color: white; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                data-color="M1 Link 2"
                                                                                                data-size="M1 Link 2"
                                                                                                data-max="26" data-min="6">
                                                                                                Reflect
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- link end -->
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style="padding: 0 12px; color: #798999;">
                                                                            •
                                                                        </td>
                                                                        <td>
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <!-- link -->
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: center;">
                                                                                            <a href="https://example.com"
                                                                                                style="color: #ff7000; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                data-color="M1 Link 3"
                                                                                                data-size="M1 Link 3"
                                                                                                data-max="26" data-min="6">
                                                                                                Believe
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- link end -->
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style="padding: 0 12px; color: #798999;">
                                                                            •
                                                                        </td>
                                                                        <td>
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <!-- link -->
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: center;">
                                                                                            <a href="https://example.com"
                                                                                                style="color: white; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                data-color="M1 Link 4"
                                                                                                data-size="M1 Link 4"
                                                                                                data-max="26" data-min="6">
                                                                                                Succeed
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- link end -->
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="70" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ====== Module : Texts ====== -->
            <table style="background:rgb(255, 255, 255);" bgcolor="#F5F5F5" align="center" class="full selected-table" border="0" cellpadding="0" cellspacing="0"
                data-module="Module-2" data-bgcolor="M2 Bgcolor 1">
                <tbody>
                    <tr>
                        <td>
                            <table bgcolor="white" width="750" align="center" class="margin-full ui-resizable" border="0"
                                cellpadding="0" cellspacing="0" data-bgcolor="M2 Bgcolor 2">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="700" align="center" class="margin-pad" border="0" cellpadding="0"
                                                cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="70" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- HEADING -->
                                                    <!-- subtitle -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; font-family: 'Raleway', Arial, Sans-serif; font-size: 14px; letter-spacing: 1px; word-break: break-word; font-weight: 800;"
                                                            data-color="M2 Subtitle 1" data-size="M2 Subtitle 1"
                                                            data-max="24" data-min="5">
                                                            Dear ${firstname},
                                                        </td>
                                                    </tr>
                                                    <!-- subtitle end -->
                                                    <tr>
                                                        <td height="13" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- title -->
                                                    <tr>
                                                        <td class="res-center selected-element"
                                                            style="text-align: center; font-family: 'Raleway', Arial, Sans-serif; font-size: 28px; letter-spacing: 0.7px; word-break: break-word"
                                                            data-color="M2 Title 1" data-size="M2 Title 1" data-max="32"
                                                            data-min="12">
                                                            Congratulations
                                                        </td>
                                                    </tr>
                                                    <!-- title end -->
                                                    <tr>
                                                        <td height="15" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- image -->
                                                    <tr>
                                                        <td>
                                                            <table align="center" class="res-full" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <img width="130"
                                                                                                style="max-width: 130px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                src="https://user-images.githubusercontent.com/43387401/229327686-86ba0f05-e2eb-4ba6-bbef-d7d70df5bd80.png">
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- image end -->
                                                    <!-- HEADING end -->
                                                    <tr>
                                                        <td height="30" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- paragraph -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                            data-color="M2 Paragraph 1" data-size="M2 Paragraph 1"
                                                            data-max="26" data-min="6">
                                                            Thank you for contacting AKIN BV. We are pleased to
                                                            receive your request regarding ${services} service.
                                                            We appreciate your interest in our company and our
                                                            service.<br><br>
                                                            Please know that your request is important to us and in less that 48 hours we will do
                                                            provide you with a prompt response. One of our
                                                            representatives will be assigned to your request and will be in
                                                            touch with you soon to discuss the details and provide you with
                                                            the necessary information or assistance.<br><br>
    
                                                            If you have any further questions or concerns, please do not
                                                            hesitate to reach out to us. We are always here to help.<br><br>
    
                                                            Thank you for choosing AKIN BV. We look forward to
                                                            serving you.
                                                        </td>
                                                    </tr>
                                                    <!-- paragraph end -->
                                                    <tr>
                                                        <td height="23" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- link -->
                                                    
                                                    <!-- link end -->
                                                    <tr>
                                                        <td height="35" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ====== Module : Video ====== -->
            <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0"
                data-module="Module-6" data-bgcolor="M6 Bgcolor 1">
                <tbody>
                    <tr>
                        <td>
                            <table bgcolor="#F06E30" align="center" width="750" class="margin-full ui-resizable"
                                style="background-size: cover; background-position: center center; border-radius: 6px 6px 0px 0px; background-image: url(&quot;https://user-images.githubusercontent.com/43387401/229329159-189609d4-f56c-4b41-98d9-1fb19bea6cd7.png&quot;);"
                                border="0" cellpadding="0" cellspacing="0"
                                background="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/module06-bg01.png"
                                data-bgcolor="M6 Bgcolor 2" data-background="M6 Background 1">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="600" align="center" class="margin-pad" border="0" cellpadding="0"
                                                cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="90" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- subtitle -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 15px; letter-spacing: 2px; word-break: break-word; font-weight: 700;"
                                                            data-color="M6 Subtitle 1" data-size="M6 Subtitle 1"
                                                            data-max="25" data-min="5">
                                                            LET'S WATCH
                                                        </td>
                                                    </tr>
                                                    <!-- subtitle end -->
                                                    <tr>
                                                        <td height="20" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- title -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 30px; letter-spacing: 2px; word-break: break-word; font-weight: 300;"
                                                            data-color="M6 Title 1" data-size="M6 Title 1" data-max="40"
                                                            data-min="20">
                                                            LEARN MORE ABOUT US
                                                        </td>
                                                    </tr>
                                                    <!-- title end -->
                                                    <tr>
                                                        <td height="40" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- image -->
                                                    <tr>
                                                        <td>
                                                            <table align="center" class="res-full" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="https://www.youtube.com/watch?v=9URSbTOE4YI&t=3s&ab_channel=Simplilearn">
                                                                            <table align="center" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="padding: 12px 10px 12px 14px; border: 1.5px solid white; border-radius: 50%;">
                                                                                            <img width="18"
                                                                                                style="max-width: 18px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/module06-img01.png">
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- image end -->
                                                    <tr>
                                                        <td height="40" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- paragraph -->
                                                    <tr>
                                                        <td class="res-center"
                                                            style="text-align: center; color: white; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                            data-color="M6 Paragraph 1" data-size="M6 Paragraph 1"
                                                            data-max="26" data-min="6">
                                                            Know who we are and what are all the services and courses that we give on personal level and company level
                                                        </td>
                                                    </tr>
                                                    <!-- paragraph end -->
                                                    <tr>
                                                        <td height="90" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ====== Module : Footer ====== -->
            <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0"
                data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-20.png"
                data-module="Module-20" data-bgcolor="M20 Bgcolor 1">
                <tbody>
                    <tr>
                        <td>
                            <table style="border-radius: 0 0 6px 6px;" bgcolor="white" width="750" align="center"
                                class="margin-full ui-resizable" border="0" cellpadding="0" cellspacing="0"
                                data-bgcolor="M20 Bgcolor 2">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="600" align="center" class="margin-pad" border="0" cellpadding="0"
                                                cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="40" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                    <!-- column x2 -->
                                                    <tr>
                                                        <td>
                                                            <table class="full" align="center" border="0" cellpadding="0"
                                                                cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="top">
                                                                            <!-- left column -->
                                                                            <table width="290" align="left" class="res-full"
                                                                                border="0" cellpadding="0" cellspacing="0">
                                                                                <!-- title -->
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: left; font-family: 'Raleway', Arial, Sans-serif; font-size: 22px; letter-spacing: 0.7px; word-break: break-word"
                                                                                            data-color="M20 Title 1"
                                                                                            data-size="M20 Title 1"
                                                                                            data-max="32" data-min="12">
                                                                                            Contacts
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- title end -->
                                                                                    <tr>
                                                                                        <td height="15"
                                                                                            style="font-size:0px">&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- list -->
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table align="left"
                                                                                                class="res-full" border="0"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table
                                                                                                                align="center"
                                                                                                                style="border-radius: 0px;"
                                                                                                                border="0"
                                                                                                                cellpadding="0"
                                                                                                                cellspacing="0">
                                                                                                                <!-- list -->
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <!-- image -->
                                                                                                                        <td
                                                                                                                            width="27">
                                                                                                                            <table
                                                                                                                                align="left"
                                                                                                                                class="res-full"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td>
                                                                                                                                            <table
                                                                                                                                                align="center"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td>
                                                                                                                                                            <img width="16"
                                                                                                                                                                style="max-width: 18px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                                                                                src="https://user-images.githubusercontent.com/43387401/229328859-4592d93d-b1bf-4179-b559-26270eb961c3.png">
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <!-- image end -->
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class="full"
                                                                                                                                align="center"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <!-- link -->
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td class="res-left"
                                                                                                                                            style="text-align: left;">
                                                                                                                                            <a href="https://www.facebook.com/profile.php?id=100091387561291"
                                                                                                                                                style="color:black; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                                                                data-color="M20 Link 1"
                                                                                                                                                data-size="M20 Link 1"
                                                                                                                                                data-max="26"
                                                                                                                                                data-min="6">
                                                                                                                                                facebook.com
                                                                                                                                                pages
                                                                                                                                            </a>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <!-- link end -->
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <!-- list end -->
                                                                                                                    <tr>
                                                                                                                        <td height="10"
                                                                                                                            style="font-size:0px">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <!-- list -->
                                                                                                                    <tr>
                                                                                                                        <!-- image -->
                                                                                                                        <td
                                                                                                                            width="27">
                                                                                                                            <table
                                                                                                                                align="left"
                                                                                                                                class="res-full"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td>
                                                                                                                                            <table
                                                                                                                                                align="center"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td>
                                                                                                                                                            <img width="16"
                                                                                                                                                                style="max-width: 16px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                                                                                src="https://user-images.githubusercontent.com/43387401/229328867-f2a81638-afd8-46b3-a61c-f19c7b3cde8e.png">
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <!-- image end -->
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class="full"
                                                                                                                                align="center"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <!-- link -->
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td class="res-left"
                                                                                                                                            style="text-align: left;">
                                                                                                                                            <a href="https://www.instagram.com/akin.bv/"
                                                                                                                                                style="color:black; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                                                                data-color="M20 Link 2"
                                                                                                                                                data-size="M20 Link 2"
                                                                                                                                                data-max="26"
                                                                                                                                                data-min="6">
                                                                                                                                                instagram.com
                                                                                                                                                page
                                                                                                                                            </a>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <!-- link end -->
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <!-- list end -->
                                                                                                                    <tr>
                                                                                                                        <td height="10"
                                                                                                                            style="font-size:0px">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <!-- list -->
                                                                                                                    <tr>
                                                                                                                        <!-- image -->
                                                                                                                        <td
                                                                                                                            width="27">
                                                                                                                            <table
                                                                                                                                align="left"
                                                                                                                                class="res-full"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td>
                                                                                                                                            <table
                                                                                                                                                align="center"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td>
                                                                                                                                                            <img width="16"
                                                                                                                                                                style="max-width: 16px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                                                                                src="https://user-images.githubusercontent.com/43387401/229328945-16000f84-f574-4d7c-b794-dccba40be524.png">
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <!-- image end -->
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class="full"
                                                                                                                                align="center"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0">
                                                                                                                                <!-- link -->
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td class="res-left"
                                                                                                                                            style="text-align: left;">
                                                                                                                                            <a href="https://example.com"
                                                                                                                                                style="color:black; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                                                                data-color="M20 Link 3"
                                                                                                                                                data-size="M20 Link 3"
                                                                                                                                                data-max="26"
                                                                                                                                                data-min="6">
                                                                                                                                                youtube.com
                                                                                                                                                videos
                                                                                                                                            </a>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <!-- link end -->
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <!-- list end -->
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- list end -->
                                                                                </tbody>
                                                                            </table>
                                                                            <!-- left column end -->
                                                                            <!--[if (gte mso 9)|(IE)]>
                                                    </td>
                                                    <td>
                                                       <![endif]-->
                                                                            <table width="20" align="left" class="res-full"
                                                                                border="0" cellpadding="0" cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height="20"
                                                                                            style="font-size:0px">&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <!--[if (gte mso 9)|(IE)]>
                                                    </td>
                                                    <td valign="top">
                                                       <![endif]-->
                                                                            <!-- right column -->
                                                                            <table width="290" align="right"
                                                                                class="res-full" border="0" cellpadding="0"
                                                                                cellspacing="0">
                                                                                <!-- image -->
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table align="right"
                                                                                                class="res-full" border="0"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table
                                                                                                                align="center"
                                                                                                                border="0"
                                                                                                                cellpadding="0"
                                                                                                                cellspacing="0">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <img width="60"
                                                                                                                                style="max-width: 60px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                                                src="https://user-images.githubusercontent.com/43387401/225178377-eab2134e-ff46-48f2-a277-95d57c30a189.png">
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- image end -->
                                                                                    <tr>
                                                                                        <td height="20"
                                                                                            style="font-size:0px">&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- paragraph -->
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: right; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                                                            data-color="M20 Paragraph 1"
                                                                                            data-size="M20 Paragraph 1"
                                                                                            data-max="26" data-min="6">
                                                                                            All Rights Reserved @ AKIN BV
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- paragraph end -->
                                                                                    <tr>
                                                                                        <td height="4"
                                                                                            style="font-size:0px">&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- link -->
                                                                                    <tr>
                                                                                        <td class="res-center"
                                                                                            style="text-align: right;">
                                                                                            <a href="https://example.com"
                                                                                                style="color: #00bb9d; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                data-color="M20 Link 4"
                                                                                                data-size="M20 Link 4"
                                                                                                data-max="26" data-min="6">
                                                                                                Read Terms &amp; Conditions
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <!-- link end -->
                                                                                </tbody>
                                                                            </table>
                                                                            <!-- right column end -->
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- column x2 end -->
                                                    <tr>
                                                        <td height="50" style="font-size:0px">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="35" style="font-size:0px">&nbsp;</td>
                    </tr>
                    <!-- paragraph -->
                    <tr>
                        <td class="res-center"
                            style="text-align: center;font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                            data-color="M20 Paragraph 2" data-size="M20 Paragraph 2" data-max="26" data-min="6">
                            Did we take good care of your?
                        </td>
                    </tr>
                    <!-- paragraph end -->
                    <tr>
                        <td height="5" style="font-size:0px">&nbsp;</td>
                    </tr>
                    <!-- paragraph -->
                    <tr>
                        <td class="res-center"
                            style="text-align: center; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word; font-weight: 600;"
                            data-color="M20 Paragraph 3" data-size="M20 Paragraph 3" data-max="26" data-min="6">
                            <a href="sr_unsubscribe">Questionaire</a>
                        </td>
                    </tr>
                    <!-- paragraph end -->
                    <tr>
                        <td height="35" style="font-size:0px">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`
    };

    transporter.sendMail(mailOption, function (err, res) {
        if (err) {
            res.send({ error: "Send mail error contact administrator!" });
        }
    });

    let transporter_b = nodemailer.createTransport({
        service: "gmail",
        from: "info.akin.co@gmail.com",
        auth: {
            user: "info.akin.co@gmail.com",
            pass: "qiytyydoixyxynrd",
        },
    });

    // "business.cath.official@gmail.com", "Elfrayline.laker@gmail.com",

    let mailOption_b = {
        from: "info.akin.co@gmail.com",
        to: ["business.cath.official@gmail.com", "Elfrayline.laker@gmail.com","nathacarcool@gmail.com"],
        subject: "AKIN Client Request",
        html: `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>email_temp</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
            <script src='main.js'></script>
        </head>
        
        <body>
            <div data-template-type="html" style="height: auto; padding-bottom: 149px;" class="ui-sortable">
                <!--[if !mso]><!-->
                <!--<![endif]-->
                <!-- ====== Module : Intro ====== -->
                <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0"
                    data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-1.png"
                    data-module="Module-1" data-bgcolor="M1 Bgcolor 1">
                    <tbody>
                        <tr>
                            <td>
                                <table bgcolor="#304050" align="center" width="750" class="margin-full ui-resizable"
                                    style="background-size: cover; background-position: center center; border-radius: 6px 6px 0px 0px; background-image: url(&quot;https://user-images.githubusercontent.com/43387401/225176120-466d132f-c2ab-49d5-bec6-6a24580ff157.png&quot;);"
                                    border="0" cellpadding="0" cellspacing="0"
                                    background="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/module01-bg01.png"
                                    data-bgcolor="M1 Bgcolor 2" data-background="M1 Background 1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="600" align="center" class="margin-pad" border="0" cellpadding="0"
                                                    cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td height="70" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- image -->
                                                        <tr>
                                                            <td>
                                                                <table align="center" class="res-full" border="0"
                                                                    cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <img width="65"
                                                                                                    style="max-width: 65px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                    src="https://user-images.githubusercontent.com/43387401/229181333-44e1d4b4-8635-4e78-8237-e30c116050e9.png">
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <!-- image end -->
                                                        <tr>
                                                            <td height="45" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- title -->
                                                        <tr>
                                                            <td class="res-center"
                                                                style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 26px; letter-spacing: 1.5px; word-break: break-word; font-weight: 300; padding-left: 1.5px;"
                                                                data-color="M1 Title 1" data-size="M1 Title 1" data-max="36"
                                                                data-min="16">
                                                                BUILD, AUTOMATE AND MANAGE YOUR
                                                            </td>
                                                        </tr>
                                                        <!-- title end -->
                                                        <tr>
                                                            <td height="12" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- title -->
                                                        <tr>
                                                            <td class="res-center"
                                                                style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 35px; letter-spacing: 3px; word-break: break-word; font-weight: 800; padding-left: 3px;"
                                                                data-color="M1 Title 2" data-size="M1 Title 2" data-max="45"
                                                                data-min="25">
                                                                FUTURE
                                                            </td>
                                                        </tr>
                                                        <!-- title end -->
                                                        <tr>
                                                            <td height="30" style="font-size:0px" class="">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table align="center" border="0" cellpadding="0"
                                                                    cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <!-- link -->
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="res-center"
                                                                                                style="text-align: center;">
                                                                                                <a href="https://example.com"
                                                                                                    style="color: white; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                    data-color="M1 Link 2"
                                                                                                    data-size="M1 Link 2"
                                                                                                    data-max="26" data-min="6">
                                                                                                    Reflect
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- link end -->
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                            <td style="padding: 0 12px; color: #798999;">
                                                                                •
                                                                            </td>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <!-- link -->
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="res-center"
                                                                                                style="text-align: center;">
                                                                                                <a href="https://example.com"
                                                                                                    style="color: #ff7000; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                    data-color="M1 Link 3"
                                                                                                    data-size="M1 Link 3"
                                                                                                    data-max="26" data-min="6">
                                                                                                    Believe
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- link end -->
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                            <td style="padding: 0 12px; color: #798999;">
                                                                                •
                                                                            </td>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <!-- link -->
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="res-center"
                                                                                                style="text-align: center;">
                                                                                                <a href="https://example.com"
                                                                                                    style="color: white; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                    data-color="M1 Link 4"
                                                                                                    data-size="M1 Link 4"
                                                                                                    data-max="26" data-min="6">
                                                                                                    Succeed
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- link end -->
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="70" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- ====== Module : Texts ====== -->
                <table style="background:rgb(255, 255, 255);" bgcolor="#F5F5F5" align="center" class="full selected-table"
                    border="0" cellpadding="0" cellspacing="0" data-module="Module-2" data-bgcolor="M2 Bgcolor 1">
                    <tbody>
                        <tr>
                            <td>
                                <table bgcolor="white" width="750" align="center" class="margin-full ui-resizable" border="0"
                                    cellpadding="0" cellspacing="0" data-bgcolor="M2 Bgcolor 2">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="700" align="center" class="margin-pad" border="0" cellpadding="0"
                                                    cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td height="70" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- title -->
                                                        <tr>
                                                            <td class="res-center selected-element"
                                                                style="text-align: center; font-family: 'Raleway', Arial, Sans-serif; font-size: 30px; letter-spacing: 0.7px; word-break: break-word"
                                                                data-color="M2 Title 1" data-size="M2 Title 1" data-max="32"
                                                                data-min="12">
                                                                We did it!
                                                            </td>
                                                        </tr>
                                                        <!-- title end -->
                                                        <tr>
                                                            <td height="15" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- image -->
                                                        <tr>
                                                            <td>
                                                                <table align="center" class="res-full" border="0"
                                                                    cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <img width="130"
                                                                                                    style="max-width: 130px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                    src="https://user-images.githubusercontent.com/43387401/229327686-86ba0f05-e2eb-4ba6-bbef-d7d70df5bd80.png">
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <!-- image end -->
                                                        <!-- HEADING end -->
                                                        <tr>
                                                            <td height="30" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- paragraph -->
                                                        <tr>
                                                            <td class="res-center"
                                                                style="text-align: center; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                                data-color="M2 Paragraph 1" data-size="M2 Paragraph 1"
                                                                data-max="26" data-min="6">
                                                                ${firstname} have send us a request from the business ${comp_name} to
                                                                get more information of our ${services}.<br><br>
        
                                                                Let's review this request as fast as we can, to give the best
                                                                service to this company.<br><br>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="res-center"
                                                                style="text-align: left; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                                data-color="M2 Paragraph 1" data-size="M2 Paragraph 1"
                                                                data-max="26" data-min="6">
                                                                <br><br>
                                                                Requester name: ${firstname} ${lastname}<br>
                                                                Company name: ${comp_name}<br>
                                                                Service: ${services}<br>
                                                                Phone Number: ${tnumber}<br>
                                                                Email: ${email}<br><br>
                                                                Level of experience: ${l_expert}<br>
                                                                Company Goal: ${n_goals}<br>
                                                                Project timeline: ${timeline}<br>
                                                                Project budget: ${budget}<br>
                                                                Factors: ${factors}<br><br>
                                                                Message: ${message}<br>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="res-center"
                                                                style="text-align: center; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                                data-color="M2 Paragraph 1" data-size="M2 Paragraph 1"
                                                                data-max="26" data-min="6">
                                                                <br><br>
                                                                We have to set a introduction meeting with ${firstname} to discuss the more information in detail. Send a whatsapp in the AKIN whatsapp to remind everyone of the client, and 
                                                                we will have to contact the client in less tha 48 hours. Template are set to reply on the email of the client, we have to accept and send the date and time of this meeting. 
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td class="res-center selected-element"
                                                                style="text-align: center; font-family: 'Raleway', Arial, Sans-serif; font-size: 30px; letter-spacing: 0.7px; word-break: break-word"
                                                                data-color="M2 Title 1" data-size="M2 Title 1" data-max="32"
                                                                data-min="12">
                                                                <br><br>
                                                                We can do it<br>
                                                                Let's give the client the best of AKIN!
                                                            </td>
                                                        </tr>
                                                        <!-- paragraph end -->
                                                        <tr>
                                                            <td height="23" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- link -->
        
                                                        <!-- link end -->
                                                        <tr>
                                                            <td height="35" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- ====== Module : Footer ====== -->
                <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0"
                    data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-20.png"
                    data-module="Module-20" data-bgcolor="M20 Bgcolor 1">
                    <tbody>
                        <tr>
                            <td>
                                <table style="border-radius: 0 0 6px 6px;" bgcolor="white" width="750" align="center"
                                    class="margin-full ui-resizable" border="0" cellpadding="0" cellspacing="0"
                                    data-bgcolor="M20 Bgcolor 2">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="600" align="center" class="margin-pad" border="0" cellpadding="0"
                                                    cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td height="40" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                        <!-- column x2 -->
                                                        <tr>
                                                            <td>
                                                                <table class="full" align="center" border="0" cellpadding="0"
                                                                    cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="top">
                                                                                <!-- left column -->
                                                                                <table width="290" align="left" class="res-full"
                                                                                    border="0" cellpadding="0" cellspacing="0">
                                                                                    <!-- title -->
                                                                                    <tbody>
                                                                                        <!-- list end -->
                                                                                    </tbody>
                                                                                </table>
                                                                                <table width="20" align="left" class="res-full"
                                                                                    border="0" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td height="20"
                                                                                                style="font-size:0px">&nbsp;
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <!-- right column -->
                                                                                <table width="290" align="right"
                                                                                    class="res-full" border="0" cellpadding="0"
                                                                                    cellspacing="0">
                                                                                    <!-- image -->
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <table align="right"
                                                                                                    class="res-full" border="0"
                                                                                                    cellpadding="0"
                                                                                                    cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td>
                                                                                                                                <img width="60"
                                                                                                                                    style="max-width: 60px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;"
                                                                                                                                    src="https://user-images.githubusercontent.com/43387401/225178377-eab2134e-ff46-48f2-a277-95d57c30a189.png">
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- image end -->
                                                                                        <tr>
                                                                                            <td height="20"
                                                                                                style="font-size:0px">&nbsp;
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- paragraph -->
                                                                                        <tr>
                                                                                            <td class="res-center"
                                                                                                style="text-align: right; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word"
                                                                                                data-color="M20 Paragraph 1"
                                                                                                data-size="M20 Paragraph 1"
                                                                                                data-max="26" data-min="6">
                                                                                                All Rights Reserved @ AKIN BV
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- paragraph end -->
                                                                                        <tr>
                                                                                            <td height="4"
                                                                                                style="font-size:0px">&nbsp;
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- link -->
                                                                                        <tr>
                                                                                            <td class="res-center"
                                                                                                style="text-align: right;">
                                                                                                <a href="https://example.com"
                                                                                                    style="color: #00bb9d; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;"
                                                                                                    data-color="M20 Link 4"
                                                                                                    data-size="M20 Link 4"
                                                                                                    data-max="26" data-min="6">
                                                                                                    Read Terms &amp; Conditions
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <!-- link end -->
                                                                                    </tbody>
                                                                                </table>
                                                                                <!-- right column end -->
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <!-- column x2 end -->
                                                        <tr>
                                                            <td height="50" style="font-size:0px">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="35" style="font-size:0px">&nbsp;</td>
                        </tr>
                        <!-- paragraph end -->
                        <tr>
                            <td height="35" style="font-size:0px">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`
    };

    transporter_b.sendMail(mailOption_b, function (err, res) {
        if (err) {
            res.send({ error: "Send mail error contact administrator!" });
        }
    });
    res.redirect("/contact_form?success=true&message=Request send succesfull")
});
// Routes
app.use(require("./routes"));
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

app.set("port", process.env.PORT || 5000);

server.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

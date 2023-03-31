module.exports = `
<!doctype html>
<html class="auth0-lock-html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="author" content="Auth0">
    <meta name="description" content="Easily link two accounts into one">
    <title>Auth0 Account Linking Extension</title>
    <link rel="shortcut icon" href="https://auth0.com/auth0-styleguide/img/favicon.png" />
    {{ ExtensionCSS }}
    {{ CustomCSS }}
    <style type="text/css">
      .auth0-lock-header-logo {
            height: 35px !important;
      }
      .auth0-lock-content {
            padding: 0 20px 20px !important;
      }
      #skip {
            display: none;
      }
      #message {
            display: none;
      }
      #content-container:after {
            content: 'Continue below to sign in with your email and password, which will link your existing account to your Microsoft 365 account.';
                              color: grey;
                              white-space: pre-wrap;
      }
      #content-container {
            text-align: center;
                              line-height: 22px;
            margin-bottom: 15px;
            font-size: 17px;
      }
      form {
            width: 400px !important;
      }
    </style>
  </head>
  <body>

    {{ Auth0Widget }}
    {{ ExtensionScripts }}
  </body>
</html>
`;

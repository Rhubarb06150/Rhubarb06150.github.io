<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <link href="/images/head/icon.png" rel="icon">
    <script src="/main.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script>
        $(function() {
            $("#body").load("base.html");
        });
    </script>
    <title>SMBX Land</title>
</head>

<body id="body">
</body>
<script>
    window.onload = function() {
        AddElement('Register', 'here you can create an account for have access to all of functionnalities!',
            'Username: <input type="text" style="margin-bottom:10px"><br>' +
            'E-Mail Address: <input type="text" style="margin-bottom:10px">');
    }
</script>

</html>
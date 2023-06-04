<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Quiz</title>
</head>

<body>

    <?php
    if (isset($_POST["Invia"])) {
        $username = $_POST["username"];
        setcookie("username", $username);
    }

    ?>
    <div class="quiz-container" id="quiz">
        <form action="quiz.php" method="post">
            <div class="quiz-header">
                <h2 id="question">Domanda Quiz</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" class="answer">
                        <label for="a" id="a_text">Risposta</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="b" class="answer">
                        <label for="b" id="b_text">Risposta</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="c" class="answer">
                        <label for="c" id="c_text">Risposta</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="d" class="answer">
                        <label for="d" id="d_text">Risposta</label>
                    </li>
                </ul>
            </div>
            <input type="hidden" id="Text" name="testo" value="0"></input>

            <button type="submit" style="display: none" id="submit" name="sub" onclick="aumento()">Submit</button>
        </form>
        <button id="btnSubmit">Submit</button>

    </div>

    <script src="script.js"></script>

    <?php
    if (isset($_POST["sub"])) {
        $username = $_COOKIE["username"];
        $score = $_POST["testo"];
        setcookie("score", $score);
        $inserisciSql = "INSERT INTO user_table(username,score) VALUES('" . $username . "',$score);";

        require "Connection.php";
        $result = $conn->query($inserisciSql);

        $conn->close();
        header("Location: Risultati/risultati.html");
    }
    ?>





</body>

</html>
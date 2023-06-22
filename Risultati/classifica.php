<?php
require_once "../Connection.php";

$sql = "SELECT `username`, `score` FROM `user_table` order by score desc";
$result = $conn->query($sql);

$html = '<section class="bar-graph bar-graph-horizontal bar-graph-one">';
$i = 0;
while ($row = mysqli_fetch_array($result)) {
    $i++;
    if ($i == 1) {
        $html .= '
                <div class="bar-one">
                    <div id="bar1" class="bar" data-percentage="' . $row[0] . '"></div>
                    <span class="score"><b>&nbsp;&nbsp;&nbsp;&nbsp;' . $row[1] . '</b></span>
                </div>';
    };

    if ($i == 2) {
        $html .= '
                <div class="bar-two">
                    <div cid="bar2" class="bar" data-percentage="' . $row[0] . '"></div>
                    <span class="score"><b>&nbsp;&nbsp;&nbsp;&nbsp;' . $row[1] . '</b></span>
                </div>';
    };

    if ($i == 3) {
        $html .= '
                <div class="bar-three">
                    <div id="bar3" class="bar" data-percentage="' . $row[0] . '"></div>
                    <span class="score"><b>&nbsp;&nbsp;&nbsp;&nbsp;' . $row[1] . '</b></span>
                </div>';
    };

    if ($i == 4) {
        $html .= '
                <div class="bar-four">
                    <div id="bar4" class="bar" data-percentage="' . $row[0] . '"></div>
                    <span class="score"><b>&nbsp;&nbsp;&nbsp;&nbsp;' . $row[1] . '</b></span>
                </div>';
    };

    if ($i == 5) {
        $html .= '
                <div class="bar-five">
                    <div id="bar5" class="bar" data-percentage="' . $row[0] . '"></div>
                    <span class="score"><b>&nbsp;&nbsp;&nbsp;&nbsp;' . $row[1] . '</b></span>
                </div>';
    };
}

$html .= '</section>';
echo $html;

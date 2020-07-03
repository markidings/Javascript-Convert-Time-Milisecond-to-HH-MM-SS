<script>
    let decimalTimeString = "1.6578";
    let decimalTime = parseFloat(decimalTimeString);
    decimalTime = decimalTime * 60 * 60;
    let hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    let minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    let seconds = Math.round(decimalTime);
    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    alert("" + hours + ":" + minutes + ":" + seconds);
</script>

$(document).ready(function() {
  let currentPercent;
  let tempPercent;
  let totalHours;
  let totalMinutes;
  let remainingHours;
  let remainingMinutes;

  $("#getProgress").click(() => {
    $("#totalHours").val() === ""
      ? (totalHours = 0)
      : (totalHours = parseInt($("#totalHours").val()));
    $("#totalMinutes").val() === ""
      ? (totalMinutes = 0)
      : (totalMinutes = parseInt($("#totalMinutes").val()));
    $("#remainingHours").val() === ""
      ? (remainingHours = 0)
      : (remainingHours = parseInt($("#remainingHours").val()));
    $("#remainingMinutes").val() === ""
      ? (remainingMinutes = 0)
      : (remainingMinutes = parseInt($("#remainingMinutes").val()));

    // Convert the hours into minutes and add it to the minutes
    totalMinutes += totalHours * 60;
    remainingMinutes += remainingHours * 60;

    tempPercent = Math.round((remainingMinutes / totalMinutes) * 100);

    currentPercent = 100 - tempPercent;

    //Output the percent to the user
    $(".answer").html(
      `You have read ${currentPercent}% with ${tempPercent}% remaining!`
    );
  });

  $("#clear").click(() => {
    $("#totalHours").val("");
    $("#totalMinutes").val("");
    $("#remainingHours").val("");
    $("#remainingMinutes").val("");
    currentPercent = 0;
    tempPercent = 0;
  });
});

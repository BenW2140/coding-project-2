$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    const question6 = $("input:radio[name=question6]:checked").val();
    $(".name").text(name);
    $("#java").hide();
    $("#c-plus-plus").hide();
    $("#python").hide();
    $("#c-sharp").hide();
    $("#anything").hide();
    $("#none").hide();
    if (question3 === "constantly") {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("anything").show();
          } else {
            $("#anything").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#python").show();
          } else {
            $("#anything").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#anything").show();
          } else {
            $("#anything").show();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#c-sharp").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").show();
          } else {
            $("#python").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").show();
          } else {
            $("#c-sharp").show();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-plus-plus").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#java").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#anything").show();
          }
        }
      }
    } else if (question3 === "sometimes") {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#python").show();
          } else {
            $("#anything").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").show();
          } else {
            $("#python").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#python").show();
          } else {
            $("#anything").show();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#java").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#python").show();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#c-sharp").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#java").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#python").show();
          }
        }
      }
    } else {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").show();
          } else {
            $("#c-sharp").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#python").show();
          } else {
            $("#c-sharp").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#c-sharp").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#c-plus-plus").show();
          } else {
            $("#c-plus-plus").show();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        } else {
          if (question6 === "insignificant") {
            $("#none").show();
          } else {
            $("#c-sharp").show();
          }
        }
      }
    }
  });
});
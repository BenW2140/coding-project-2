$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    const question6 = $("input:radio[name=question6]:checked").val();
    $(".name").text(name);
    if (question3 === "constantly") {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        }
      }
    } else if (question3 === "sometimes") {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").show();
            $("#none").hide();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").show();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      }
    } else {
      if (question4 === "yes") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").show();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").show();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      } else if (question4 === "no") {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      } else {
        if (question5 === "yes") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          } else {
            $("#java").hide();
            $("#c++").show();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").hide();
          }
        } else if (question5 === "no") {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        } else {
          if (question6 === "insignificant") {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").hide();
            $("#anything").hide();
            $("#none").show();
          } else {
            $("#java").hide();
            $("#c++").hide();
            $("#python").hide();
            $("#c#").show();
            $("#anything").hide();
            $("#none").hide();
          }
        }
      }
    }
  });
});
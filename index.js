function startQuiz() {
    document.getElementById("subheader").style.display = "none";
    document.getElementById("Question1").style.display = "inline-block";
  }
  
  /**
   * hides question 1 shows question2
   */
  function question2() {
    document.getElementById("Question1").style.display = "none";
    document.getElementById("Question2").style.display = "inline-block";
  }
  /**
   * hides question 2 shows question 3
   */
  function question2() {
    document.getElementById("Question2").style.display = "none";
    document.getElementById("Question3").style.display = "inline-block";
  }
  /**
   * hides question 3 shows question 4
   */
  function question2() {
    document.getElementById("Question3").style.display = "none";
    document.getElementById("Question4").style.display = "inline-block";
  }
  /**
   * hides question 4 shows question 5
   */
  function question2() {
    document.getElementById("Question4").style.display = "none";
    document.getElementById("Question5").style.display = "inline-block";
  }
  /**
   * hides question 5 shows question 6
   */
  function question2() {
    document.getElementById("Question5").style.display = "none";
    document.getElementById("Question6").style.display = "inline-block";
  }
  /**
   * hides question 6 shows question 7
   */
  function question2() {
    document.getElementById("Question6").style.display = "none";
    document.getElementById("Question7").style.display = "inline-block";
  }
  /**
   * hides question 7 shows results
   */
  function results() {
    calculateResults()
    document.getElementById("Question7").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }
  
  
  /**
   * calculates and displays the results
   */
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
  
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios6 = document.querySelectorAll('input[name="quest6"]');
    let q6Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios7 = document.querySelectorAll('input[name="quest7"]');
    let q7Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value) + Number(q7Value);
    result = total / 7;
  
    if (result > 7) {
      msg = "You answered mostly c you may have a kinesthetic learning style";
    } else if (result >= 1.5) {
      msg = "You answered mostly b, you may have an auditory learning style";
    } else {
      msg = "You answered mostly a, you may have a visual learning style";
    }
  
    function results() {
    document.getElementById("Question7").style.display = "none";
    document.getElementById("result").innerHTML = msg
  
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Store the reference to the submit button
    var submitBtn = document.getElementById("submit-btn");
  
    // Attach an event listener to the submit button
    submitBtn.addEventListener("click", showResults);
  
    // Function to handle the submit button click event
    function showResults() {
      // Get the reference to the quiz container
      var quizContainer = document.getElementById("quiz");
  
      // Hide the quiz container
      quizContainer.style.display = "none";
  
      // Display the results
      // Replace this code with your logic to show the results
      alert("Showing results!");
    }
  });
  

  document.getElementById("submit-btn").addEventListener("click", function(event) 
  {
    event.preventDefault();
    submitQuiz();}
);}
  
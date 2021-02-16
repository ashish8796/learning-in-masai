// Write any 3-4 simple functions nested inside each other. Represent how a call stack would look for such execution. Can write down function and stack representation on a paper and submit the image.

function name() {
  console.log("ashish");

  function age() {
    console.log(24);

    function profession() {
      console.log("Web dev");
    }

    profession();
  }

  age();
}

name();

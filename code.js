// // Scope and Global Scope
function init (){
  var globalVar = 'GlobalVar';

  function parent(){
    var parentVar = 'parentVar';
    globalVar = 'newGlobalBal';
    console.log(globalVar);
    parentVar = 'new parent var';
    // console.log(childVar);

    function childOne(){
      var childVar = 'childVar'
      console.log(childVar, parentVar, globalVar);
      console.log(parentTwoVar, childTwoVar, grandChildVar);
      function grandChild(){
        grandChildVar = 'grandChildVar'
      }
    }
    
    function childTwo(){
      childTwoVar = 'childTwoVar'
      childOne();
    }
    childTwo()
  }

  function parentTwo(){
    parentTwoVar = 'parentTwoVar';
    console.log(parentTwoVar);
  }

  parentTwo()
  parent()
  // --------

  // function fun() {
  //   output = 'value';
  //   return output = 'some value';
  // };

  // console.log(fun('Jacob', '50'))
  // console.log(output);
  }

init()
const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
<<<<<<< HEAD
      let result=record.find(o=>o.result==="W");
      if(Boolean(result)===true)
      return result.year;

      //return undefined;

=======
  return record.find(
    record.result=>record.result==="W")
    return record.year;
  );
>>>>>>> b5c06ad5522715a496d88a386acf89caf358a804
}

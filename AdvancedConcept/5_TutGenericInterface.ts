interface Pair<U,V>{
    value1:U;
    value2:V;
}

function getPairInformation(pair:Pair<string,string>)
{
  console.log(pair);
  console.log(pair.value1);
  console.log(pair.value2);
}

function getPairInformation1(pair:Pair<string,number>)
{
    console.log(pair);
    console.log(pair.value1);
    console.log(pair.value2);
}

// calling the function

getPairInformation({
    value1:'this is testing',
    value2:'this is testing'
});


getPairInformation1({
    value1:'this is another testing',
    value2:2345,
});



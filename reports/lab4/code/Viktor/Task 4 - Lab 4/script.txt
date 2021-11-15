function createRandomArray(size){
  console.log("size = ", size);
  var temp = [];
  for(let i = 0; i<size; i++)
     temp.push(getRandomInt(100));
  return temp;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function QuickSort(array)
{
    if (array.length == 0)
      return [];

    var a = [], b = [], p = array[0];

    for (var i = 1; i < array.length; i++){
      if (array[ i ] < p)
        a[a.length] = array[i];
      else
        b[b.length] = array[i];
    }

    return QuickSort(a).concat( p,QuickSort(b) );
}

function getMaxItemPosition(array){
  var max = array[0];
  var max_position = 0;
  for(var i = 1; i<array.length; i++){
    if(max<array[i]){
      max = array[i];
      max_position = i;
    }
  }
  return max_position;
}

function getMinItemPosition(array){
  var min = array[0];
  var min_position = 0;
  for(var i = 1; i<array.length; i++){
    if(min>array[i]){
      min = array[i];
      min_position = i;
    }
  }
  return min_position;
}

function calculateSum(array){
  var max = getMaxItemPosition(array);
  var min = getMinItemPosition(array);
  var sum = 0;
  if(max>=min){
    for(var i = min+1; i <max; i++)
      sum += array[i];
  }else{
    for(var i = max+1; i <min; i++)
      sum += array[i];
  }
  return sum;
}

function main(){
    var getArraySize = document.getElementById('array_size');
    document.getElementById("size").innerHTML = "Введений розмір масиву = " + getArraySize.value + ".";
    var numbers = createRandomArray(parseInt(getArraySize.value));
    document.getElementById("array_first").innerHTML = numbers;
    document.getElementById("max").innerHTML = "Максимальний елемент = " + numbers[getMaxItemPosition(numbers)];
    document.getElementById("min").innerHTML = "Мінімальний елемент = " + numbers[getMinItemPosition(numbers)];
    var sum = calculateSum(numbers);
    document.getElementById("sum").innerHTML = "Сума між максимальним і мінімальним елементами = " + sum;
    document.getElementById("array_second").innerHTML = numbers;
    numbers = QuickSort(numbers);
    document.getElementById("array_sorted").innerHTML = numbers;
}

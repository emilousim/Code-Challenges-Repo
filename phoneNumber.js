//EMILY SIMPSON AND IMMANUEL MAMOU

let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(arr){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < arr.length; i++)
    {
      format = format.replace('x', arr[i]);
    }
    
    return format;
  }

  console.log(createPhoneNumber(phoneNumber))
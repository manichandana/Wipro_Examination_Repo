function validate()
{
	if( document.myForm.url.value == "")
    {
      alert( "Please provide your valid URL" );
      return false;
    } 
	
	var url = document.getElementById("url").value;
	var URL = "http://wiprodigital.com";
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    
    if(url.indexOf(URL) == -1)
    	{
    	 alert("Url is invalid!is not matching as \"http://wiprodigital.com\"");
    	    return false;
    	}
    /*if (pattern.test(url)) {
        alert("Url is valid");
        return true;
    } */
        
}
	   
   

function displayImage(element) {
	document.getElementById('imageReplace').src = element;
	}



   

	   
   



   
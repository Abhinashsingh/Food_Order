

document.querySelector("#Log").addEventListener("click",function()
{

	document.querySelector(".popuplogin").style.display="flex";
	document.querySelector('body').style.overflow="hidden";

})
document.querySelector(".xicon").addEventListener("click",function()
{

	document.querySelector(".popuplogin").style.display="none";
	document.querySelector('body').style.overflow="auto";
})



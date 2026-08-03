const map = document.getElementById("map");
const mapText = document.getElementById("mapText");
const parkingBtn = document.getElementById("parking");
const gothenburgBtn = document.getElementById("göteborg");
const varbergBtn = document.getElementById("varberg")




parkingBtn.addEventListener("click", function() {
    map.src = "https://www.google.com/maps/embed?pb=!4v1785481162443!6m8!1m7!1s-5bAgiAJ91yl3cGvi3rGVQ!2m2!1d58.68928735242014!2d13.20297771458439!3f320.4199787267238!4f-6.655518064543898!5f0.7820865974627469" 
    mapText.innerHTML ="Vid spiken kan du fritt parkera vid husvagnsparkeringen under hela din vistelse\n"
    

});
// gbg
gothenburgBtn.addEventListener("click", function() {
    map.src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d748592.021788224!2d11.87177176341829!3d58.19444599188016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x464f8e67966c073f%3A0x4019078290e7c40!2zR8O2dGVib3Jn!3m2!1d57.70887!2d11.97456!4m5!1s0x465b30decff456c1%3A0x5c746460cfaee254!2sSpiken%2C%20531%2099!3m2!1d58.687996299999995!2d13.2003256!5e1!3m2!1ssv!2sse!4v1785416757138!5m2!1ssv!2sse" 
    mapText.innerHTML ="Från Göteborg tar du smidigast E22an mot Sthml"


});

varbergBtn.addEventListener("click", function(){
    map.src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d895255.7486624954!2d12.19489494441109!3d57.993668512320546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x465029e864525f1d%3A0x4019078290e7b80!2sVarberg!3m2!1d57.107118!2d12.2520907!4m5!1s0x465b31ed3cd1113d%3A0x232dd211fbe10987!2zSHVzYmlsc3TDpGxscGxhdHMgU3Bpa2VuLCBLw6VsbGFuZHPDtg!3m2!1d58.689508999999994!2d13.202356799999999!5e1!3m2!1ssv!2sse!4v1785482379734!5m2!1ssv!2sse" 
    mapText.innerHTML ="Från Varberg får du åka via gbg mot Sthml, tar ca 3h så se till att a roliga sånger i bilen!!!"
});














// 
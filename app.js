const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  let dropdown=document.querySelectorAll(".dropdown select")
    let btn=document.querySelector("form button")
    let fromCurr=document.querySelector(".from select")
    let toCurr=document.querySelector(".to select")
    let msg=document.querySelector('.msg')

  for(let select of dropdown){
    for(let code in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=code;
        newOption.value=code;
        select.append(newOption)
        if(select.name ==="from" && code=== "USD" )
        {
            newOption.selected="selected"
        }
        if(select.name ==="to" && code=== "PKR" )
        {
            newOption.selected="selected"
        }
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target)
    })
  }

  const updateFlag = (element) =>{
    let currCode=element.value;
    let countryCode=countryList[currCode]
    // console.log(countryCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img")
    img.src=newSrc;
  }
  btn.addEventListener('click',async(evt) => {
    evt.preventDefault();
    let value=document.querySelector("form input");
    let amount=value.value;

    // console.log(fromCurr.value.toLowerCase(),toCurr.value.toLowerCase())
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}`;
    let response =await fetch(URL)
   let data= await response.json();
   console.log(data)
   let rate=data[toCurr.value.toLowerCase()];
   console.log(rate)
   let finalAmout=amount*rate;
 

   msg.innerText=`${amount} ${fromCurr.value}  = ${finalAmout} ${toCurr.value.toUpperCase()}`
  })




  
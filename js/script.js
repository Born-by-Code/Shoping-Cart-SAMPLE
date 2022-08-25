function UpdateCaseNumber(isIncrease){
    const CaseNumberField = document.getElementById('case-number-field');
    const CasePriveousString = CaseNumberField.value;
    const CaseNumberInt = parseInt(CasePriveousString);

    if(isIncrease === true){
        CaseNumberupdate = CaseNumberInt + 1;
    }
    else{
        CaseNumberupdate = CaseNumberInt - 1;
    }

    CaseNumberField.value = CaseNumberupdate;
}

document.getElementById('case-btm-plus').addEventListener('click',function(){
    
    UpdateCaseNumber(true);
})
document.getElementById('case-btm-minus').addEventListener('click',function(){
    UpdateCaseNumber(false);
    
})

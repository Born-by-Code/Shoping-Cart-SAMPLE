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
    return CaseNumberupdate;
}

function UpdateCaseTotalPrize(){
    const CaseTotalPrize = document.getElementById('case-prize');
    CaseTotalPrize.innerText = CaseNumberupdate * 59;
}
document.getElementById('case-btm-plus').addEventListener('click',function(){
    
    const CaseNumberupdate = UpdateCaseNumber(true);
    UpdateCaseTotalPrize()
})
document.getElementById('case-btm-minus').addEventListener('click',function(){
    
    const CaseNumberupdate = UpdateCaseNumber(false);
    UpdateCaseTotalPrize()
    
})

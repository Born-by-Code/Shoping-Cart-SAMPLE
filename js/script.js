document.getElementById('case-btm-plus').addEventListener('click',function(){
    const CaseNumberField = document.getElementById('case-number-field');
    const CasePriveousString = CaseNumberField.value;
    const CaseNumberInt = parseInt(CasePriveousString);
    const CaseNumberupdate = CaseNumberInt + 1;
    CaseNumberField.value = CaseNumberupdate;
    console.log(CaseNumberField);
})

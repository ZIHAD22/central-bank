const btn = document.getElementById('loging')
const pName = document.getElementById('name')
const validName = document.getElementById('validation-name')
const pEmail = document.getElementById('email')
const validEmail = document.getElementById('validation-email')
const submitArea = document.getElementById('loging-area')
const transitionArea = document.getElementById('transition-area')
const depositFild = document.getElementById('deposit-fild')
const withdrawFild = document.getElementById('withdraw-fild')
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')
const depositPushValue = document.getElementById('deposit-in-value')
const balancePushValue = document.getElementById('balance-in-value')
const withdrawPushValue = document.getElementById('withdraw-in-value')
btn.addEventListener('click', () => {
    if (pName.value === "" || pEmail.value === "") {
        if (pName.value === "" || pEmail.value === "") {
            validName.innerText = 'Please Inter Your Name and E-mail Both'
            validEmail.style.Color = 'white'
            validEmail.style.backgroundColor = '#7777'
            validEmail.style.Wdith = '600px'
        }
    } else {
        submitArea.style.display = 'none'
        transitionArea.style.display = 'block'
    }
})
depositBtn.addEventListener('click', () => {
    let depositValue = depositFild.value
    depositValue = parseFloat(depositValue)
    let oldDepositValue = depositPushValue.innerText
    oldDepositValue = parseFloat(oldDepositValue)
    let finalResult = oldDepositValue + depositValue
    depositPushValue.innerText = finalResult
    let oldBalanceValue = balancePushValue.innerText
    oldBalanceValue = parseFloat(oldBalanceValue)
    let finalBalanceValue = (oldBalanceValue + depositValue)
    balancePushValue.innerText = finalBalanceValue
    depositFild.value = ""
})
withdrawBtn.addEventListener('click', () => {
    let withdrawValue = withdrawFild.value
    withdrawValue = parseFloat(withdrawValue)
    let oldWithdrawValue = withdrawPushValue.innerText
    oldWithdrawValue = parseFloat(oldWithdrawValue)
    let finalWithdrawValue = withdrawValue + oldWithdrawValue
    withdrawPushValue.innerText = finalWithdrawValue
    let oldWithdrawBalanceValue = balancePushValue.innerText
    oldWithdrawBalanceValue = parseFloat(oldWithdrawBalanceValue)
    let finalWithdrawBalaceValue = (oldWithdrawBalanceValue - withdrawValue)
    balancePushValue.innerText = finalWithdrawBalaceValue
    console.log(withdrawValue);
    withdrawFild.value = ''
})
dp1.addEventListener('input', dpCalc);
cyl1.addEventListener('input', dpCalc);
ax1.addEventListener('input', dpCalc);
const idArray = ['dp1', 'cyl1', 'ax1'];
function dpCalc() {
    let dp2_new = Number(dp1.value) + Number(cyl1.value);
    let cyl2_new = 0 - Number(cyl1.value);
    let axNew = Number(ax1.value) % 180;
    if (axNew < 90) { ax2.textContent = axNew + 90; }
    else { ax2.textContent = axNew - 90; }

    if (dp2_new > 0) {
        dp2.textContent = " +" + (dp2_new).toFixed(2) + " Dsph";
    }
    else {
        dp2.textContent = " " + (dp2_new).toFixed(2) + " Dsph";
    }
    if (cyl2_new > 0) {
        cyl2.textContent = " +" + (cyl2_new).toFixed(2) + " Dcyl";
    }
    else {
        cyl2.textContent = " " + (cyl2_new).toFixed(2) + " Dcyl";
    }
}
function focusNext(e) {
    try {
        for (let i = 0; i < idArray.length; i++) {
            if (e.key === 'Enter' && e.target.id === idArray[i]) {
                document.querySelector(`#${idArray[i + 1]}`).focus();
            }
        }
    } catch (error) { }
}
dpCalc();

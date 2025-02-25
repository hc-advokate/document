import ProgressBar from "../NodeJS/demo.mjs";

const version = "5_4_0";
const file = "dmg";
const maxNum = 3999;
let num = 2999;

let bar = new ProgressBar(':bar', { total: maxNum - num });
function getUrl() {
    bar.tick();
    if (num > maxNum) { return false; }
    // let url = `https://lf3-package.vlabstatic.com/obj/faceu-packages/Jianying_${version}_${num}_jianyingpro_0_creatortool.${file}`;
    let url = `https://lf16-capcut.faceulv.com/obj/capcutpc-packages-us/packages/CapCut_${version}_${num}_capcutpc_0_creatortool.${file}`;
    fetch(url).then(res => {
        if (res.ok) {
            console.log(url);
        }
        num += 1;
        getUrl();
    });
}

getUrl();
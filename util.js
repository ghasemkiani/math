//	@ghasemkiani/math/util

import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";

class Util extends Obj {
	geometricProgressionSum(r, n) {
		return (r ** n - 1) / (r - 1);
	}
	geometricProgressionRatio(s, n, r1 = 2) {
		let y = r => (r ** n - 1) / (r - 1) - s;
		let yp = r => ((n * r ** (n - 1) * (r - 1)) - (r ** n - 1)) / (r - 1) ** 2;
		let f = r => r - (y(r) / yp(r));
		
		let r = r1;
		while(r - (r = f(r)) > 1e-8) {}
		return r;
	}
	log(n, b) {
		return cutil.isNil(b) ? Math.log(n) : Math.log(n) / Math.log(b);
	}
	log10(n) {
		return this.log(n, 10);
	}
	exp(n, b) {
		return cutil.isNil(b) ? Math.exp(n) : b ** n;
	}
	pearson(data) {
		let sxy = 0;
		let sx = 0;
		let sy = 0;
		let sx2 = 0;
		let sy2 = 0;

		for(let [x, y] of data) {
			sxy += x * y;
			sx += x;
			sy += y;
			sx2 += x ** 2;
			sy2 += y ** 2;
		}

		let n = data.length;

		let exy = sxy / n;
		let ex = sx / n;
		let ey = sy / n;
		let ex2 = sx2 / n;
		let ey2 = sy2 / n;

		let rho = (exy - ex * ey) / (Math.sqrt(ex2 - (ex ** 2)) * Math.sqrt(ey2 - (ey ** 2)));
		
		return rho;
	}
}

const util = new Util();

export {Util, util};

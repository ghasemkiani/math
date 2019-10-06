//	@ghasemkiani/math/mutil

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");

class MUtil extends Base {
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
	exp(n, b) {
		return cutil.isNil(b) ? Math.exp(n) : b ** n;
	}
}

const mutil = new MUtil();

module.exports = {MUtil, mutil};

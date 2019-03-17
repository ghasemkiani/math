//	@ghasemkiani/math/mutil

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");

class MUtil extends Base {
	geometricProgressionRatio(s, n, x1 = 2) {
		let y = x => (x ** n - 1) / (x - 1) - s;
		let yp = x => ((n * x ** (n - 1) * (x - 1)) - (x ** n - 1)) / (x - 1) ** 2;
		let f = x => x - (y(x) / yp(x));
		
		let x = x1;
		while(x - (x = f(x)) > 1e-8) {}
		return x;
	}
}
cutil.extend(MUtil.prototype, {
	//
});

const mutil = new MUtil();

module.exports = {MUtil, mutil};

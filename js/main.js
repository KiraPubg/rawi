const buttons = document.querySelectorAll(".calc-button");
const calcP = document.querySelector(".calc__result p");
const inps = document.querySelectorAll(".calc__choose-crate input");

let bootleWeight = 0.330;
let bigCrate = {
	bootles: 36,
	liters: function () {
		return this.bootles * bootleWeight
	}
}
bigCrate.liters()
let smCrate = {
	bootles: 28,
	liters: function () {
		return this.bootles * bootleWeight
	}
}

let cartoon = {
	bootles: 12,
	liters: function () {
		return this.bootles * bootleWeight
	},
}
smCrate.liters()

inps.forEach(el => {
	el.addEventListener("click", () => {
		if (el.id === "bigcrate") {
			console.log("sdada")
			document.querySelector(".calc-title span").innerText = bigCrate.bootles + " ";
		} else if (el.id === "smcrate") {
			document.querySelector(".calc-title span").innerText = smCrate.bootles + " ";
		} else if (el.id === "cartoon") {
			document.querySelector(".calc-title span").innerText = cartoon.bootles + "  ";
		}
	})
})

buttons.forEach(el => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		if (e.target.id === "first") {
			const inp = el.parentElement.querySelector(".calc-input")
			let checkedInp;
			document.querySelectorAll(".calc__choose-crate input")
				.forEach(el => {
					if (el.checked) {
						checkedInp = el.id
					}
				})
			if (+inp.value < 100) {
				inp.style.border = "1px solid red"
			} else {
				if (checkedInp === "bigcrate") {
					calcP.innerText = `Ящиков/коробок: ${Math.trunc(+inp.value / bigCrate.liters())}`
				} else if (checkedInp === "smcrate") {
					calcP.innerText = `Ящиков/коробок: ${Math.trunc(+inp.value / smCrate.liters())}`
				} else if (checkedInp === "cartoon") {
					calcP.innerText = `Ящиков.коробок: ${Math.trunc(+inp.value / cartoon.liters())}`
				}
			}
		} else if (e.target.id === "last") {
			let checkedInp;
			const inp = el.parentElement.querySelector(".calc-input")
			const lastP = el.parentElement.querySelector("p");

			document.querySelectorAll(".calc__first-choose input")
				.forEach(el => {
					if (el.checked) {
						checkedInp = el.id
					}
				})
			if (+inp.value < 0 && +inp.value === 0) {
				inp.style.border = "1px solid red";
			} else {
				if (checkedInp === "big") {
					lastP.innerText = `Литров: ${bigCrate.liters() * +inp.value}`;
				} else if (checkedInp === "sm") {
					lastP.innerText = `Литров: ${smCrate.liters() * +inp.value}`;
				} else if (checkedInp === "cart") {
					lastP.innerText = `Литров: ${cartoon.liters() * +inp.value}`
				}
			}
		}
	})
})
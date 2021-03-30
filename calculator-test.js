
it('should calculate the monthly rate correctly', function () {
  // ...
	expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 5})).toBe("106.07");
	expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 8})).toBe("202.76");
});

it('should calculate monthly payment with 0% interest rate', function() {
	expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 0})).toBe("83.33");
})
/// etc
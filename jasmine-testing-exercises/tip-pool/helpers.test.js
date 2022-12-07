describe("tests for helpers.js", function () {
  beforeEach(function () {
    billAmtInput.value = 10;
    tipAmtInput.value = 2;
    submitPaymentInfo();
  });

  it("should sum total tip amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(2);

    billAmtInput.value = 20;
    tipAmtInput.value = 4;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(6);
  });

  it("should sum total bill amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(10);

    billAmtInput.value = 20;
    tipAmtInput.value = 4;

    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(30);
  });

  it("should sum total tip percent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 10;
    tipAmtInput.value = 2;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should sum tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 27)).toEqual(27);
    expect(calculateTipPercent(50, 25)).toEqual(50);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});

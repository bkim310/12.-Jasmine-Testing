describe("tests for payments.js", function () {
  //testing the inputs to be $10 bill and $2 tip
  beforeEach(function () {
    billAmtInput.value = 10;
    tipAmtInput.value = 2;
  });

  it("should add a new payment to allPayments on submitPaymentInfo()", function () {
    //submit the form with $10 bill and $2 tip
    submitPaymentInfo();

    //expect the length of allPayments object to be 1,
    //expect the billAmt to be 10
    //expect the tipAmt to be 2
    //expect the tipPercent to be 20
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("10");
    expect(allPayments["payment1"].tipAmt).toEqual("2");
    expect(allPayments["payment1"].tipPercent).toEqual(20);
  });

  it("should not add a new payment on submitPaymentInfo() with empty input", function () {
    //set the bill amt to empty string to represent no bill
    billAmtInput.value = "";
    //submit the bill form
    submitPaymentInfo();

    //expect the length of the bill object to be 0, as there should not be any bill added to the allPayments object
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  //testing the functionality of updating the table when we submit the form
  it("should payment update #paymentTable on appendPaymentTable()", function () {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");

    //testing that the table is correctly appended
    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual("$10");
    expect(curTdList[1].innerText).toEqual("$2");
    expect(curTdList[2].innerText).toEqual("20%");
  });

  it("should create a new payment on createCurPayment()", function () {
    //make sure the created payment object is correct
    let expectedPayment = {
      billAmt: "10",
      tipAmt: "2",
      tipPercent: 20,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it("should not create payment with empty input on createCurPayment()", function () {
    //when the bill and tip inputs are empty, there should be no payment appended to the table
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});

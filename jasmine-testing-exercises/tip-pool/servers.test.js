describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server name on submitServerInfo() when there is an empty input", function () {
    //to test, set value to empty string
    //run the submission form
    //expect there to be no servers listed
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update the table when updateServerTable() is run", function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll("#serverTable tbody tr td");

    expect(curTdList.length).toEqual(2);
    //there should be two things in the table
    //the server's name and their earning
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});

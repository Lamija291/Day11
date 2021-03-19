var monitorsListArray = ["Dell", "Philips", "Samsung"];
monitorsList = [];

function myMonitorsListFunction(arr) {
    var newMonitorsList = [...arr];
    var i;
    for(i = 0; i < 3; i++){
        monitorsList.push([monitorsListArray[i]] + "," + i);
    }
    return monitorsList;
};


console.log(myMonitorsFunction(monitorsList));

module.exports = myMonitorsFunction;
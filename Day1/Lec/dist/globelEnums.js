var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Completed"] = 1] = "Completed";
    Status[Status["Canceled"] = 2] = "Canceled";
})(Status || (Status = {}));
console.log(Gender.Female);

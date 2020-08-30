function companyUsers(input) {
  let companies = {};
  for (const elem of input) {
    let [company, id] = elem.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    companies[company].push(id);
  }
  let sorted = Object.entries(companies);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let elem of sorted) {
    console.log(elem[0]);
    let set = new Set(elem[1]);
    for (let number of set) {
      console.log(`-- ${number}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345"
]);

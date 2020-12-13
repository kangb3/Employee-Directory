if (this.state.order === "ascend") {
    // account for missing values
    if (a[heading] === undefined) {
      return 1;
    } else if (b[heading] === undefined) {
      return -1;
    }
    // numerically
    else if (heading === "name") {
      return a[heading].first.localeCompare(b[heading].first);
    } else {
      return a[heading] - b[heading];
    }
  } else {
    // account for missing values
    if (a[heading] === undefined) {
      return 1;
    } else if (b[heading] === undefined) {
      return -1;
    }
    // numerically
    else if (heading === "name") {
      return b[heading].first.localeCompare(a[heading].first);
    } else {
      return b[heading] - a[heading];
    }
  }


  console.log(event.target.value);
  const filter = event.target.value;
  const filteredList = this.state.users.filter(item => {
    // merge data together, then see if user input is anywhere inside
    let values = Object.values(item)
      .join("")
      .toLowerCase();
    return values.indexOf(filter.toLowerCase()) !== -1;
  });
  this.setState({ filteredUsers: filteredList });


  function add(x,y) {}
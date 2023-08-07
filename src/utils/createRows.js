const createRows = (data, columns) => {
  const keys = { ...columns.map((c) => c.dataIndex) };
  const rows = [];

  for (let dataItem of data) {
    const temp = {
      key: String(Date.now().toString(32) + Math.random().toString(16)).replace(
        /\./g,
        ''
      ),
    };

    for (const keyIndex in keys) {
      const key = keys[keyIndex];
      let value = dataItem[keyIndex];
      if (typeof value === 'object') {
        value = value.d;
      }
      if (typeof value === 'boolean') {
        value = String(value);
      }
      temp[key] = value;
    }

    rows.push(temp);
  }

  return rows;
};

export default createRows;
